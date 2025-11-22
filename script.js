function openForm() {
  document.getElementById("formPopup").style.display = "block";
}

function closeForm() {
  document.getElementById("formPopup").style.display = "none";
}

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("orderForm");
  const popup = document.getElementById("formPopup");
  const fallbackMessage = document.getElementById("fallbackMessage");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const formData = new FormData(form);

    // Add your Web3Forms key
    formData.append("access_key", "25475670-0efd-4b28-8fea-bb6e0c880aa7");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const result = await response.json();

    if (result.success) {
      alert("Order sent successfully!");
      popup.style.display = "none";
      form.reset();
    } else {
      // If Web3Forms is full or has an error:
      popup.style.display = "none";
      fallbackMessage.style.display = "block";
    }
  });
});

// LEGAL POPUP
const legalBtn = document.getElementById("legalBtn");
const legalPopup = document.getElementById("legalPopup");
const closeLegal = document.getElementById("closeLegal");

legalBtn.addEventListener("click", () => {
  legalPopup.style.display = "block";
});

closeLegal.addEventListener("click", () => {
  legalPopup.style.display = "none";
});
