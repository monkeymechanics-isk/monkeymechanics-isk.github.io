document.addEventListener("DOMContentLoaded", () => {
  const formPopup = document.getElementById("formPopup");
  const warningPopup = document.getElementById("warningPopup");
  const warningText = warningPopup ? warningPopup.querySelector(".warning-text") : null;
  const warningBtn = warningPopup ? warningPopup.querySelector("button") : null;

  // ----------------------------
  // OPEN FORM FUNCTION WITH WARNING
  // ----------------------------
  window.openForm = () => {
    if (!warningPopup || !formPopup || !warningText || !warningBtn) return;

    // Reset popup style and text
    warningPopup.style.display = "block";
    warningPopup.style.background = "#D61C4E"; // red
    warningText.textContent = "⚠️ If you are spamming or abusing this form, be aware that it may result in immediate blocking, reporting, and further action taken against you by Monkey Mechanics and relevant services. See Legal for more information.";
    warningBtn.disabled = true;
    warningBtn.style.background = "#D61C4E";
    
    let countdown = 10;
    warningBtn.textContent = `Wait ${countdown}s...`;

    const interval = setInterval(() => {
      countdown--;
      if (countdown > 0) {
        warningBtn.textContent = `Wait ${countdown}s...`;
      } else {
        clearInterval(interval);
        warningBtn.textContent = "Dismiss";
        warningBtn.style.background = "#28a745"; // green
        warningBtn.disabled = false;
      }
    }, 1000);

    warningBtn.onclick = () => {
      warningPopup.style.display = "none";
      formPopup.style.display = "block"; // open form when dismissed
    };
  };

  // ----------------------------
  // CLOSE FORM
  // ----------------------------
  window.closeForm = () => formPopup && (formPopup.style.display = "none");

  // ----------------------------
  // LEGAL POPUP
  // ----------------------------
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

  // ----------------------------
  // Click outside to close
  // ----------------------------
  window.addEventListener("click", e => {
    if (e.target === formPopup) formPopup.style.display = "none";
    if (e.target === legalPopup) legalPopup.style.display = "none";
  });
});
