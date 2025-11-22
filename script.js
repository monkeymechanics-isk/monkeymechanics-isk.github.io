document.addEventListener("DOMContentLoaded", () => {
  // ----------------------------
  // ORDER FORM POPUP
  // ----------------------------
  const formPopup = document.getElementById("formPopup");

  window.openForm = function() {
    formPopup.style.display = "block";
  };

  window.closeForm = function() {
    formPopup.style.display = "none";
  };

  // ----------------------------
  // LEGAL POPUP
  // ----------------------------
  const legalBtn = document.getElementById("legalBtn");
  const legalPopup = document.getElementById("legalPopup");
  const closeLegal = document.getElementById("closeLegal");

  legalBtn.addEventListener("click", () => {
    legalPopup.style.display = "block";
  });

  closeLegal.addEventListener("click", () => {
    legalPopup.style.display = "none";
  });

  // ----------------------------
  // OPTIONAL: Click outside popup to close (nice UX)
  // ----------------------------
  window.addEventListener("click", (e) => {
    if (e.target === formPopup) formPopup.style.display = "none";
    if (e.target === legalPopup) legalPopup.style.display = "none";
  });
});
