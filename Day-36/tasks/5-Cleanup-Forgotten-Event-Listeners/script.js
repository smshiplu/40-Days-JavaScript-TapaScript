
const modalOverlay = document.getElementById("modalOverlay");

function handleKeydown(e) {
  if(e.key === "Escape") {
    closeModal();
  }
}

function handleOverlayClick(e) {
   if (e.target.classList.contains("modal-overlay")) {
    closeModal();
  }
}

function openModal() {
  modalOverlay.classList.remove("hidden");
  document.addEventListener("keydown", handleKeydown);
  modalOverlay.addEventListener("click", handleOverlayClick);
}

function closeModal() {
  modalOverlay.classList.add("hidden");
  modalOverlay.removeEventListener("click", handleOverlayClick);
  document.removeEventListener('keydown', handleKeydown);
  console.log(`Modal overlay "click" and Escape "keydown" events are removed!`);
}
