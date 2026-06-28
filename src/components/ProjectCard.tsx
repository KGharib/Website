import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { Badge } from "@/components/Badge";

type ProjectCardProps = {
  title: string;
  category: string;
  clientType: string;
  image: string;
  alt: string;
  summary: string;
  businessValue: string;
  proofPoints: readonly string[];
  url: string;
};

export function ProjectCard({
  title,
  category,
  clientType,
  image,
  alt,
  summary,
  businessValue,
  proofPoints,
  url
}: ProjectCardProps) {
  return (
    <article className="grid overflow-hidden rounded-lg border border-[var(--color-border)] bg-[var(--color-panel)] shadow-[var(--shadow-panel)] lg:grid-cols-[0.95fr_1.05fr]">
      <div className="relative min-h-[260px] bg-[var(--color-deep)]">
        <Image src={image} alt={alt} fill sizes="(min-width: 1024px) 40vw, 100vw" className="object-cover" />
      </div>
      <div className="p-6 sm:p-8">
        <div className="flex flex-wrap items-center gap-2">
          <Badge>{category}</Badge>
          <span className="rounded-full border border-[var(--color-border)] bg-[rgba(237,248,245,0.04)] px-3 py-1 text-xs font-semibold text-[var(--color-muted)]">
            {clientType}
          </span>
        </div>
        <h3 className="mt-5 text-2xl font-bold leading-tight text-[var(--color-ink)]">{title}</h3>
        <p className="mt-3 text-sm leading-6 text-[var(--color-muted)]">{summary}</p>
        <p className="mt-4 text-sm font-semibold leading-6 text-[var(--color-ink)]">{businessValue}</p>
        <ul className="mt-5 grid gap-2 text-sm leading-6 text-[var(--color-muted)] sm:grid-cols-3">
          {proofPoints.map((point) => (
            <li key={point} className="rounded-md border border-[var(--color-border)] bg-[var(--color-panel-strong)] px-3 py-2">
              {point}
            </li>
          ))}
        </ul>
        <a
          href={url}
          target="_blank"
          rel="noreferrer"
          className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-accent)] transition hover:text-[var(--color-coral)]"
        >
          View project source
          <ExternalLink aria-hidden="true" className="h-4 w-4" />
        </a>
      </div>
    </article>
  );
}
