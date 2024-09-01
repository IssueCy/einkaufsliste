let inputField = document.getElementById('inputField');
let container = document.getElementById('empty-section');

function addItem() {
    let input = inputField.value.trim();

    if (input === "") {
        return;
    }

    let itemDiv = document.createElement('div');
    itemDiv.classList.add('item');

    let itemText = document.createElement('span');
    itemText.textContent = input;

    let deleteIcon = document.createElement('img');
    deleteIcon.src = 'img/trash.png'; 
    deleteIcon.alt = 'Delete Item';

    deleteIcon.addEventListener('click', function() {
        container.removeChild(itemDiv);
    });

    itemDiv.appendChild(itemText);
    itemDiv.appendChild(deleteIcon);

    container.appendChild(itemDiv);

    inputField.value = "";

    console.log(`${input} has been added`);
}

function resetItems() {
    container.innerHTML = "";
    inputField.value = "";
    console.log('All items have been deleted');
}
