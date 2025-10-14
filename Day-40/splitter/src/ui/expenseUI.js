import { showErrorToast, showSuccessToast } from "../utils/toastUtil";
import { DOMHelpers } from "./DOMHelpers";

export class ExpenseUI {
  constructor(userService, expenseService) {
    this.userService = userService;
    this.expenseService = expenseService;

    this.themeStorageData = localStorage.getItem("splitterApp-theme") || null;

    this.initializeElements();
    this.bindEvents();
    this.initializeSelectBox();
    this.loadTheme();
  }

  // initialize all the UI elements
  initializeElements() {
    this.elements = {
      addUserForm: DOMHelpers.getElementById("addUserForm"),
      addUserInput: DOMHelpers.getElementById("addUserInput"),
      expensePaidByInput: DOMHelpers.getElementById("expensePaidByInput"),
      addExpenseForm: DOMHelpers.getElementById("addExpenseForm"),
      expenseAmountInput: DOMHelpers.getElementById("expenseAmountInput"),
      expenseDescriptionInput: DOMHelpers.getElementById("expenseDescriptionInput"),
      expenseList: DOMHelpers.getElementById("expenseList"),
      settleBtn: DOMHelpers.getElementById("settleBtn"),
      settledList: DOMHelpers.getElementById("settledList"),
      themeSwitcherBtn: DOMHelpers.getElementById("themeSwitcherBtn"),
      html: DOMHelpers.getElementById("html"),
      exportBtn: DOMHelpers.getElementById("exportBtn"),
      fileImportForm: DOMHelpers.getElementById("fileImportForm"),
      fileInput: DOMHelpers.getElementById("fileInput"),
    }
  }
    
  // bind events
  bindEvents() {
    this.elements.addUserForm.addEventListener("submit", (e) => {
      this.handleAddUser(e);
    });

    this.elements.addExpenseForm.addEventListener("submit", (e) => {
      this.handleAddExpense(e);
    });

    this.elements.settleBtn.addEventListener("click", () => {
      this.handleSeattle();
    });

    this.elements.themeSwitcherBtn.addEventListener("click", () => {
      this.handleSwitchTheme();
    });

    this.elements.exportBtn.addEventListener("click", () => {
      this.handleFileExport();
    });

    this.elements.fileImportForm.addEventListener("submit", (e) => {
      this.handleFileImport(e);
    })
  }

  handleAddUser(e) {
    e.preventDefault(); 

    try {
      // Get the user name provided by user
      const name = this.elements.addUserInput.value.trim();

      // Check if the username is given
      if(!name) {
        throw new Error("User name cannot be empty!");
      }

      // Use the user service to add user
      const user = this.userService.addUser(name);

      // Add user to the select box
      this.addUserToSelectBox(user.name);

      //reset the form
      this.elements.addUserForm.reset();
      showSuccessToast(`User ${user.name} added!`);

    } catch (error) {
      console.error("Error adding User: ", error);
      showErrorToast(error.message)
    }
  }

  // take care of the expense select box
  initializeSelectBox() {
    const defaultOption = DOMHelpers.createOption("Select User", "");
    this.elements.expensePaidByInput.add(defaultOption)
  }

  addUserToSelectBox(userName) {
    const option = DOMHelpers.createOption(userName, userName);
    this.elements.expensePaidByInput.add(option);
  }

  handleAddExpense(e) {
    e.preventDefault();

    try {
      const paidBy = this.elements.expensePaidByInput.value.trim();
      const amount = this.elements.expenseAmountInput.valueAsNumber;
      const description = this.elements.expenseDescriptionInput.value.trim();

      if(!paidBy) {
        throw new Error("Select an user who paid by!");
      }

      if(!amount || amount <= 0) {
        throw new Error("Amount must be greater than 0");
      }

      const expense = this.expenseService.addExpense(paidBy, amount, description);

      // Render the expenses in expense list
      this.renderExpense(expense);

      // Reset the form
      this.elements.expenseAmountInput.value = "";
      this.elements.expenseDescriptionInput.value = "";

      // Show toast 
      showSuccessToast(`Expense $${expense.amount} added by ${expense.paidBy}`);

    } catch (error) {
      console.error("Error adding Expense: ", error);
      showErrorToast(error.message)
    }
  }

  renderExpense(expense) {
    const text = expense.description !== "No description" 
    ?
      `${expense.paidBy} paid $${expense.amount} for ${expense.description}`
    :
      `${expense.paidBy} paid ${expense.amount}`;

    const listItem = DOMHelpers.createListItem(text, "animate-slide-in-out text-gray-900 text-sm line-clamp-1 bg-gray-200 mb-2 p-1 rounded-xs flex items-center", "text-red-500 dark:text-red-400");
    const expenses = this.expenseService.getAllExpenses();
    let timer;
    expenses.forEach((expense, index) => {
      clearTimeout(timer)
      timer = setTimeout(() => {
        this.elements.expenseList.appendChild(listItem);
      }, index * 200);
    });
    
  }

  handleSeattle() {
    try {
      const results = this.expenseService.simplifyExpenses();
      this.displayResults(results);

    } catch (error) {
      console.error("Error settling expenses: ", error);
      showErrorToast(`Error settling expenses: ${error.message}`)
    }
  }

  displayResults(results) {
    DOMHelpers.clearElement(this.elements.settledList);
    
    if(results.length === 0) {
      const noResultItem = DOMHelpers.createListItem("All expenses are settled!", "animate-slide-in-out text-gray-900 text-sm line-clamp-1 bg-gray-200 mb-2 p-1 rounded-xs flex items-center", "text-green-500 dark:text-green-400");
      this.elements.settledList.appendChild(noResultItem);
      return;
    }
    
    DOMHelpers.appendFragment(this.elements.settledList, results, (result) => DOMHelpers.createListItem(result, "animate-slide-in-out text-gray-900 text-sm line-clamp-1 bg-gray-200 mb-2 p-1 rounded-xs flex items-center", "text-green-500 dark:text-green-400"));
  }

  handleSwitchTheme() {
    if(this.themeStorageData === null) {
      this.themeStorageData = "dark";
      localStorage.setItem("splitterApp-theme", this.themeStorageData)
    } else {
      this.themeStorageData = null;
      localStorage.setItem("splitterApp-theme", this.themeStorageData)
    }

    this.loadTheme()
  }

  loadTheme() {
    const className = this.themeStorageData;
    if(className) {
      DOMHelpers.addClassName(this.elements.html, className);
    } else {
      DOMHelpers.removeAttribute(this.elements.html, "class");
    }
  }

  handleFileExport() {
    const exportData = {
      users: [],
      expenses: [],
      exportDate: new Date().toISOString()
    } 
    
    const users = this.userService.getAllUsers();
    const userJsonArray = [];

    users.forEach(user => {
      userJsonArray.push(user.json)
    });

    exportData.users.push(...userJsonArray);

    const expenses = this.expenseService.getAllExpenses();
    const expenseJsonArray = [];

    expenses.forEach(expense => {
      expenseJsonArray.push(expense.json);
    });

    exportData.expenses.push(...expenseJsonArray);

    this.exportFile(exportData);
  }

  exportFile(exportData) {
    const jsonString = JSON.stringify(exportData, null, 2); // null and 2 for pretty-printing

    const blob = new Blob([jsonString], { type: 'application/json' });

    const fileUrl = URL.createObjectURL(blob);
    const fileName = "expenses.json";

    const link = DOMHelpers.createElement('a');
    link.href = fileUrl;
    link.download = fileName;

    // Append to body (optional, but ensures it's in the DOM for programmatic click)
    document.body.appendChild(link);

    // Programmatically click the link to trigger the download
    link.click();

    document.body.removeChild(link); // Remove anchor tag after click
    URL.revokeObjectURL(fileUrl); // Clean up the object URL
  }

  handleFileImport(e) {
    e.preventDefault();

    this.elements.fileInput.click();

    this.elements.fileInput.addEventListener("change", (event) => {

      try {
        const files = event.target.files;
        if(files.length > 0) {

          const file =  event.target.files[0];
          if(!file) {
            throw new Error(`No file found to read data!`);
          }

          const reader = new FileReader();
          reader.addEventListener("load", (e) => {
           this.importFile(e);
          });

          // Read the file as text (you can also use readAsDataURL, readAsArrayBuffer, etc.)
          reader.readAsText(file);

          showSuccessToast(`Data successfully loaded from the file ${file.name}`);
        }
        
      } catch (error) {
        console.log("File uploading error:", error);
        showErrorToast(`File uploading error: ${error.message})`)
      }
    })
  }

  importFile(e) {
    const importedData = JSON.parse(e.target.result); // The file content
    
    const users = importedData.users;
    users.forEach(userItem => {
      this.generateUserByImportedData(userItem);
    });

    const expenses = importedData.expenses;
    expenses.forEach(expenseItem => {
      this.generateExpenseByImportedData(expenseItem);
    });
  }

  generateUserByImportedData(userItem) {
    const user = this.userService.addUser(userItem.name);
    this.addUserToSelectBox(user.name);
  }

  generateExpenseByImportedData(expenseItem) {
    const expense = this.expenseService.addExpense(expenseItem.paidBy, expenseItem.amount, expenseItem.description);
    this.renderExpense(expense);
  }
  
} //expenseUI


