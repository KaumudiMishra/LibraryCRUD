const mylibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.bookid = crypto.randomUUID();
}
Book.prototype.info = function () {
  console.log(`${this.title} by ${this.author}, ${this.pages} pages, ${this.read ? "read" : "not read"}`);
};
Book.prototype.toggleread = function () {
    this.read = !this.read;
};
function addBookToLibrary(title, author, pages, read) {
    let addbook = new Book(title,author,pages,read);
    mylibrary.push(addbook);
}
function display(){
    let shelf = document.querySelector("#Library-container");
    for(let i = 0; i<mylibrary.length; i++){
            const card = document.createElement("div");
            const title = document.createElement("p");
            title.textContent=mylibrary[i].title;
            const author = document.createElement("p");
            author.textContent=mylibrary[i].author;
            const pages = document.createElement("p");
            pages.textContent=mylibrary[i].pages;
            const readtoggle = document.createElement("button");
            const remove = document.createElement("button");
            card.appendChild(title);
            card.appendChild(author);
            card.appendChild(pages);
            card.appendChild(readtoggle);
            card.appendChild(remove);
            shelf.appendChild(card);

    }
}