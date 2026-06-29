import type { ReactNode } from "react";
import { SiteFooter, SiteHeader } from "@/website_v3/components";

export default function WebsiteV3Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-[#050914] text-slate-100">
      <SiteHeader />
      <main>{children}</main>
      <SiteFooter />
    </div>
  );
}
