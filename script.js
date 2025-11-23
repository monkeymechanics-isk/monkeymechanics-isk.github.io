document.addEventListener("DOMContentLoaded", () => {
  // ORDER FORM
  const formPopup = document.getElementById("formPopup");
  window.openForm = () => formPopup && (formPopup.style.display = "block");
  window.closeForm = () => formPopup && (formPopup.style.display = "none");

  // LEGAL POPUP
  const legalPopup = document.getElementById("legalPopup");
  const legalClose = legalPopup ? legalPopup.querySelector(".legal-close") : null;

  // Find all legal buttons on page
  const legalBtns = document.querySelectorAll("#legalBtn");

  legalBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      if (legalPopup) legalPopup.style.display = "flex";
    });
  });

  if (legalClose) {
    legalClose.addEventListener("click", () => {
      legalPopup.style.display = "none";
    });
  }

  // Click outside to close (optional UX)
  window.addEventListener("click", e => {
    if (e.target === formPopup) formPopup.style.display = "none";
    if (e.target === legalPopup) legalPopup.style.display = "none";
  });
});
