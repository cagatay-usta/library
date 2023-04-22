const books = [
  {
    title: "Street Coder",
    author: "Sedat Kapanoglu",
    pages: "314",
    read: "Not read",
    id: 0,
  },
  {
    title:
      "Code: The Hidden Language of Computer Hardware and Software",
    author: "Charles Petzold",
    pages: "393",
    read: "Read",
    id: 1,
  },
  {
    title: "Deep Work",
    author: "Cal Newport",
    pages: "304",
    read: "Read",
    id: 2,
  },
  {
    title: "Clean Code",
    author: "Robert Cecil Martin",
    pages: "464",
    read: "Not read",
    id: 3,
  },
];

class Book {
  constructor(title, author, pages, read) {
    (this.title = title),
      (this.author = author),
      (this.pages = pages),
      (this.read = read),
      (this.id = books.length ? +books[books.length - 1].id + 1 : 0); // if all books are deleted, set the id to 0, else set it +1 of the last book
    books.push(this);
  }
}

function createHtml(html) {
  const template = document.createElement("template");

  template.innerHTML = html.trim();

  return template.content.firstElementChild;
}

function createCard(book) {
  const newCard = createHtml(`
<div
        data-number="${book.id}"
        class="bg-support dark:bg-neutral dark:text-support p-6 shadow-xl rounded-lg h-full flex flex-col justify-between "
      >
        <div class="flex flex-col w-full h-full gap-2">
          <p class="font-bold text-3xl ">
            ${book.title}
          </p>
          <p class="text-xl">by ${book.author}</p>
          <p class="mt-auto">Pages: ${book.pages}</p>
          <p class="read">${book.read}</p>

        </div>

        <div class="my-3 flex gap-4 justify-around">
          <span class="material-symbols-rounded big text-neutral dark:text-support readButton">
            check_circle
          </span>
          <span class="material-symbols-rounded big text-brand delete">
            delete
          </span>
        </div>
      </div>

`);
  return newCard;
}

const addButton = document.querySelector("#add");
const darkMode = document.querySelector("#darkMode");
const readButton = document.querySelector("#read");
const formCard = document.querySelector(".form-card");
const switchSound = new Audio("lightSwitch.wav");

let readState = "Not read";

function addBook() {
  const title = document.querySelector("#title");
  const author = document.querySelector("#author");
  const pages = document.querySelector("#pages");
  const read = readState;

  if (title.value && author.value && pages.value) {
    const newBook = new Book(
      title.value,
      author.value,
      pages.value,
      read
    );
    document.getElementById("main").appendChild(createCard(newBook));

    // clean form and state
    readState = "Not read";
    title.value = "";
    author.value = "";
    pages.value = "";

    readButton.classList.remove("clicked");
    formCard.classList.toggle("closed");
    addButton.classList.toggle("clicked");
  }
}

function deleteBook() {}

function populateScreen(books) {
  books.forEach((book) => {
    document.getElementById("main").appendChild(createCard(book));
  });
}

populateScreen(books);

// listens the document for event delegation
document.addEventListener("click", (e) => {
  e.preventDefault();

  if (e.target.matches(".delete")) {
    const selectedCard = e.target.parentNode.parentNode;
    // find the index of the book and delete it from the array
    const filteredBook = books.filter((book) => {
      return book.id === +selectedCard.dataset.number;
    });
    const bookIndex = books.indexOf(filteredBook[0]);
    if (bookIndex != -1) {
      books.splice(bookIndex, 1);
    }

    selectedCard.remove();

  } else if (e.target.matches("#add")) {
    addButton.classList.toggle("clicked");
    formCard.classList.toggle("closed");

  } else if (e.target.matches("#read")) {
    readButton.classList.toggle("clicked");
    readState = readState === "Not read" ? "Read" : "Not read";
  } else if (e.target.matches("#addLibrary")) {
    addBook();
  } else if (e.target.matches(".readButton")) {
    const selectedCard = e.target.parentNode.parentNode;
    const readTextCard =
      e.target.parentNode.parentNode.firstElementChild
        .lastElementChild;

    // find the index of the book and update the read variable of both object and html 
    const filteredBook = books.filter((book) => {
      return book.id === +selectedCard.dataset.number;
    });
    const bookIndex = books.indexOf(filteredBook[0]);
    if (bookIndex != -1) {
      books[bookIndex].read =
        books[bookIndex].read === "Not read" ? "Read" : "Not read";
      readTextCard.innerHTML = books[bookIndex].read;

      // add animation to the text
      readTextCard.classList.add("new-text");
      setTimeout(() => readTextCard.classList.remove("new-text"), 1000);
      
    }
  } else if (e.target.matches("#darkMode")) {
    document.documentElement.classList.toggle("dark");
    darkMode.classList.toggle("clicked");
    switchSound.play();
  }
});
