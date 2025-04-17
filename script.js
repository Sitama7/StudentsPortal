// script.js

document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".course-card, .feature-card");
  
    cards.forEach(card => {
      card.addEventListener("mouseenter", () => {
        card.style.transform = "scale(1.02)";
        card.style.transition = "transform 0.3s ease";
      });
  
      card.addEventListener("mouseleave", () => {
        card.style.transform = "scale(1)";
      });
    });
  
    const navLinks = document.querySelectorAll(".nav-links a");
    navLinks.forEach(link => {
      if (link.href === window.location.href) {
        link.classList.add("active");
      }
    });
  
    console.log("🔥 Portal loaded and interactive!");
  });