"use client";

import { useEffect, useRef, useState } from "react";
import {
  BriefcaseBusiness,
  CalendarCheck,
  CircleAlert,
  Code2,
  Home,
  PanelsTopLeft,
  UserRound,
  Wrench
} from "lucide-react";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { Logo } from "@/components/Logo";
import { siteConfig } from "@/data/siteConfig";
import { cx } from "@/lib/utils";

const sidebarLinks = [
  { label: "Home", href: "#top", icon: Home },
  { label: "The Data Problem", href: "#problem", icon: CircleAlert },
  { label: "Data Support", href: "#value", icon: PanelsTopLeft },
  { label: "Expertise", href: "#expertise", icon: Wrench },
  { label: "About", href: "#about", icon: UserRound },
  { label: "Health Check", href: "#health-check", icon: CalendarCheck }
] as const;

export function Header() {
  const healthCheckHref = siteConfig.contact.calendlyUrl || siteConfig.healthCheckHref;
  const [activeHref, setActiveHref] = useState("#top");
  const pendingHrefRef = useRef<string | null>(null);
  const pendingTimeoutRef = useRef<number | null>(null);

  useEffect(() => {
    const updateActiveSection = () => {
      const activationLine = window.innerHeight * 0.35;

      if (pendingHrefRef.current) {
        const pendingSection = document.querySelector(pendingHrefRef.current);
        const pendingRect = pendingSection?.getBoundingClientRect();
        const hasReachedPendingSection =
          pendingRect && pendingRect.top <= activationLine && pendingRect.bottom > activationLine;

        if (!hasReachedPendingSection) {
          setActiveHref(pendingHrefRef.current);
          return;
        }

        pendingHrefRef.current = null;
      }

      let currentHref = "#top";

      for (const link of sidebarLinks) {
        const section = document.querySelector(link.href);

        if (!section) {
          continue;
        }

        if (section.getBoundingClientRect().top <= activationLine) {
          currentHref = link.href;
        }
      }

      setActiveHref(currentHref);
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);

      if (pendingTimeoutRef.current) {
        window.clearTimeout(pendingTimeoutRef.current);
      }
    };
  }, []);

  const handleNavClick = (href: string) => {
    pendingHrefRef.current = href;
    setActiveHref(href);

    if (pendingTimeoutRef.current) {
      window.clearTimeout(pendingTimeoutRef.current);
    }

    pendingTimeoutRef.current = window.setTimeout(() => {
      pendingHrefRef.current = null;
    }, 2200);
  };

  return (
    <header>
      <aside className="nav-surface fixed bottom-0 left-0 top-0 z-50 hidden w-[300px] overflow-y-auto px-[15px] py-6 xl:flex xl:flex-col xl:justify-center">
        <div className="nav-panel p-[15px]">
          <a href="#top" className="mb-6 block" aria-label={`${siteConfig.brandName} home`}>
            <Logo />
          </a>

          <nav aria-label="Primary navigation">
            <ul className="space-y-1">
              {sidebarLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={() => handleNavClick(link.href)}
                      className={cx(
                        "flex w-full items-center gap-3 rounded-full px-2.5 py-3.5 text-base font-normal transition",
                        activeHref === link.href
                          ? "bg-[rgba(80,120,152,0.14)] text-[var(--color-ink)] shadow-[inset_0_0_0_1px_var(--color-border)]"
                          : "text-[var(--color-muted)] hover:text-[var(--color-ink)]"
                      )}
                    >
                      <Icon
                        aria-hidden="true"
                        className={cx(
                          "h-5 w-5 text-[var(--color-accent)]",
                          activeHref === link.href ? "" : "opacity-75"
                        )}
                      />
                      <span className="min-w-0 whitespace-nowrap leading-tight">
                        <span className="block">{link.label}</span>
                      </span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="mt-5 flex items-center gap-2">
            {siteConfig.socials.linkedin ? (
              <a
                href={siteConfig.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-[rgba(255,255,255,0.1)] text-[var(--color-ink)] transition hover:bg-[var(--color-accent)] hover:text-[var(--color-contrast)]"
                aria-label="LinkedIn profile"
              >
                <BriefcaseBusiness aria-hidden="true" className="h-4 w-4" />
              </a>
            ) : null}
            {siteConfig.socials.github ? (
              <a
                href={siteConfig.socials.github}
                target="_blank"
                rel="noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-[rgba(255,255,255,0.1)] text-[var(--color-ink)] transition hover:bg-[var(--color-accent)] hover:text-[var(--color-contrast)]"
                aria-label="GitHub profile"
              >
                <Code2 aria-hidden="true" className="h-4 w-4" />
              </a>
            ) : null}
          </div>

          <Button href={healthCheckHref} variant="primary" size="sm" className="mt-5 w-full" icon={<CalendarCheck aria-hidden="true" className="h-4 w-4" />}>
            {siteConfig.primaryCtaLabel}
          </Button>
        </div>
      </aside>

      <div className="nav-surface sticky top-0 z-50 xl:hidden">
        <Container className="flex min-h-16 items-center justify-between gap-4 py-3">
          <a href="#top" className="leading-tight" aria-label={`${siteConfig.brandName} home`}>
            <Logo compact />
          </a>
          <Button href={healthCheckHref} variant="primary" size="sm" icon={<CalendarCheck aria-hidden="true" className="h-4 w-4" />}>
            {siteConfig.primaryCtaLabel}
          </Button>
        </Container>

        <nav aria-label="Mobile navigation">
          <Container className="flex gap-4 overflow-x-auto py-3">
            {sidebarLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => handleNavClick(link.href)}
                className={cx(
                  "shrink-0 rounded-full px-3 py-1 text-sm font-semibold transition",
                  activeHref === link.href
                    ? "bg-[rgba(80,120,152,0.14)] text-[var(--color-accent)]"
                    : "text-[var(--color-muted)] hover:text-[var(--color-accent)]"
                )}
              >
                {link.label}
              </a>
            ))}
          </Container>
        </nav>
      </div>
    </header>
  );
}
