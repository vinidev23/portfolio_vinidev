function enviarWhats(event) {
  event.preventDefault();
  const nome = document.getElementById("nome").value;
  const mensagem = document.getElementById("mensagem").value;
  const telefone = "5518981039015";

  const texto = `Olá! Meu nome é ${nome}, ${mensagem}`;
  const msgFormatada = encodeURIComponent(texto);

  const link = `https://wa.me/${telefone}/?text=${msgFormatada}`;

  window.open(link, "_blank");
}

const elemento = document.getElementById("digitando-nome");
const nomes = ["Vinícius Martin"];
let indiceNome = 0;
let indiceLetra = 0;
let apagando = false;

function digitarNome() {
  const nomeAtual = nomes[indiceNome];

  if (!apagando) {
    elemento.textContent = nomeAtual.substring(0, indiceLetra + 1);
    indiceLetra++;

    if (indiceLetra === nomeAtual.length) {
      apagando = true;
      setTimeout(digitarNome, 1500);

      return;
    }
  } else {
    elemento.textContent = nomeAtual.substring(0, indiceLetra - 1);
    indiceLetra--;

    if (indiceLetra === 0) {
      apagando = false;
      indiceNome = (indiceNome + 1) % nomes.length;
    }
  }

  setTimeout(digitarNome, apagando ? 50 : 100);
}

digitarNome();
