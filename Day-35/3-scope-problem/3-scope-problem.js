const user = {
  name: "Nasir",
  clicks: 0,
  // handleClicks: () => {
  handleClicks: function (){
    document.getElementById("countBtn").addEventListener("click", () => {
      this.clicks ++;
      console.log(`User ${this.name} clicks ${this.clicks}.`);
    })
  }
}

user.handleClicks();