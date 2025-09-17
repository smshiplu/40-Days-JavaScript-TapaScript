const message = document.getElementById("message");
const draftStatus = document.getElementById("draftStatus");

const savedDraft = sessionStorage.getItem("draft");

if(savedDraft) {
  message.value = savedDraft;
  draftStatus.innerText = `Message loaded from draft!`;
}

message.addEventListener("input", () => {

  sessionStorage.setItem("draft", message.value);
  draftStatus.innerText = `Message saved as draft!`;
})