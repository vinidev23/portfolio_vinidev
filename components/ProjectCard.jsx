import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import TechBadge from "./TechBadge";
import StackMixBar from "./StackMixBar";
import ProjectLogo from "./ProjectLogo";

export default function ProjectCard({ project }) {
  return (
    <Link
      href={`/projetos/${project.slug}`}
      className="group card-panel p-6 flex flex-col justify-between hover:border-accent/50 hover:-translate-y-1 transition-all duration-300"
    >
      <div>
        <div className="flex items-center justify-between mb-4">
          <span className="font-mono text-[11px] text-muted">
            {project.year}
          </span>
          <span
            className={`font-mono text-[10px] px-2 py-0.5 rounded-full border ${
              project.status === "Em produção"
                ? "text-ok border-ok/40 bg-ok/10"
                : "text-muted border-border bg-surface2"
            }`}
          >
            {project.status}
          </span>
        </div>

        <div className="flex items-center gap-3 mb-1">
          {project.logo && (
            <ProjectLogo src={project.logo} alt={project.name} size={36} />
          )}
          <h3 className="font-display font-semibold text-xl text-ink flex items-center gap-1.5">
            {project.name}
            <ArrowUpRight
              size={16}
              className="text-muted group-hover:text-accent2 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
            />
          </h3>
        </div>
        <p className="text-sm text-muted mt-2 leading-relaxed">
          {project.tagline}
        </p>

        <div className="flex flex-wrap gap-1.5 mt-4">
          {project.stack.slice(0, 4).map((t) => (
            <TechBadge key={t} label={t} />
          ))}
        </div>
      </div>

      <div className="mt-6">
        <StackMixBar mix={project.stackMix} />
      </div>
    </Link>
  );
}
