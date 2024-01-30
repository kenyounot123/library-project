const myLibrary = [new Book("Percy Jackson", "bobby", 233, false )];


displayBooks();

const formDialog = document.querySelector("#formDialog");
const showButton = document.querySelector(".new-book-btn");
const closeButton = document.querySelector(".cancel-btn");
const bookDialog = document.querySelector("#bookDialog")
showButton.addEventListener("click", () => {
  formDialog.showModal();
});

closeButton.addEventListener("click", () => {
  formDialog.close();
  bookDialog.close();
});
// Do not submit fake form
confirmBtn.addEventListener("click", (event) => {
  event.preventDefault(); 
  addBookToLibrary()
});
window.onclick = function(event) {
  if (event.target == formDialog) {
    formDialog.close();
  }
  if (event.target == bookDialog) {
    bookDialog.close();
  }
}

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
  displayBooks()
  formDialog.close()
}
//Loop through library array to display books to DOM
function displayBooks() {
  //Reset DOM to prevent repeat data
  const bookEntry = document.querySelector('.left-card-section__title + .card-entry')
  const bookEntryStatus = document.querySelector('.right-card-section__title + .card-entry')
  bookEntry.innerHTML = '';
  bookEntryStatus.innerHTML = '';


  myLibrary.forEach((book, index) => {
    appendBookEntry(book, index)
  });
}
//Appends new book to the DOM
function appendBookEntry(book, index) {
  const bookEntry = document.querySelector('.left-card-section__title + .card-entry')
  const newBookEntry = document.createElement('li');
  newBookEntry.classList.add('book-entry');
  newBookEntry.addEventListener('click', displayBookInfo)
  newBookEntry.textContent = book.title
  bookEntry.appendChild(newBookEntry)

  //Appends status of book to DOM
  const bookEntryStatus = document.querySelector('.right-card-section__title + .card-entry')
  const newBookEntryStatus = document.createElement('li');
  const readStatus = document.createElement('span');
  newBookEntryStatus.classList.add('book-entry');
  readStatus.classList.add('book-entry--status');
  addInitialStatus(book, readStatus)

  // Appends remove book button to DOM 
  const removeBtn = document.createElement('button');
  removeBtn.textContent = 'Remove'
  removeBtn.setAttribute('data-index', index);
  removeBtn.classList.add('remove-book-btn');
  removeBtn.addEventListener('click', function(event) {
    removeBook(event);
  })

  //Appends change status button to DOM 
  const changeStatusBtn = document.createElement('button'); 
  changeStatusBtn.textContent = 'Change Status'
  changeStatusBtn.classList.add('change-status-btn')
  changeStatusBtn.addEventListener('click', function(event) {
    changeStatus(event);
  });

  newBookEntryStatus.appendChild(removeBtn)
  newBookEntryStatus.appendChild(readStatus)
  newBookEntryStatus.appendChild(changeStatusBtn)
  bookEntryStatus.appendChild(newBookEntryStatus)
}
function addInitialStatus(book, element) {
  if (book.status === true) {
    element.textContent = 'Read'
    element.classList.add('read')
  } else {
    element.textContent = 'Unread'
    element.classList.add('unread')
  };
}
function displayBookInfo() {
  bookDialog.showModal()
}
function createBookInfoModal() {

}
//Change status button 
function changeStatus(event) {
  const readStatus = event.target.previousElementSibling
  readStatus.classList.toggle('read')
  if (readStatus.classList.contains('read')) {
    readStatus.textContent = 'Read';
  } else {
    readStatus.textContent = 'Unread';
    readStatus.classList.add('unread')
  }
}
function removeBook(event) {
  const dataIndex = parseInt(event.target.getAttribute('data-index'));

  // Remove the book from myLibrary array
  myLibrary.splice(dataIndex, 1);

  // Update the display
  displayBooks();
}
//Modals 
