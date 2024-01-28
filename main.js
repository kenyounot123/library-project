const myLibrary = [];

const dialog = document.querySelector("dialog");
const showButton = document.querySelector(".new-book-btn");
const closeButton = document.querySelector(".cancel-btn");
showButton.addEventListener("click", () => {
  dialog.showModal();
});

closeButton.addEventListener("click", () => {
  dialog.close();
});

function Book(title, author, pages, status) {
  this.title = title
  this.author = author
  this.pages = pages
  this.status = status
}

function addBookToLibrary() {
  const title = document.getElementById('title').value 
  const author = document.getElementById('author').value 
  const pages = document.getElementById('pages').value
  const status = document.getElementById('status').checked

  // Check if fields are empty
  if (!title || !author || !pages) {
    alert("Please fill in all required fields.");
    return;
  }

  //Create new object and push it to library array
  const newBook = new Book(title, author, pages, status)
  myLibrary.push(newBook)
  dialog.close()
}


// Do not submit fake form
confirmBtn.addEventListener("click", (event) => {
  event.preventDefault(); 
});
confirmBtn.addEventListener("click", addBookToLibrary);

//Appends new book to the DOM
function appendBookEntry(book) {
  const bookEntry = document.querySelector('.left-card-section__title + .card-entry')
  const newBookEntry = document.createElement('li');
  newBookEntry.classList.add('book-entry');
  newBookEntry.textContent = book.title
  bookEntry.appendChild(newBookEntry)

  //Status of book
  const bookEntryStatus = document.querySelector('.right-card-section__title + .card-entry')
  const newBookEntryStatus = document.createElement('li');
  const readStatus = document.createElement('span');
  newBookEntryStatus.classList.add('book-entry');
  readStatus.classList.add('book-entry--status');
  readStatus.textContent = book.status

  newBookEntryStatus.appendChild(readStatus)
  bookEntryStatus.appendChild(newBookEntryStatus)
}