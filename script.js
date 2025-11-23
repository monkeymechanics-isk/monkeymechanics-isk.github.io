document.addEventListener("DOMContentLoaded", () => {
  // ----------------------------
  // ORDER FORM POPUP
  // ----------------------------
  const formPopup = document.getElementById("formPopup");

  window.openForm = () => {
    formPopup.style.display = "block";
  };

  window.closeForm = () => {
    formPopup.style.display = "none";
  };

  // ----------------------------
  // LEGAL POPUP
  // ----------------------------
  const legalBtn = document.getElementById("legalBtn");
  const legalPopup = document.getElementById("legalPopup");

  legalBtn.addEventListener("click", () => {
    legalPopup.style.display = "flex"; // flex to center popup
  });

  window.closeLegal = () => {
    legalPopup.style.display = "none";
  };

  // ----------------------------
  // Click outside popup to close (UX)
  // ----------------------------
  window.addEventListener("click", (e) => {
    if (e.target === formPopup) formPopup.style.display = "none";
    if (e.target === legalPopup) legalPopup.style.display = "none";
  });
});
