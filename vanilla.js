const inputTodo = document.createElement("input");
const inputButton = document.createElement("button");
const card = document.createElement("div");
const inputTitle = document.createElement("h2");
const container = document.createElement("div");
const itemList = document.createElement("div");

container.className = "container";
card.className = "card";
inputTitle.className = "title full-width";
inputTitle.textContent = "New Todo:";
inputTodo.className = "inputTodo";
inputButton.className = "addButton";
inputButton.textContent = "Add";
itemList.className = "itemList";

let itemEdit = "";
inputButton.addEventListener("click", () => {
  if (inputTodo.classList.contains("edit")) {
    if (inputTodo.value === "") {
      itemList.querySelector("#" + itemEdit).remove();
    } else {
      let item = itemList.querySelector("#" + itemEdit).children;
      item[0].textContent = inputTodo.value;
    }
    inputTodo.value = "";
    inputTodo.classList.remove("edit");
    inputTitle.textContent = "New Todo:";
    inputButton.textContent = "Add";
  } else {
    if (inputTodo.value !== "") {
      let itemCount = itemList.childNodes.length;
      const itemTitle = document.createElement("h2");
      const removeButton = document.createElement("button");
      const editButton = document.createElement("button");
      const itemTodo = document.createElement("div");
      itemTodo.className = "itemTodo";
      itemTodo.id = "item" + (itemCount + 1);
      editButton.className = "editButton bi bi-pencil";
      removeButton.className = "removeButton bi bi-trash";
      itemTitle.className = "title";

      itemTitle.textContent = inputTodo.value;
      removeButton.addEventListener("click", () => {
        removeButton.parentNode.remove();
      });
      editButton.addEventListener("click", (e) => {
        inputTodo.value = itemTitle.textContent;
        inputTodo.classList.add("edit");
        inputTitle.textContent = "Edit Todo:";
        inputButton.textContent = "Edit";
        itemEdit = itemTodo.id;
      });
      itemTodo.append(itemTitle, editButton, removeButton);
      itemList.append(itemTodo);
      inputTodo.value = "";
    }
  }
});

container.append(card);
container.append(itemList);
card.append(inputTitle, inputTodo, inputButton);
document.body.append(container);
