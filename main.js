const myLibrary = [];

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
}

const dialog = document.querySelector("dialog");
const showButton = document.querySelector(".new-book-btn");
const closeButton = document.querySelector("dialog button");
showButton.addEventListener("click", () => {
  dialog.showModal();
});

closeButton.addEventListener("click", () => {
  dialog.close();
});