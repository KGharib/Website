import type { ReactNode } from "react";
import { Container } from "@/components/Container";
import { Badge } from "@/components/Badge";
import { cx } from "@/lib/utils";

type SectionProps = {
  id?: string;
  eyebrow?: string;
  title?: string;
  intro?: string;
  children: ReactNode;
  className?: string;
  containerClassName?: string;
  tone?: "light" | "white" | "dark" | "mint";
};

const toneClasses = {
  light: "bg-[var(--color-page)] text-[var(--color-ink)]",
  white: "bg-[var(--color-panel-strong)] text-[var(--color-ink)]",
  dark: "bg-[var(--color-page)] text-[var(--color-ink)]",
  mint: "bg-[var(--color-mint)] text-[var(--color-ink)]"
};

export function Section({
  id,
  eyebrow,
  title,
  intro,
  children,
  className,
  containerClassName,
  tone = "light"
}: SectionProps) {
  return (
    <section
      id={id}
      className={cx("flex min-h-screen scroll-mt-0 items-center py-10 sm:py-12", toneClasses[tone], className)}
    >
      <Container className={containerClassName}>
        {(eyebrow || title || intro) && (
          <div className="mb-6 max-w-3xl">
            {eyebrow ? <Badge className="px-4 py-2 text-sm sm:text-base">{eyebrow}</Badge> : null}
            {title ? (
              <h2 className="mt-4 text-balance text-3xl font-bold leading-tight text-inherit sm:text-4xl">
                {title}
              </h2>
            ) : null}
            {intro ? (
              <p className="mt-3 text-base leading-7 text-[var(--color-muted)] sm:text-lg">
                {intro}
              </p>
            ) : null}
          </div>
        )}
        {children}
      </Container>
    </section>
  );
}
