# Day 34 - 40 Days of JavaScript - Library Management System(LMS)

## **🎯 Goal of This Lesson**

- ✅ What are We Building?
- ✅ Library Management System
- ✅ Applying OOP
- ✅ Project Setup
- ✅ HTML: The View Switcher
- ✅ HTML: Add Book Form
- ✅ HTML: Available Books
- ✅ HTML: Borrowed Books
- ✅ JS: Modules & Classes
- ✅ JS: Role-Based Views
- ✅ JS: Add Books
- ✅ JS: Services
- ✅ JS: Render All Books
- ✅ JS: Event Bubbling
- ✅ JS: Borrow Tracking
- ✅ JS: Render Borrowed Books
- ✅ Task Assignments

<br/>

## **👩‍💻 🧑‍💻 Assignment Tasks**

<br/>

## ✅ 1. Add the functionality to return a book

Add the functionality to return a book. The JavaScript logic should take care of removing the borrowed book and bring back the `Borrow` button in the available books section for that book.
The Local Storage implementation must be maintained as it is.

<br/>

### ✔ Answer

In the file `main.js` there are some changes to the "Return" button event handler. 

```js
    borrowedBookListEl.addEventListener("click", e => {
        if(e.target.tagName === "BUTTON") {

            const id = e.target.getAttribute("data-id");
            const action = e.target.getAttribute("data-action");
            const book = library.getBookById(id);
            
            if(action === "return" && user.isMember(currentUser)) {
                currentUser.returnBook(id);
                renderAvailableBooks();
                renderBorrowedBooks();
            }
        }
    })
```

<br/>

In the file `Member.js` the returnBook method.  

```js
    returnBook(bookId) {
      // TODO: Implement This. It is your task.
        const books = borrowedMap.get(this);
        const book = books.find(b => b.id === bookId);
        book.isAvailable = true;
        
        const updatedBorrowedBooks =  books.filter(b => b.id !== bookId);
        localStorage.setItem('borrowedBooks', JSON.stringify(updatedBorrowedBooks));
        borrowedMap.set(this, updatedBorrowedBooks);
    }
```

<br/><br/>

## ✅ 2. Code Clean up

Do the code cleanup bu utilizing the utilities. The hint is given in the session.

<br/>

### ✔ Answer

There is a folder called `utils` created inside the `src` folder. A file `getCurrentUser.js` is created inside the `utils` folder.  

In the **`getCurrentUser.js`** file, there are two functions, `isAdmin()` and `isMember()`, which take the current user as a parameter. And in the `main.js`, those functions are imported and called like `isAdmin(currentUser)` or `isMember(currentUser)` and get the results accordingly.

```js
    function isAdmin(user) {
        return user.getRole() === "Admin" ? true : false
    }

    function isMember(user) {
        return user.getRole() === "Member" ? true : false
    }

    export {
        isAdmin,
        isMember
    }
```

<br/>


Please find the task assignments in the [Task File](./task.md).