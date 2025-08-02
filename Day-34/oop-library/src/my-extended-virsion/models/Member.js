import User from "./User.js";

const borrowedMap = new WeakMap();

export class Member extends User {
  
  constructor(id, name, email) {
    super(id, name, email);
    // const borrowedLocalStorageBook = JSON.parse(localStorage.getItem("LMS-borrowed-books")) || [];
    // borrowedMap.set(this, borrowedLocalStorageBook);
    const data = this.#read();
    borrowedMap.set(this, data[0]?.borrowedBooks || []);
  }

  borrowBook(book) {
    const books = borrowedMap.get(this);
    book.isAvailable = false;
    books.push(book);

    const data = this.#read();

    const availableBook = data[0].books.find(b => b.id === book.id);
    availableBook.isAvailable = false;

    data[0].borrowedBooks = [...books];

    const bookIsInHistory = data[0].bookHistory.find(item =>  item.book.id === book.id && item.user.id === this.id);
    
    if(bookIsInHistory) {
    
      bookIsInHistory.borrowedAt = [...bookIsInHistory.borrowedAt, new Date().toLocaleString()]
    
    } else {
      const history = {
        book: book,
        user: {
          id: this.id,
          name: this.name,
          email: this.email
        },
        borrowedAt: [new Date().toLocaleString()],
        returnedAt: []
      }
      data[0].bookHistory.push(history)
    }

    this.#save(data);
  }

  getBorrowedBooks() {
    return borrowedMap.get(this)
  }

  returnBook(bookId) {

    const books = borrowedMap.get(this);

    const updatedBorrowedBooks =  books.filter(b => b.id !== bookId);

    const data = this.#read();

    //change isAvailable = true
    const availableBook = data[0].books.find(b => b.id === bookId);
    availableBook.isAvailable = true;

    //chang returnAt value
    const bookIsInHistory = data[0].bookHistory.find(item => item.user.id === this.id && item.book.id === bookId);
    bookIsInHistory.returnedAt = [...bookIsInHistory.returnedAt, new Date().toLocaleString()];

    data[0].borrowedBooks = [...updatedBorrowedBooks]
    this.#save(data);
    borrowedMap.set(this, updatedBorrowedBooks);
  }

  getRole() {
    return "Member";
  }

  #read() {
    return JSON.parse(localStorage.getItem("LMS-data")) || [];
  }

  #save(data) {
    localStorage.setItem("LMS-data", JSON.stringify(data))
  }
}