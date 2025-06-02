const tabs = document.querySelector(".tabs");

tabs.addEventListener("click", e => {
  if(e.target.tagName === "BUTTON") {
    const button = e.target;
    switchToTab(button);
    broadcastTabName(button);
  }
});

document.addEventListener("keydown", (e) => {
  const buttons = document.querySelectorAll("button.tab")
  if (e.key === "1") {
    switchToTab(buttons[0]);
    broadcastTabName(buttons[0]);
  };
  if (e.key === "2")  {
    switchToTab(buttons[1]);
    broadcastTabName(buttons[1]);
  };
  if (e.key === "3") {
    switchToTab(buttons[2]);
    broadcastTabName(buttons[2]);
  }
});

function broadcastTabName(button) {
  const event = new CustomEvent("loggedTabName", {
    detail: {
      tab_name: button.innerText
    }
  });
  document.dispatchEvent(event);
}

document.addEventListener("loggedTabName", e => {
  console.log(`Current tab is: ${e.detail.tab_name}`);
});

function switchToTab(button) {
  removeActiveClassFromButton();
  button.classList.add("active");

  const tabId = button.dataset.tab;

  const contents = document.querySelectorAll(".content");

  contents.forEach(content => {
    if(content.dataset.tab === tabId) {
      content.classList.add("active");
    } else {
      content.classList.remove("active");
    }
  })
}

function removeActiveClassFromButton() {
  const buttons = document.querySelectorAll("button.active");
  buttons.forEach(btn => btn.classList.remove("active"));
}