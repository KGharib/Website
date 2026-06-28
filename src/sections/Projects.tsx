import { ProjectCard } from "@/components/ProjectCard";
import { Section } from "@/components/Section";
import { projects } from "@/data/projects";

export function Projects() {
  return (
    <Section
      id="projects"
      tone="light"
      eyebrow="Proof of work"
      title="Project examples that show the analytics thinking behind the service."
      intro="These are positioned honestly as personal projects, not client case studies. They give prospects evidence of the methods, communication style, and technical range behind the offer."
    >
      <div className="grid gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </Section>
  );
}
