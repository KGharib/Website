import { BriefcaseBusiness, CheckCircle2, Code2, Mail, MapPin } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { Section } from "@/components/Section";
import { siteConfig } from "@/data/siteConfig";

export function Contact() {
  const emailHref = siteConfig.contact.email ? `mailto:${siteConfig.contact.email}` : "#contact";

  return (
    <Section
      id="health-check"
      tone="mint"
      eyebrow={siteConfig.freeHealthCheck.eyebrow}
      title={siteConfig.freeHealthCheck.title}
      intro={siteConfig.freeHealthCheck.description}
    >
      <span id="contact" className="block scroll-mt-0" aria-hidden="true" />
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <aside className="glass-panel rounded-lg border border-[var(--color-border)] p-6">
          <h3 className="text-xl font-bold text-[var(--color-ink)]">What you get</h3>
          <ul className="mt-5 space-y-3">
            {siteConfig.freeHealthCheck.includes.map((item) => (
              <li key={item} className="flex gap-3 text-sm font-semibold leading-6 text-[var(--color-ink)]">
                <CheckCircle2 aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-[var(--color-accent)]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 border-t border-[var(--color-border)] pt-6">
            <h4 className="text-sm font-bold uppercase text-[var(--color-accent)]">Contact details</h4>
            <div className="mt-4 space-y-4">
              {siteConfig.contact.email ? (
                <a href={emailHref} className="flex items-center gap-3 text-sm font-semibold text-[var(--color-ink)] hover:text-[var(--color-accent)]">
                  <Mail aria-hidden="true" className="h-5 w-5 text-[var(--color-coral)]" />
                  <span>{siteConfig.contact.email}</span>
                </a>
              ) : null}
              <p className="flex items-center gap-3 text-sm font-semibold text-[var(--color-ink)]">
                <MapPin aria-hidden="true" className="h-5 w-5 text-[var(--color-coral)]" />
                <span>{siteConfig.contact.location}</span>
              </p>
            </div>
          </div>
          <div className="mt-8 flex gap-3">
            {siteConfig.socials.linkedin ? (
              <a
                href={siteConfig.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-md border border-[var(--color-border)] bg-[var(--color-panel-strong)] text-[var(--color-ink)] transition hover:text-[var(--color-accent)]"
                aria-label="LinkedIn profile"
              >
                <BriefcaseBusiness aria-hidden="true" className="h-5 w-5" />
              </a>
            ) : null}
            {siteConfig.socials.github ? (
              <a
                href={siteConfig.socials.github}
                target="_blank"
                rel="noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-md border border-[var(--color-border)] bg-[var(--color-panel-strong)] text-[var(--color-ink)] transition hover:text-[var(--color-accent)]"
                aria-label="GitHub profile"
              >
                <Code2 aria-hidden="true" className="h-5 w-5" />
              </a>
            ) : null}
          </div>
        </aside>

        <div className="glass-panel rounded-lg border border-[var(--color-border)] p-6 sm:p-8">
          <ContactForm endpoint={siteConfig.contact.contactFormEndpoint} email={siteConfig.contact.email} />
        </div>
      </div>
    </Section>
  );
}
