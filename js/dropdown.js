document.addEventListener("DOMContentLoaded", () => {
  const portfolioToggle = document.getElementById("portfolio-toggle");
  const portfolioLinks = document.getElementById("portfolio-links");

  portfolioToggle.addEventListener("click", (event) => {
    event.preventDefault();

    if (portfolioLinks.classList.contains("show")) {
      // Se já está aberto, remove o maxHeight para a transição de recolhimento funcionar
      portfolioLinks.style.maxHeight = null;
      portfolioLinks.classList.remove("show");
    } else {
      // Se está fechado, adiciona a classe e define o maxHeight para a altura do conteúdo
      portfolioLinks.classList.add("show");
      portfolioLinks.style.maxHeight = portfolioLinks.scrollHeight + "px";
    }
  });
});
