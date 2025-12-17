// ===============================
// ANIMAÇÕES SEGURAS (FAIL-SAFE)
// ===============================

// Se o navegador não suportar IntersectionObserver,
// o site continua totalmente visível
if ("IntersectionObserver" in window) {
  const elements = document.querySelectorAll(".reveal");

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
          obs.unobserve(entry.target); // performance
        }
      });
    },
    {
      threshold: 0.15
    }
  );

  elements.forEach(el => observer.observe(el));
}

// Nenhum JS aqui pode bloquear renderização
// Nenhum erro causa página branca
// ===============================


// FIM DO ARQUIVO