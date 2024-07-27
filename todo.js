let inputs = document.getElementById("inp");
let text = document.querySelector(".text");

function Add() {
    if (inputs.value === "") {
        alert("Please Enter Task");
    } else {
        let newEle = document.createElement("ul");
        newEle.innerHTML = `<span>${inputs.value}</span><input type="checkbox" class="complete-btn"><i class="fa-solid fa-edit edit-btn"></i><i class="fa-solid fa-trash"></i>`;
        text.appendChild(newEle);
        inputs.value = "";
        newEle.querySelector(".fa-trash").addEventListener("click", remove);

        newEle.querySelector(".edit-btn").addEventListener("click", edit);

        newEle.querySelector(".complete-btn").addEventListener("click", complete);

        function remove() {
        newEle.remove();
        }

        function edit() {
            let taskSpan = newEle.querySelector("span");
            let editedValue = prompt("Edit your task:", taskSpan.textContent);
            if (editedValue != null) {
            taskSpan.textContent = editedValue;
            }
        }

        function complete() {
        newEle.classList.toggle("completed");
        }
    }
}


