import SkillsChart from "./SkillsChart";
import TechBadge from "./TechBadge";
import { skills } from "@/data/projects";

export default function About() {
  return (
    <section id="sobre" className="px-6 py-24 md:py-32">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
          <div>
            <p className="font-mono text-xs text-accent2 mb-2">// sobre</p>
            <h2 className="font-display font-semibold text-3xl md:text-4xl text-ink">
              Do papel ao código
            </h2>
          </div>
        </div>

        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-6">
          <div className="card-panel p-8 md:p-10">
            <p className="text-muted leading-relaxed">
              Atualmente, atuo com engenharia clínica, cuidando da gestão do parque de
              equipamentos médicos de um hospital — um trabalho que exige
              precisão, análise de dados e resolução prática de problemas.
              Levei essa mesma lógica para o desenvolvimento de software:
              hoje construo aplicações full stack que vão do banco de dados
              à interface, sempre com foco em resolver problemas reais de
              negócio.
            </p>
            <p className="text-muted leading-relaxed mt-4">
              Cada projeto abaixo nasceu de uma necessidade concreta — de um
              chatbot que acompanha cotações em tempo real a um sistema de
              gestão de parque tecnológico de um hospital. Isso me deu uma visão prática de
              back-end, front-end, bancos de dados e deploy em produção.
            </p>

            <div className="flex flex-wrap gap-2 mt-8">
              {skills.map((s) => (
                <TechBadge key={s.name} label={s.name} />
              ))}
            </div>
          </div>

          <div className="card-panel p-8 md:p-10">
            <p className="font-mono text-[11px] text-muted mb-4">
              proficiência / stack
            </p>
            <SkillsChart />
          </div>
        </div>
      </div>
    </section>
  );
}
