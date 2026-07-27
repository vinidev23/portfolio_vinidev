import TypedName from "./TypedName";
import SignalWave from "./SignalWave";
import { stats } from "@/data/projects";
import { ArrowDownRight, GitBranch } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center pt-28 pb-16 px-6 bg-dot-grid"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-bg/40 to-bg pointer-events-none" />

      <div className="relative max-w-6xl mx-auto w-full">
        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-6">
          <div className="card-panel shadow-panel p-8 md:p-10 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 font-mono text-xs text-muted mb-6">
                <span className="h-1.5 w-1.5 rounded-full bg-ok" />
                status: disponível para novos projetos
              </div>

              <p className="font-mono text-sm text-accent2 mb-3">$ whoami</p>
              <h1 className="font-display font-semibold text-4xl md:text-6xl leading-[1.05] text-gradient">
                <TypedName />
              </h1>
              <p className="mt-4 text-lg md:text-xl text-muted max-w-xl">
                Full Stack Developer construindo produtos com{" "}
                <span className="text-ink">Python</span>,{" "}
                <span className="text-ink">React</span> e{" "}
                <span className="text-ink">Next.js</span> — do banco de dados
                à interface.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#projetos"
                className="group inline-flex items-center gap-2 bg-accent text-white font-medium px-5 py-3 rounded-lg hover:bg-accent/90 transition-colors"
              >
                Ver projetos
                <ArrowDownRight
                  size={16}
                  className="group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-transform"
                />
              </a>
              <a
                href="https://github.com/vinidev23"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 border border-border px-5 py-3 rounded-lg text-muted hover:text-ink hover:border-accent/50 transition-colors font-mono text-sm"
              >
                <GitBranch size={15} />
                github/vinidev23
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div className="card-panel shadow-panel p-6 h-40 flex flex-col">
              <p className="font-mono text-[11px] text-muted mb-2">
                atividade / build signal
              </p>
              <div className="flex-1 -mx-2 -mb-2">
                <SignalWave />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {stats.map((s) => (
                <div key={s.label} className="card-panel p-5">
                  <p className="font-display font-tabular text-3xl text-ink">
                    {s.value}
                  </p>
                  <p className="text-xs text-muted mt-1 leading-snug">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
