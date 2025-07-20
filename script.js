// script.js

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();

      if (name === "" || email === "" || message === "") {
        alert("Mohon lengkapi semua kolom!");
        return;
      }

      if (!email.includes("@") || !email.includes(".")) {
        alert("Format email tidak valid!");
        return;
      }

      alert("Terima kasih telah menghubungi kami, " + name + "!");
      form.reset();
    });
  }

  // Animasi saat hover pada kartu edukasi
  const cards = document.querySelectorAll(".card");
  cards.forEach((card) => {
    card.addEventListener("mouseover", () => {
      card.style.transform = "scale(1.03)";
    });
    card.addEventListener("mouseout", () => {
      card.style.transform = "scale(1)";
    });
  });
});
