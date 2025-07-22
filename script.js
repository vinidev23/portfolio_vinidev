function enviarWhats(event) {
  event.preventDefault();
  const nome = document.getElementById("nome").value;
  const mensagem = document.getElementById("mensagem").value;
  const telefone = "5518981039015";

  const texto = `Olá! Meu nome é ${nome}, ${mensagem}`;
  const msgFormatada = encodedURIComponent(texto);

  const link = `https://wa.me/${telefone}/?text=${msgFormatada}`;

  window.open(link, "_blank");
}
