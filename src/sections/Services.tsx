import { ServiceCard } from "@/components/ServiceCard";
import { Section } from "@/components/Section";
import { services } from "@/data/services";

export function Services() {
  return (
    <Section
      id="services"
      tone="light"
      eyebrow="Services"
      title="Focused analytics services for small businesses and startup teams."
      intro="Each service is designed to solve a clear business reporting problem and leave your team with something usable."
    >
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {services.map((service) => (
          <ServiceCard key={service.title} {...service} />
        ))}
      </div>
    </Section>
  );
}
