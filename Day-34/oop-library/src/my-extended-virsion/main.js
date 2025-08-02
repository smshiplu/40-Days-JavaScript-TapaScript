import { Admin } from "./models/Admin.js";
import { Member } from "./models/Member.js";
import { Book } from "./models/Book.js";
import { LibraryService } from "./services/LibraryService.js";
import * as user from "./utils/getCurrentUser.js";

const userSwitcher = document.getElementById("userSwitcher");
const bookEntrySection = document.getElementById("bookEntrySection");
const borrowedBookSection = document.getElementById("borrowedBookSection");

const addBookForm = document.getElementById("addBookForm");

const bookListEl= document.getElementById("bookList");
const borrowedBookListEl = document.getElementById("borrowedBookList");

let currentUser = new Member("Shiplu", "shiplu@email.com");

const library = new LibraryService();

userSwitcher.addEventListener("change", e => {
  const selected = e.target.value;

  currentUser = selected === "admin" ? 
  new Admin("Admin", "admin@email.com") :
  new Member("Shiplu", "shiplu@email.com");
  
  bookEntrySection.style.display = (selected === "admin" ? "block" : "none");
  borrowedBookSection.style.display = (selected === "admin" ? "none" : "block");

  renderAvailableBooks();
  renderBorrowedBooks();
});

addBookForm.addEventListener("submit", e => {
  e.preventDefault();

  const formFields = Array.from(document["addBookForm"].elements).filter(field => field.type !== "submit");

  if(!validation(formFields)) {
    return;
  }
  
  const title = formFields[0].value.trim();
  const author = formFields[1].value.trim();
  const genre = formFields[2].value.trim();

  const book = new Book(title, author, genre);
  library.addBook(book);

  renderAvailableBooks();
  
  addBookForm.reset();
});

function renderAvailableBooks() {
  bookListEl.innerHTML = "";
  library.getAllBooks().forEach(book => {

    const li = document.createElement("li");
    li.className = "flex justify-between gap-2 border-b border-b-stone-700 py-4 shadow-xl";

    let controls = '';

    if(user.isMember(currentUser) && book.isAvailable) {
      controls = `<button type="button" data-action="borrow" data-id=${book.id} class="borrowBtn text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-1.5 text-center me-0 cursor-pointer">Borrow</button>`;

    } else if (user.isAdmin(currentUser)) {
      controls = `
        <span class="italic text-stone-300 text-sm">${book.isAvailable ? "Available" : "Borrowed"}</span>
        ${book.isAvailable ? `<button type="button" data-action="delete" data-id="${book.id}" class="deleteBtn text-rose-700 p-px cursor-pointer" >🗑</button>` : ""}
      `;
    }
    
    li.innerHTML = `
      <p class="flex-1"><strong>${book.title}</strong> by ${book.author} - <em>(${book.genre})</em></p>
      ${controls}
    `;
    bookListEl.appendChild(li);
  });
}

function renderBorrowedBooks() {
  borrowedBookListEl.innerHTML = "";

  // if(currentUser.getRole() !== "Member") return;
  if(!user.isMember(currentUser)) return;

  const borrowedBooks = currentUser.getBorrowedBooks();
  borrowedBooks && borrowedBooks.forEach(book => {
    const li = document.createElement("li");
    li.className = "flex items-center justify-between border-b border-b-stone-700 py-4 shadow-xl";
    li.innerHTML = `
      <p flex-1><strong>${book.title}</strong> by ${book.author} - <em>(${book.genre})</em></p>
      <button type="button" data-action="return" data-id=${book.id} class="text-white bg-gradient-to-r from-rose-400 via-rose-500 to-rose-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-rose-300 dark:focus:ring-rose-800 font-medium rounded-lg text-sm px-5 py-1.5 text-center me-0 cursor-pointer">Return</button>
    `;
    borrowedBookListEl.appendChild(li);
  })

} 

bookListEl.addEventListener("click", e => {
  
  if(e.target.tagName === "BUTTON" && e.target.classList.contains("borrowBtn")) {
    const id = e.target.getAttribute("data-id");
    const action = e.target.getAttribute("data-action");
    const book = library.getBookById(id);

    if(action === "borrow" && user.isMember(currentUser) && book?.isAvailable) {
      currentUser.borrowBook(book);
      renderAvailableBooks();
      renderBorrowedBooks();
    }
  }

    if(e.target.tagName === "BUTTON" && e.target.classList.contains("deleteBtn")) {
      const id = e.target.getAttribute("data-id");
      const action = e.target.getAttribute("data-action");
      const book = library.getBookById(id);

      if(action === "delete" && user.isAdmin(currentUser) && book.isAvailable) {
        library.deleteBook(id, currentUser);
        renderAvailableBooks();
        renderBorrowedBooks();
      }
    }
});

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

function validation(formFields) {
  let isValid = true;
  for (const field of formFields) {
    if(!field.value) {
      console.log(`\`${field.id.toUpperCase()}\` cannot be empty!`);
      field.nextElementSibling.innerText = `\`${field.id.toUpperCase()}\` cannot be empty!`;
      isValid = false;
      break;
    }
    field.nextElementSibling.innerText = "";
  }
  return isValid;
}

function initialRenderingAndActivation() {
  // Initial Rendering 
  bookEntrySection.style.display = "none";
  renderAvailableBooks();
  renderBorrowedBooks();
}
initialRenderingAndActivation();


// const storageData = JSON.parse(localStorage.getItem("LMS-data"));
// console.log(storageData);
