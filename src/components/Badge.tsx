import type { ReactNode } from "react";
import { cx } from "@/lib/utils";

type BadgeProps = {
  children: ReactNode;
  className?: string;
};

export function Badge({ children, className }: BadgeProps) {
  return (
    <span
      className={cx(
        "inline-flex items-center rounded-full border border-[rgba(143,181,209,0.52)] bg-[rgba(5,16,27,0.78)] px-3 py-1 text-xs font-semibold uppercase text-[#dcebf5] shadow-[0_0_20px_rgba(80,120,152,0.18)]",
        className
      )}
    >
      {children}
    </span>
  );
}
