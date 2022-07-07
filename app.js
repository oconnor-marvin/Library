const newBookInputExit = document.getElementById("exit-new-book")
const newBookInputForm = document.querySelector(".new-book-input")
const addBookBtn = document.getElementById("add-book-btn")
const submitBtn = document.getElementById("submit-btn")
const booksContainerEl = document.querySelector(".books-container")
const readUnreadBtnEls = document.getElementsByClassName("btn-read")
const removeBtnEls = document.getElementsByClassName("btn-remove")
let readUnreadBtnArrEls = []
let removeBtnArrEls = []

const form = document.getElementById("form")

//test button(delete)
const test = document.getElementById("test-button");


test.addEventListener("click", () => {
console.log(myLibrary)

})

let myLibrary = [];

//newBook
let title = "unknown"
let author = "unknown"
let pages = "0"
let read = "false"
let libraryCount = 0
let uniqueId = 0

submitBtn.addEventListener("click", () => {
    document.getElementById("new-book").style.transform = "translateX(1000px)";
    //collecting for data
    newBook();
    //creating a new book with a contructor
    const createdBook = new book(title, author, pages, read, libraryCount);
    //pushing the new book into the array
    myLibrary.push(createdBook);
    //using the array to create a new book
    for (let index = 0; index < myLibrary.length -libraryCount; index++) {
      createBookCover();
    }
    readUnreadBtnArrEls = Array.from(readUnreadBtnEls);
    removeBtnArrEls = Array.from(removeBtnEls)
    addReadUnreadBtnFunctionality();
    addRemoveBtnFunctionality();
    form.reset();
    libraryCount++;
    uniqueId++;
})



addBookBtn.addEventListener("click", () => {
   document.getElementById("new-book").style.transform = "translateX(-50%)";
})

newBookInputExit.addEventListener("click", () => {
   document.getElementById("new-book").style.transform = "translateX(1000px)";
});

function addReadUnreadBtnFunctionality(){
readUnreadBtnArrEls.forEach(readUnreadBtnArrEl => {
  readUnreadBtnArrEl.addEventListener("click", readUnreadBtnFunctionality)
});
}

function readUnreadBtnFunctionality(){
  if(this.innerText === "Read"){
    this.innerText = "Unread"
    this.style.backgroundColor = "#EEEEEE"
    this.style.color = "#892CDC"
    console.log("read")
  }else if(this.innerText === "Unread"){
    this.innerText = "Read"
    this.style.backgroundColor = "#892CDC"
    this.style.color = "white"
    console.log("unread")
  }
}


//storing the form submissions
function newBook() {
  title = document.getElementById("title-input").value;
  author = document.getElementById("author-input").value;
  pages = document.getElementById("pages-input").value;
  read = document.getElementById("book-read-input").checked;
}

function book(title, author, pages, read, libraryCount) {
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
  this.libraryCount = libraryCount
  this.uniqueId = uniqueId
}

function createBookCover() {
  const cover = document.createElement('div');
  cover.setAttribute("id", "book")
  cover.setAttribute("dataId", uniqueId)
  booksContainerEl.appendChild(cover)

  const createdTitle = document.createElement('h4')
  createdTitle.setAttribute("id", "title")
  createdTitle.innerHTML = title;
  cover.appendChild(createdTitle);

  const createdAuthor = document.createElement('h5')
  createdAuthor.setAttribute("id", "author")
  createdAuthor.innerHTML = author;
  cover.appendChild(createdAuthor)

  const createdPages = document.createElement('div')
  createdPages.setAttribute("id", "pages")
  cover.appendChild(createdPages);
  createdPages.innerHTML = pages;

  const createdRemoveBtn = document.createElement("button")
  createdRemoveBtn.setAttribute("class","btn-remove")
  cover.appendChild(createdRemoveBtn);
  createdRemoveBtn.innerHTML = "Remove" 

  const createdReadBtn = document.createElement("button")
  createdReadBtn.setAttribute("class","btn-read")
  cover.appendChild(createdReadBtn)
  if(read === true){
    createdReadBtn.innerHTML = "Read"
    createdReadBtn.style.backgroundColor = "#52057B"
    createdReadBtn.style.color = "white"
  }else if(read === false){
    createdReadBtn.innerHTML = "Unread"
  }
}

function addRemoveBtnFunctionality(){
  removeBtnArrEls.forEach(removeBtnArrEl => {
    removeBtnArrEl.addEventListener("click", deleteBook)
  });
  }
  
function deleteBook(){
  this.parentElement.remove();
  console.log("delete")
  }

  
