// SCRIPT.JS — handles mobile menu + popup form

// ===== MOBILE NAVIGATION =====
const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

if (menuBtn) {
  menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("open");
  });
}

// ===== CLOSE MENU WHEN LINK CLICKED (MOBILE) =====
document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
  });
});


// ===== FORM POPUP (Only exists on index.html, so safe to check) =====
function openForm() {
  const formPopup = document.getElementById("repairForm");
  if (formPopup) {
    formPopup.style.display = "block";
    formPopup.style.animation = "popIn 0.3s ease forwards";
  }
}

function closeForm() {
  const formPopup = document.getElementById("repairForm");
  if (formPopup) {
    formPopup.style.display = "none";
  }
}

window.openForm = openForm;
window.closeForm = closeForm;
