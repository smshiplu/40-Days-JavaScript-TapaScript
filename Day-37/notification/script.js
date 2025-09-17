const sendNotification = document.getElementById("sendNotification");
const notificationStatus = document.getElementById("notificationStatus");

sendNotification.addEventListener("click", async () => {
  const promise = await Notification.requestPermission();
  
  if(promise !== "granted") {
    notificationStatus.innerText = `Permissions are not granted!`;
    return;
  }
  if(!Notification in window) {
    notificationStatus.innerText = `Notification is not supported in this browser!`;
    return;
  }
  new Notification("Title of notification", {body: "This is the notification body"})
  
})