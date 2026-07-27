import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Check } from "lucide-react";
import { projects } from "@/data/projects";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import TechBadge from "@/components/TechBadge";
import MonitorFrame from "@/components/MonitorFrame";
import ProjectStackMix from "@/components/ProjectStackMix";
import ProjectLogo from "@/components/ProjectLogo";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) return {};
  return {
    title: `${project.name} — Vinícius Martin`,
    description: project.tagline,
  };
}

export default function ProjectPage({ params }) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) notFound();

  return (
    <main>
      <Nav />

      <article className="px-6 pt-28 pb-24">
        <div className="max-w-5xl mx-auto">
          <Link
            href="/#projetos"
            className="inline-flex items-center gap-2 font-mono text-xs text-muted hover:text-ink transition-colors mb-8"
          >
            <ArrowLeft size={14} />
            voltar aos projetos
          </Link>

          <div className="flex items-center gap-3 flex-wrap mb-4">
            <span className="font-mono text-xs text-muted">{project.year}</span>
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

          <div className="flex items-center gap-4 mb-3">
            {project.logo && (
              <ProjectLogo src={project.logo} alt={project.name} size={56} />
            )}
            <h1 className="font-display font-semibold text-4xl md:text-5xl text-ink">
              {project.name}
            </h1>
          </div>
          <p className="text-lg text-muted max-w-2xl mb-8">{project.tagline}</p>

          <div className="flex flex-wrap gap-2 mb-12">
            {project.stack.map((t) => (
              <TechBadge key={t} label={t} variant="accent" />
            ))}
          </div>

          <div className="grid lg:grid-cols-[1.3fr_0.7fr] gap-6 mb-12">
            <MonitorFrame media={project.media} projectName={project.name} />

            <div className="card-panel p-6 flex flex-col">
              <p className="font-mono text-[11px] text-muted mb-4">
                composição da stack
              </p>
              <ProjectStackMix data={project.stackMix} />
            </div>
          </div>

          <div className="grid md:grid-cols-[1.3fr_0.7fr] gap-6">
            <div className="card-panel p-8">
              <h2 className="font-display font-semibold text-lg text-ink mb-3">
                Sobre o projeto
              </h2>
              <p className="text-muted leading-relaxed">{project.description}</p>
            </div>

            <div className="card-panel p-8">
              <h2 className="font-display font-semibold text-lg text-ink mb-4">
                Destaques técnicos
              </h2>
              <ul className="space-y-3">
                {project.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-2 text-sm text-muted">
                    <Check size={15} className="text-ok mt-0.5 shrink-0" />
                    {h}
                  </li>
                ))}
              </ul>

              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex items-center gap-2 font-mono text-xs text-accent2 hover:text-accent transition-colors"
                >
                  <ExternalLink size={14} />
                  abrir site em produção
                </a>
              )}
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </main>
  );
}
