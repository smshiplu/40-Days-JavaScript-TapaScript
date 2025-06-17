
document.getElementById("downloadBtn").addEventListener("click", downloadFile);

const controller = new AbortController();
const signal = controller.signal;
document.getElementById("abortBtn").addEventListener("click", () => {
  if(controller) {
    controller.abort("User Aborted the Download Action!");
    console.warn("Download Aborted!");
  }
});

async function downloadFile() {
  try {
    console.log("Downloading...");
    
    setTimeout(async () => {
      const response = await fetch("./file.txt", {signal});
      const blob = await response.blob();
      const objectUrl = URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = objectUrl;
      link.download = "file.txt";
      link.click();
      URL.revokeObjectURL(objectUrl);
    }, 2000)

  } catch (error) {
    console.error("Download Error:", error.message);
    
  }
}