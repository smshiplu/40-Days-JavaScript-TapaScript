import * as user from "../utils/getCurrentUser.js";

export class LibraryService {

  // #bookList;

  constructor() {
    // this.#bookList = [];
    this.#save(this.#read());
  }

  addBook(book) {
    // this.#bookList.push(book);

    const data = this.#read();
    data[0].books.push(book);
    this.#save(data);    
  }
  
  getAllBooks() {
    // return this.#bookList;

    const data = this.#read();
    return data[0].books;
  }

  getAvailableBooks() {
    // return this.#bookList.filter(book => book.isAvailable);

    const data = this.#read();
    return data[0].books.filter(book => book.isAvailable);
  }

  getBookById(id) {
    // return this.#bookList.find(book => book.id === id);
    const data = this.#read();
    return data[0].books.find(book => book.id === id);
  }

  deleteBook(id, currentUser) {
    
    if(!user.isAdmin(currentUser)) return;

    const data = this.#read();
    const updatedBookList = data[0].books.filter(book => book.id !== id);
    data[0].books = [...updatedBookList];
    this.#save(data);
  }

  #read() {
    const storageData = localStorage.getItem("LMS-data");
    if(!storageData) {
      return [
        {
          books: [
            {id: crypto.randomUUID(), title: "Robinson Crusoe", author: "Daniel Difoe", genre: "Adventure", isAvailable: true},
            {id: crypto.randomUUID(), title: "Treasure Island", author: "Robert Luis Stevenson", genre: "Adventure", isAvailable: true},
          ],
          bookHistory:[],
          borrowedBooks: []
        }
      ]
    }

    return JSON.parse(storageData);
  }

  #save(data) {
    localStorage.setItem("LMS-data", JSON.stringify(data))
  }
}

