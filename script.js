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
  const legalBtns = document.querySelectorAll("#legalBtn"); // works for multiple pages
  const legalPopup = document.getElementById("legalPopup");
  const legalClose = legalPopup.querySelector(".legal-close");

  // Open popup when any legal button is clicked
  legalBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      legalPopup.style.display = "flex"; // flex centers the popup
    });
  });

  // Close popup with X
  legalClose.addEventListener("click", () => {
    legalPopup.style.display = "none";
  });

  // ----------------------------
  // Click outside popup to close (optional UX)
  // ----------------------------
  window.addEventListener("click", (e) => {
    if (e.target === formPopup) formPopup.style.display = "none";
    if (e.target === legalPopup) legalPopup.style.display = "none";
  });
});
