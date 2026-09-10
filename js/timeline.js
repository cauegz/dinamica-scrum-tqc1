document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll(".timeline-item");
  const progressBar = document.getElementById("timelineProgress");

  // Atualiza barra de progresso no hover (Desktop)
  items.forEach((item, index) => {
    item.addEventListener("mouseenter", () => {
      // Remove classe ativa dos outros
      items.forEach((i) => i.classList.remove("active"));
      item.classList.add("active");

      // Calcula porcentagem do progresso
      if (progressBar && window.innerWidth > 768) {
        const percentage = (index / (items.length - 1)) * 100;
        progressBar.style.width = `${percentage}%`;
      }
    });
  });

  // Animação de entrada suave com IntersectionObserver
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";
        }
      });
    },
    { threshold: 0.2 }
  );

  items.forEach((item) => {
    item.style.opacity = "0";
    item.style.transform = "translateY(20px)";
    item.style.transition = "all 0.5s cubic-bezier(0.25, 1, 0.5, 1)";
    observer.observe(item);
  });
});