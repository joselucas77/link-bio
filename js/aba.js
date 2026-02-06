// Só execute o código quando todo o HTML estiver carregado.
document.addEventListener("DOMContentLoaded", function () {
  // Seleciona todos os botões de aba e seções de conteúdo.
  const buttons = document.querySelectorAll(".tab-link");
  const sections = document.querySelectorAll(".content-section");

  // Adiciona um ouvinte de evento de clique a cada botão.
  buttons.forEach((button) => {
    // Quando o botão for clicado, ativa a seção correspondente.
    button.addEventListener("click", function () {
      // Obtém o ID da seção associada ao botão clicado.
      const sectionId = button.getAttribute("data-tab");

      // Remove a classe "active" de todos os botões e seções.
      buttons.forEach((b) => b.classList.remove("active"));
      sections.forEach((s) => s.classList.remove("active"));

      // Adiciona a classe "active" ao botão clicado e à seção correspondente.
      button.classList.add("active");
      document.getElementById(sectionId).classList.add("active");
    });
  });
});
