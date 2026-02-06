// Função para aplicar o efeito wave no texto
function waveEffect(element, text) {
  // Limpa o conteúdo atual do elemento
  element.innerHTML = "";

  // Cria um span para cada letra do texto
  for (let i = 0; i < text.length; i++) {
    let span = document.createElement("span");
    span.classList.add("wave");

    if (text[i] === " ") {
      span.innerHTML = "&nbsp;";
    } else {
      span.innerText = text[i];
    }

    element.appendChild(span);
  }

  let letters = element.querySelectorAll(".wave");
  let index = 0;

  // Intervalo para ativar o efeito wave em cada letra
  let interval = setInterval(function () {
    // Remove active de todas
    for (let j = 0; j < letters.length; j++) {
      letters[j].classList.remove("active");
    }

    // Ativa a letra atual
    letters[index].classList.add("active");

    index++;

    // Para o intervalo quando todas as letras foram animadas
    if (index >= letters.length + 1) {
      clearInterval(interval);
    }
  }, 100);
}

// Executa o código quando o HTML estiver totalmente carregado
document.addEventListener("DOMContentLoaded", function () {
  let element = document.getElementById("bio");
  let text = "Desenvolvedor Full Stack";

  let abaSobre = document.querySelector('.tab-link[data-tab="sobre"]');

  if (abaSobre) {
    abaSobre.addEventListener("click", function () {
      waveEffect(element, text);
    });
  }
});
