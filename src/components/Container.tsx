import type { ReactNode } from "react";
import { cx } from "@/lib/utils";

type ContainerProps = {
  children: ReactNode;
  className?: string;
};

export function Container({ children, className }: ContainerProps) {
  return (
    <div className={cx("mx-auto w-full max-w-[92rem] px-4 sm:px-5 lg:px-6", className)}>
      {children}
    </div>
  );
}
