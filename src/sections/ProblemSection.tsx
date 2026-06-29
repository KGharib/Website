import Image from "next/image";
import { Badge } from "@/components/Badge";
import { Container } from "@/components/Container";

const painPoints = [
  {
    title: "Reports take too long",
    description:
      "Manual spreadsheets, copy/paste work and disconnected systems slow down decision-making.",
    image: "/images/problem/manual-reporting.png",
    imageAlt: "A business owner surrounded by manual spreadsheet reports and copied reporting files."
  },
  {
    title: "You can't see what is working",
    description:
      "Bookings, enquiries, sales, attendance and revenue are spread across too many places.",
    image: "/images/problem/scattered-data.png",
    imageAlt: "Separate booking, enquiry, sales and attendance data windows scattered around an empty dashboard."
  },
  {
    title: "Decisions rely on gut feeling",
    description:
      "Without one clear dashboard, it is hard to see where to focus, what to fix, what to grow, or make confident decisions.",
    image: "/images/problem/unclear-decisions.png",
    imageAlt: "Conflicting dashboard cards with one clear insight emerging from the noise."
  },
  {
    title: "Your tools don't speak to each other",
    description:
      "Data may exist in booking systems, spreadsheets, finance tools, CRMs and marketing platforms.",
    image: "/images/problem/disconnected-tools.png",
    imageAlt: "Disconnected business tools and data systems with broken connection lines."
  }
] as const;

export function ProblemSection() {
  return (
    <section id="problem" className="hero-one-surface flex min-h-screen scroll-mt-0 items-center py-10 text-[var(--color-ink)] sm:py-12">
      <Container>
        <div>
          <Badge className="px-4 py-2 text-sm sm:text-base">The Data Problem</Badge>
          <h2 className="mockup-title mt-4 text-3xl font-black leading-tight tracking-wide text-[var(--color-ink)] sm:text-4xl lg:text-4xl xl:whitespace-nowrap 2xl:text-5xl">
            You already have useful data - it&apos;s just scattered.
          </h2>
          <p className="mt-5 max-w-[82rem] text-sm leading-7 text-[var(--color-muted)] sm:text-base lg:text-[1.03rem] xl:leading-8">
            Most businesses don&apos;t have a data problem, they have a clarity problem. The answers are often already there.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {painPoints.map((point) => (
            <article
              key={point.title}
              className="glass-panel flex min-h-[25rem] flex-col overflow-hidden rounded-lg border border-[var(--color-border)]"
            >
              <div className="relative aspect-[16/10] border-b border-[var(--color-border)]">
                <Image
                  src={point.image}
                  alt={point.imageAlt}
                  fill
                  sizes="(min-width: 1280px) 25vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,5,9,0)_35%,rgba(2,5,9,0.42)_100%)]" />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-xl font-black leading-snug text-[var(--color-ink)]">
                  {point.title}
                </h3>
                <p className="mt-4 text-sm font-medium leading-7 text-[var(--color-muted)]">
                  {point.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
