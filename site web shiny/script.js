function initSlideshow(slideClass, interval = 2000) {
  let index = 0;

  function showSlides() {
    const slides = document.querySelectorAll(`.${slideClass}`);
    slides.forEach(slide => slide.style.display = "none");

    index++;
    if (index > slides.length) index = 1;

    if (slides.length > 0) {
      slides[index - 1].style.display = "block";
    }

    setTimeout(showSlides, interval);
  }

  // Lancer ce slideshow indépendamment
  showSlides();
}

// Initialisation de chaque slideshow
initSlideshow("slide-about");
initSlideshow("slide-vision");
initSlideshow("slide-valeurs");
initSlideshow("slide-activites");
initSlideshow("slide-membres");

// Formulaire de contact
document.getElementById("contact-form")?.addEventListener("submit", function (e) {
  e.preventDefault();
  const status = document.getElementById("form-status");
  status.textContent = "Merci pour votre message ! Nous vous répondrons bientôt.";
  status.classList.remove("hidden");
  this.reset();
  setTimeout(() => {
    status.classList.add("hidden");
  }, 5000);
});

