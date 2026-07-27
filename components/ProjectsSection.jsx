import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";

export default function ProjectsSection() {
  return (
    <section id="projetos" className="px-6 py-24 md:py-32 bg-surface/30">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
          <div>
            <p className="font-mono text-xs text-accent2 mb-2">// projetos</p>
            <h2 className="font-display font-semibold text-3xl md:text-4xl text-ink">
              O que já foi construído
            </h2>
          </div>
          <p className="font-mono text-xs text-muted max-w-xs text-right hidden md:block">
            cada card abre o detalhamento técnico e o protótipo do projeto
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
