/**
 * AudioHeavy — Main JavaScript
 *
 * This file handles the staggered fade-in animation.
 * Each element with class "fade-in" appears one after another
 * when the page finishes loading.
 *
 * How it works:
 * 1. In the HTML, elements have class="fade-in" (initially invisible via CSS)
 * 2. On page load, this script finds all those elements
 * 3. It adds class "visible" to each one, with a staggered delay
 * 4. CSS transitions handle the actual animation (opacity + transform)
 */

document.addEventListener("DOMContentLoaded", function () {
  // querySelectorAll returns a NodeList of ALL elements matching the selector
  const fadeElements = document.querySelectorAll(".fade-in");

  // Loop through each element, adding "visible" class with increasing delay
  fadeElements.forEach(function (element, index) {
    // setTimeout schedules code to run after a delay (in milliseconds)
    // index * 150 means: first element = 0ms, second = 150ms, third = 300ms, etc.
    setTimeout(function () {
      element.classList.add("visible");
    }, index * 150);
  });
});

/**
 * Log the current year for the footer copyright.
 * This keeps the year always current without manual updates.
 */
(function () {
  var yearElement = document.getElementById("current-year");
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
})();
