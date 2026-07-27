"use client";

import { useState } from "react";
import { Send } from "lucide-react";

const PHONE = "5518981039015";

export default function ContactForm() {
  const [nome, setNome] = useState("");
  const [mensagem, setMensagem] = useState("");

  function enviarWhats(e) {
    e.preventDefault();
    const texto = `Olá! Meu nome é ${nome}, ${mensagem}`;
    const msgFormatada = encodeURIComponent(texto);
    const link = `https://wa.me/${PHONE}/?text=${msgFormatada}`;
    window.open(link, "_blank");
  }

  return (
    <form onSubmit={enviarWhats} className="card-panel p-8 md:p-10 space-y-5">
      <div>
        <label htmlFor="nome" className="font-mono text-xs text-muted block mb-2">
          nome
        </label>
        <input
          id="nome"
          required
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          placeholder="Como posso te chamar?"
          className="w-full bg-surface2 border border-border rounded-lg px-4 py-3 text-ink placeholder:text-faint outline-none focus:border-accent/60 transition-colors"
        />
      </div>

      <div>
        <label htmlFor="mensagem" className="font-mono text-xs text-muted block mb-2">
          mensagem
        </label>
        <textarea
          id="mensagem"
          required
          rows={4}
          value={mensagem}
          onChange={(e) => setMensagem(e.target.value)}
          placeholder="Conta um pouco sobre o projeto ou oportunidade..."
          className="w-full bg-surface2 border border-border rounded-lg px-4 py-3 text-ink placeholder:text-faint outline-none focus:border-accent/60 transition-colors resize-none"
        />
      </div>

      <button
        type="submit"
        className="w-full inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent/90 text-white font-medium py-3 rounded-lg transition-colors"
      >
        <Send size={16} />
        Enviar pelo WhatsApp
      </button>
    </form>
  );
}
