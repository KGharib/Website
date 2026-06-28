import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { cx } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost" | "dark";
type ButtonSize = "sm" | "md" | "lg";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  type?: "button" | "submit";
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  icon?: ReactNode;
  showArrow?: boolean;
  target?: "_blank" | "_self";
  rel?: string;
};

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "border-2 border-[var(--color-accent)] bg-[var(--color-accent)] text-[var(--color-contrast)] shadow-[0_8px_25px_var(--color-glow)] hover:-translate-y-0.5 hover:bg-[var(--color-accent-dark)]",
  secondary:
    "border-2 border-[var(--color-accent)] bg-[var(--color-accent)] text-[var(--color-contrast)] shadow-[0_8px_25px_var(--color-glow)] hover:-translate-y-0.5 hover:bg-[var(--color-accent-dark)]",
  ghost:
    "border-2 border-[var(--color-accent)] bg-transparent text-[var(--color-accent)] hover:-translate-y-0.5 hover:bg-[var(--color-accent)] hover:text-[var(--color-contrast)]",
  dark: "border-2 border-[var(--color-border)] bg-[var(--color-panel-strong)] text-[var(--color-ink)] hover:bg-[var(--color-panel-soft)]"
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "min-h-10 px-4 text-sm",
  md: "min-h-11 px-5 text-sm",
  lg: "min-h-12 px-6 text-base"
};

export function Button({
  children,
  href,
  type = "button",
  variant = "primary",
  size = "md",
  className,
  icon,
  showArrow = false,
  target,
  rel
}: ButtonProps) {
  const classes = cx(
    "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)]",
    "whitespace-normal text-center leading-tight",
    variantClasses[variant],
    sizeClasses[size],
    className
  );
  const content = (
    <>
      {icon}
      <span>{children}</span>
      {showArrow ? <ArrowRight aria-hidden="true" className="h-4 w-4 shrink-0" /> : null}
    </>
  );

  if (href) {
    return (
      <a className={classes} href={href} target={target} rel={rel}>
        {content}
      </a>
    );
  }

  return (
    <button className={classes} type={type}>
      {content}
    </button>
  );
}
