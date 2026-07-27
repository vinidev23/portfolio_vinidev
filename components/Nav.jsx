"use client";

import { useEffect, useState } from "react";

const LINKS = [
  { href: "#inicio", label: "Início" },
  { href: "#sobre", label: "Sobre" },
  { href: "#projetos", label: "Projetos" },
  { href: "#contato", label: "Contato" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-bg/85 backdrop-blur-md border-b border-border" : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#inicio" className="flex items-center gap-2 font-display font-semibold tracking-tight">
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full rounded-full bg-ok opacity-75 animate-blink" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-ok" />
          </span>
          <span className="text-ink">vinicius</span>
          <span className="text-muted">.dev</span>
        </a>

        <ul className="hidden md:flex items-center gap-8 font-mono text-[13px] text-muted">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="hover:text-ink transition-colors">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contato"
          className="text-[13px] font-mono px-4 py-2 rounded-md border border-border bg-surface hover:border-accent/60 hover:text-accent2 transition-colors"
        >
          Novos projetos
        </a>
      </nav>
    </header>
  );
}
