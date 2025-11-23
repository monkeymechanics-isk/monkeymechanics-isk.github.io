document.addEventListener("DOMContentLoaded", () => {
  const formPopup = document.getElementById("formPopup");
  const warningPopup = document.getElementById("warningPopup");

  // OPEN FORM FUNCTION WITH WARNING
  window.openForm = () => {
    if (!warningPopup || !formPopup) return;

    // Show warning (red)
    warningPopup.style.display = "block";
    warningPopup.style.background = "#D61C4E"; // red

    // Disable form opening for 10 seconds
    setTimeout(() => {
      // Change warning to green
      warningPopup.style.background = "#28a745"; // green
      warningPopup.textContent = "✅ You can now proceed!";

      // Open the form
      formPopup.style.display = "block";

      // Hide warning after 3 seconds
      setTimeout(() => {
        warningPopup.style.display = "none";
        warningPopup.textContent = "⚠️ If you are spamming or abusing this form, be aware that it may result in immediate blocking, reporting, and further action taken against you by Monkey Mechanics and relevant services. See Legal for more information.";
      }, 3000);

    }, 10000); // 10 seconds
  };

  window.closeForm = () => formPopup && (formPopup.style.display = "none");

  // LEGAL POPUP
  const legalPopup = document.getElementById("legalPopup");
  const legalClose = legalPopup ? legalPopup.querySelector(".legal-close") : null;
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

  // Click outside to close
  window.addEventListener("click", e => {
    if (e.target === formPopup) formPopup.style.display = "none";
    if (e.target === legalPopup) legalPopup.style.display = "none";
  });
});
