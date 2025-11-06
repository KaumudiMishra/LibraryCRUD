const mylibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.bookid = crypto.randomUUID();
}

Book.prototype.toggleread = function () {
    this.read = !this.read;
};

function openpopup() {
    document.getElementById("popup").style.display = "flex";
}
function closepopup() {
    document.getElementById("popup").style.display = "none";
}

function getdata(event) {
    event.preventDefault();
    const title = document.getElementById("title");
    const author = document.getElementById("author");
    const pages = document.getElementById("pages");
    const read = document.getElementById("read");
    let addbook = new Book(title.value, author.value, pages.value, read.checked);
    mylibrary.push(addbook);
    display();
    closepopup();

}

function display() {
    let shelf = document.querySelector("#Library-container");
    shelf.innerHTML = "";

    for (let i = 0; i < mylibrary.length; i++) {
        const card = document.createElement("div");
        const title = document.createElement("p");
        title.textContent = mylibrary[i].title;
        const author = document.createElement("p");
        author.textContent = mylibrary[i].author;
        const pages = document.createElement("p");
        pages.textContent = mylibrary[i].pages;
        const readtoggle = document.createElement("button");
        const remove = document.createElement("button");
        readtoggle.textContent = mylibrary[i].read ? "Read" : "Not Read";
        remove.textContent = "Remove";


        card.appendChild(title);
        card.appendChild(author);
        card.appendChild(pages);
        card.appendChild(readtoggle);
        card.appendChild(remove);
        shelf.appendChild(card);
        readtoggle.onclick = function () {
            mylibrary[i].toggleread();
            display(); 
        };

        remove.onclick = function () {
            mylibrary.splice(i, 1);
            display(); 
        };

    }
}
const newbtn = document.getElementById("newbtn");
newbtn.addEventListener('click', openpopup);
const addbtn = document.getElementById("addbtn");
addbtn.addEventListener('click', getdata);
const close = document.getElementById("close");
close.addEventListener('click', closepopup);
display();