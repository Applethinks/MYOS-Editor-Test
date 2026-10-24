"use strict";

document.addEventListener("DOMContentLoaded", () => {
  // Update the copyright year
  const year = document.getElementById("year");

  if (year) {
    year.textContent = new Date().getFullYear();
  }

  // Default website content
  const defaultContent = {
    title: "My Website",
    heading: "Welcome to My Website",
    description:
      "This website will let its owner update content without editing code.",
    image:
      "https://placehold.co/800x450?text=Your+Image"
  };

  // Display the default content
  const title = document.getElementById("site-title");
  const heading = document.getElementById("site-heading");
  const description = document.getElementById("site-description");
  const image = document.getElementById("site-image");

  if (title) title.textContent = defaultContent.title;
  if (heading) heading.textContent = defaultContent.heading;
  if (description) {
    description.textContent = defaultContent.description;
  }
  if (image) image.src = defaultContent.image;
});