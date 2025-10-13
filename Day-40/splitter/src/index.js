import "./index.css";
import "toastify-js/src/toastify.css";

import { ExpenseService } from "./services/expenseService";
import { UserService } from "./services/userService";
import { ExpenseUI } from "./ui/expenseUI";

class ExpenseApp {
  constructor() {
    this.userService = new UserService();
    this.expenseService = new ExpenseService(this.userService);
    this.ui = null;
  }

  init() {
    try {
      this.ui =  new ExpenseUI(this.userService, this.expenseService);
      console.log("Splitter App Initialized Successfully");
    } catch (error) {
      console.error("Splitter App Initialization Error", error);
    }
  }
}

let expenseApp;
document.addEventListener("DOMContentLoaded", () => {
  expenseApp = new ExpenseApp();
  expenseApp.init();
});

window.addEventListener("load", () => {
  if(!expenseApp) {
    expenseApp = new ExpenseApp();
    expenseApp.init();
  }
})