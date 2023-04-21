
// create object constructor
// create form and connect to constructor
// connect delete button to also delete from memory

const books = [
  {
    title: "Street Coder",
    author: "Sedat Kapanoglu",
    pages: "314",
    read: "Not read",
    id: "1",
  },
  {
    title:
      "Code: The Hidden Language of Computer Hardware and Software",
    author: "Charles Petzold",
    pages: "393",
    read: "Read",
    id: "2",
  },
  {
    title: "Deep Work",
    author: "Cal Newport",
    pages: "304",
    read: "Read",
    id: "3",
  },
  {
    title: "Clean Code",
    author: "Robert Cecil Martin",
    pages: "464",
    read: "Not read",
    id: "4",
  },
  {
    title: "Pragmatic Programmer",
    author: "Andy Hunt and Dave Thomas",
    pages: "320",
    read: "Read",
    id: "5",
  },
];

function createHtml(html) {
  const template = document.createElement("template");

  template.innerHTML = html.trim();

  return template.content.firstElementChild;
}

function createCard(book) {
  const newCard = createHtml(`
<div
        data-number="${book.id}"
        class="bg-support p-6 shadow-xl rounded-lg h-full flex flex-col justify-between"
      >
        <div class="flex flex-col w-full h-full">
          <p class="font-bold text-2xl">
            ${book.title}
          </p>
          <p class="text-lg">by ${book.author}</p>
          <p class="mt-auto">Pages: ${book.pages}</p>
          <p class="read">${book.read}</p>

        </div>

        <div class="my-4 flex gap-4 justify-around">
          <span class="material-symbols-rounded big text-neutral">
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

function populateScreen(books) {
  books.forEach((book) => {
    document.getElementById("main").appendChild(createCard(book));
  });
}

populateScreen(books);

const addButton = document.querySelector("#add");
const readButton = document.querySelector('#read');

// listens document for event delegation
document.addEventListener("click", (e) => {
  e.preventDefault();
  if (e.target.matches(".delete")) {
    e.target.parentNode.parentNode.remove();
  }
  if (e.target.matches("#add")) {
    addButton.classList.toggle("clicked");
    document.getElementById("main").appendChild(createCard(books[0]));
  }
  if (e.target.matches("#read")) {
    readButton.classList.toggle("clicked");
  }
});
