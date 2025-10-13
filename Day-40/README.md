# Day 40 - A Complete JavaScript Project

## **🎯 Goal of This Lesson**

- ✅ What Can You Expect?
- ✅ Thank YOU!
- ✅ Setting the Ground
- ✅ The Requirements
- ✅ Design Breakdown
- ✅ Project Setup
- ✅ Header
- ✅ Add User UI
- ✅ Add Expense UI
- ✅ Expense & Settlement UI
- ✅ Footer
- ✅ Thinking in JavaScript
- ✅ User Model
- ✅ Expense Model
- ✅ User Service
- ✅ Expense Service
- ✅ The Expense UI
- ✅ Initialize UI Element
- ✅ DOM Helpers
- ✅ Bind Events: Add User
- ✅ Testing the Flow
- ✅ Populate Paid By
- ✅ Add a Toaster
- ✅ Add Expense Logic
- ✅ Rendering Expenses
- ✅ Expense Settling Algo
- ✅ Show Settlements
- ✅ Task Assignments
- ✅ Good Bye

<br/>

## **👩‍💻 🧑‍💻 Assignment Tasks**

<br/>

## ✅ 1. Export Expenses

Export the user and expense details in a JSON file when clicking on the export button.

<br/>

### ✔ Solutions: 
To implement export below steps are taken.

<br/>

*** User Model: 📝 user.js ***

```js
    // initializing method to json property
    constructor() {
        this.json = this.getJson();
    } 

    // new method created
    getJson() {
        return {
            id: this.id,
            name: this.name
        }
    }
```

<br/>

*** Expense Model: 📝 expense.js ***

```js
    // initializing method to json property
    constructor() {
        this.json = this.getJson();
    } 

    // new method created
    getJson() {
        return {
            id: this.id,
            paidBy: this.paidBy,
            amount: this.amount,
            description: this.description,
            timestamp: this.timestamp
        }
    }
```

<br/>

*** Expense UI: 📝 expenseUI.js ***

```js
    // After registering button element binding events, the following methods were created.

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
```

<br/><br/>

## ✅ 2. Import Expenses

The Same JSON file should be imported by clicking the import button and populate the expense list, user list select box. Following it, when the split button is clicked, the settlements should take place.

<br/>

### ✔ Solutions: 
To implement import below steps are taken.

<br/>

*** 📝 Index.html ***

```html
    <!-- The import Button wrapped with a form element. Which contains a file type input -->
    <form id="fileImportForm">
        <input type="file" id="fileInput" hidden class="hidden">
        <button type="submit" id="importBtn">Import</button>
    </form>
```

<br/>

*** Expense UI: 📝 expenseUI.js ***

```js
    // After registering form element binding events, the following methods were created.

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
        });
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
```


<br/><br/>

## ✅ 3. Enhance the UI
- Animation: Tailwindcss animations are added to the expense list.
- Theme: Dark and Light theme functionality added.
- Button Styling: Gradient styles are added to the buttons. 

<br/><br/>

![Screenshot-Splitter-App-Light-Theme](splitter/screenshot-splitter-light.png?raw=true "Splitter App")

<br/><br/>

![Screenshot-Splitter-App-Light-Theme](splitter/screenshot-splitter-dark.png?raw=true "Splitter App")

Please find the task assignments in the [Task File](./task.md).