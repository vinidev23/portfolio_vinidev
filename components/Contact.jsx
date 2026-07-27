import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <section id="contato" className="px-6 py-24 md:py-32">
      <div className="max-w-2xl mx-auto text-center">
        <p className="font-mono text-xs text-accent2 mb-2">// contato</p>
        <h2 className="font-display font-semibold text-3xl md:text-4xl text-ink mb-4">
          Bora conversar sobre o seu projeto?
        </h2>
        <p className="text-muted mb-10">
          Envie os detalhes e a mensagem cai direto no meu WhatsApp, formatada
          e pronta para resposta.
        </p>
        <ContactForm />
      </div>
    </section>
  );
}
