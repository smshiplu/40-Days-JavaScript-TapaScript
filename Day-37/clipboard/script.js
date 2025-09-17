const textToCopy = document.getElementById("textToCopy");
const copyBtn = document.getElementById("copyBtn");
const statusMsg = document.getElementById("statusMsg");


copyBtn.addEventListener("click", async () => {
  try {
    const text = textToCopy.value;
    if(!navigator.clipboard) {
      console.warn("Your browser do not support the clipboard APIs.");
      return;
    }
    await navigator.clipboard.writeText(text);
    statusMsg.innerText = "Text copied to clipboard!";
    statusMsg.style.color = "green";

  } catch (error) {
    statusMsg.innerText = "Failed to copy";
    statusMsg.style.color = "red";
    console.error("Copy failed", error);
  }
})