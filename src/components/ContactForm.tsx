import { Send } from "lucide-react";
import { Button } from "@/components/Button";
import { siteConfig } from "@/data/siteConfig";

type ContactFormProps = {
  endpoint?: string;
  email?: string;
};

export function ContactForm({ endpoint, email }: ContactFormProps) {
  const action = endpoint || (email ? `mailto:${email}` : "#contact");
  const usesMailto = !endpoint && Boolean(email);

  return (
    <form
      action={action}
      method="post"
      encType={usesMailto ? "text/plain" : undefined}
      className="grid gap-5"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className="text-sm font-semibold text-[var(--color-ink)]" htmlFor="name">
            Name
          </label>
          <input
            id="name"
            name="name"
            required
            autoComplete="name"
            className="mt-2 min-h-12 w-full rounded-md border border-[var(--color-border)] bg-[var(--color-deep)] px-4 text-[var(--color-ink)] outline-none transition focus:border-[var(--color-accent)] focus:ring-4 focus:ring-[rgba(80,120,152,0.16)]"
          />
        </div>
        <div>
          <label className="text-sm font-semibold text-[var(--color-ink)]" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className="mt-2 min-h-12 w-full rounded-md border border-[var(--color-border)] bg-[var(--color-deep)] px-4 text-[var(--color-ink)] outline-none transition focus:border-[var(--color-accent)] focus:ring-4 focus:ring-[rgba(80,120,152,0.16)]"
          />
        </div>
      </div>
      <div>
        <label className="text-sm font-semibold text-[var(--color-ink)]" htmlFor="company">
          Company
        </label>
        <input
          id="company"
          name="company"
          autoComplete="organization"
          className="mt-2 min-h-12 w-full rounded-md border border-[var(--color-border)] bg-[var(--color-deep)] px-4 text-[var(--color-ink)] outline-none transition focus:border-[var(--color-accent)] focus:ring-4 focus:ring-[rgba(80,120,152,0.16)]"
        />
      </div>
      <div>
        <label className="text-sm font-semibold text-[var(--color-ink)]" htmlFor="challenge">
          What needs fixing?
        </label>
        <textarea
          id="challenge"
          name="challenge"
          required
          rows={6}
          className="mt-2 w-full rounded-md border border-[var(--color-border)] bg-[var(--color-deep)] px-4 py-3 text-[var(--color-ink)] outline-none transition focus:border-[var(--color-accent)] focus:ring-4 focus:ring-[rgba(80,120,152,0.16)]"
        />
      </div>
      <Button type="submit" variant="secondary" size="lg" icon={<Send aria-hidden="true" className="h-4 w-4" />}>
        {siteConfig.primaryCtaLabel}
      </Button>
    </form>
  );
}
