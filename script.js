// MOBILE MENU
const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector("nav ul");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

// POPUP FORM
const popup = document.getElementById("popupForm");
const openBtn = document.getElementById("openFormBtn");
const closeBtn = document.getElementById("closeBtn");

if (openBtn) {
  openBtn.addEventListener("click", () => popup.style.display = "block");
}

if (closeBtn) {
  closeBtn.addEventListener("click", () => popup.style.display = "none");
}
