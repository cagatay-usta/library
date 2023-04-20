let book = {
    title: "Street Coder",
    author: "ssg",
    pages: "314",
    read: "Not read"
}


function createCard(html) {
    const template = document.createElement("template");

    template.innerHTML = html.trim();

    return template.content.firstElementChild;
}

function getCard() {
const newCard = createCard(`
<div
        id="card"
        class="bg-support p-6 shadow-xl rounded-lg h-full flex flex-col justify-between"
      >
        <div class="flex flex-col w-full h-full">
          <p id="title" class="font-bold text-2xl">
            ${book.title}
          </p>
          <p id="author" class="text-lg">by ${book.author}</p>
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

let deleteButton = document.querySelectorAll('.delete');
const add = document.getElementById('add');

add.addEventListener('click', () => {
    document.getElementById('main').appendChild(getCard());
})



// try listening the document and use e.target to decide between buttons
deleteButton.forEach((button) => {
    button.addEventListener('click', () => {
        button.parentNode.parentNode.remove();
    })
})

console.log(deleteButton);
