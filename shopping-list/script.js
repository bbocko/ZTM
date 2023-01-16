let addButton = document.getElementById("addButton");
let input = document.getElementById("inputField");
let list = document.querySelector("ul");

function inputLength() {
    return input.value.length;
}

function createListElemet() {
    let li = document.createElement("li");
    let removeButton = document.createElement("button");
    li.appendChild(document.createTextNode(input.value));
    removeButton.appendChild(document.createTextNode("X"));
    list.appendChild(li);
    li.appendChild(removeButton);
    input.value = "";
    li.addEventListener("click", function (event) {
        if (li !== event.target) return;
        li.classList.toggle("done");
    });
    removeButton.addEventListener("click", function () {
        list.removeChild(li);
    });
}

function addListAfterClick() {
    if (inputLength() > 0) {
        createListElemet();
    }
}

function addListAfterKeypress(event) {
    if (inputLength() > 0 && event.which === 13) {
        createListElemet();
    }
}

addButton.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);
