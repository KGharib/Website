import { siteConfig } from "@/data/siteConfig";
import { Container } from "@/components/Container";

export function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-deep)] py-8 text-[var(--color-ink)]">
      <Container className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-bold">{siteConfig.brandName}</p>
          <p className="mt-1 text-sm text-[var(--color-muted)]">{siteConfig.tagline}</p>
        </div>
        <div className="flex flex-wrap gap-4 text-sm text-[var(--color-muted)]">
          {siteConfig.navLinks.map((link) => (
            <a key={link.href} href={link.href} className="transition hover:text-[var(--color-accent)]">
              {link.label}
            </a>
          ))}
        </div>
      </Container>
    </footer>
  );
}
