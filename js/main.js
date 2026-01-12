// Basic interactivity for navigation (optional future enhancements)
document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll("nav a");
  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      // Could add active link highlight
      navLinks.forEach(l => l.classList.remove("active"));
      link.classList.add("active");
    });
  });
});
