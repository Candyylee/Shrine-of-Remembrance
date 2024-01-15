function toHighlights(event) {
  event.preventDefault();
  document
    .getElementById("section-highlights")
    .scrollIntoView({ behavior: "smooth" });
}
let handleHighlights = document.querySelector("#highlights");
handleHighlights.addEventListener("click", toHighlights);

function toTours(event) {
  event.preventDefault();
  document
    .getElementById("section-guidedTour")
    .scrollIntoView({ behavior: "smooth" });
}
let handleGuidedTours = document.querySelector("#guidedTours");
handleGuidedTours.addEventListener("click", toTours);
