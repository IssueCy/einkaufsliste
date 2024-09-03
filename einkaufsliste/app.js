let inputField = document.getElementById("inputField");
let container = document.getElementById("empty-section");

window.onload = function () {
  loadItems();
};

function loadItems() {
  let items = JSON.parse(localStorage.getItem("items")) || [];
  items.forEach((item) => {
    createItemElement(item);
  });
}

function saveItems(items) {
  localStorage.setItem("items", JSON.stringify(items));
}

function createItemElement(input) {
  let itemDiv = document.createElement("div");
  itemDiv.classList.add("item");

  let itemText = document.createElement("span");
  itemText.textContent = input;

  let deleteIcon = document.createElement("img");
  deleteIcon.src = "img/trash.png";
  deleteIcon.alt = "Delete Item";

  deleteIcon.addEventListener("click", function () {
    container.removeChild(itemDiv);
    deleteItem(input);
  });

  itemDiv.appendChild(itemText);
  itemDiv.appendChild(deleteIcon);

  container.appendChild(itemDiv);
}

function addItem() {
  let input = inputField.value.trim();

  if (input === "") {
    return;
  }

  createItemElement(input);
  
  let items = JSON.parse(localStorage.getItem("items")) || [];
  items.push(input);
  saveItems(items);

  inputField.value = "";
  console.log(`${input} has been added`);
}

function deleteItem(input) {
  let items = JSON.parse(localStorage.getItem("items")) || [];
  items = items.filter((item) => item !== input);
  saveItems(items);
  console.log(`${input} has been deleted`);
}

function resetItems() {
  container.innerHTML = "";
  inputField.value = "";

  localStorage.removeItem("items");
  console.log("All items have been deleted");
}
