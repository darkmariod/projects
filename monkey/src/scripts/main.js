document.addEventListener("DOMContentLoaded", () => {
    const ctaButton = document.querySelector(".cta-button");
    if (ctaButton) {
      ctaButton.addEventListener("click", () => {
        alert("¡Solicitando presentación!");
      });
    }
  });
  