const photoViewer = document.querySelector(".photo-viewer");
const enlargedPhoto = document.createElement("img");
photoViewer.prepend(enlargedPhoto);

for (const photo of document.querySelectorAll("main img:not(.hero-brand img)")) {
  photo.classList.add("photo-zoom");
  photo.tabIndex = 0;
  photo.setAttribute("role", "button");
  photo.setAttribute("aria-haspopup", "dialog");
  photo.setAttribute("aria-label", `Увеличить фото: ${photo.alt}`);

  photo.addEventListener("click", () => {
    enlargedPhoto.src = photo.currentSrc || photo.src;
    enlargedPhoto.alt = photo.alt;
    photo.focus({ preventScroll: true });
    photoViewer.showModal();
  });

  photo.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      photo.click();
    }
  });
}

photoViewer.querySelector(".photo-viewer-close").addEventListener("click", () => {
  photoViewer.close();
});

photoViewer.addEventListener("click", (event) => {
  if (event.target === photoViewer) {
    photoViewer.close();
  }
});
