// 1. Exploring JavaScript Objects

// Task 1: Create a constructor function for the Book object with properties for title, author, and pages.

function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
}

// Task 2: Implement a method within the Book object to display book information.

Book.prototype.bookinfo = function() {
    console.log(this.title + " is by " + this.author + " and has " + this.pages + " pages.");
}

// Task 3: Create an array to store book objects and implement functions to add new books and search for books by title or author.

let books = [
    new Book("Bible", "God", 1200),
    new Book("Quran", "God", 602),
    new Book("Book of Mormon", "Joseph Smith", 531),
]
function addBook(books, title, author, pages) {
    books.push(new Book(title, author, pages));
    console.log("Book added.");
}
addBook(books, "Common Sense", "Thomas Paine", 47)
function findBook(books, search) {
    return books.filter(book  => book.title.toLowerCase().includes(search.toLowerCase()) ||
                        book.author.toLowerCase().includes(search.toLowerCase()));
}
console.log(books);
console.log(findBook(books, "Joseph Smith"));

// Task 4: Create functions that utilize the filter method to filter out books that contain more than 100 pages
// and the map method to add "Title: " and "Author: " to the book's title and author properties respectably.

function filterHundredPages(books) {
    return books.filter(book => book.pages > 100);
}
function addTitleAndAuthor(books) {
    return books.map(book => ({title: "Title: " + book.title, author: "Author: " + book.author, pages: book.pages}))
}
console.log("These are the books with more than 100 pages:", filterHundredPages(books));
console.log(addTitleAndAuthor(books));



// 2. Exploring Objects and Math in JavaScript

// Task 1: Create a constructor function for the Account object with properties for accountNumber, balance, and owner.

function Account(accountNumber, balance, owner) {
    this.accountNumber = accountNumber;
    this.balance = balance;
    this.owner = owner;
}

let accounts = [new Account(113, 12, "Jared"), new Account(314, 314159, "Piper"), new Account(555, 555, "555")]

// Task 2: Implement methods within the Account object to deposit and withdraw funds.

Account.prototype.deposit = function(funds) {
    this.balance += funds
    console.log("Funds deposited.")
}

Account.prototype.withdraw = function(funds) {
    this.balance -= funds
    console.log("Funds withdrawn.")
}

accounts[0].deposit(12)
accounts[0].withdraw(22)

// Task 3: Create a method to calculate compound interest based on the balance and specified interest rate.

Account.prototype.compoundInterest = function(rateDecimal) {
    return this.balance * rateDecimal
}
console.log(accounts[2].compoundInterest(.03))