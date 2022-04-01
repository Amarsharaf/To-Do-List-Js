// Selectors
const input = document.querySelector(".todo-text")
const button = document.querySelector(".button")
const toDoList = document.querySelector(".todo-list")
const span = document.querySelector(".style")
// Event Listeners
button.addEventListener("click", addToDo)
toDoList.addEventListener("click", checkDelete)
// functions
function addToDo(e) {
    // stop submiting
    event.preventDefault()
    // Create ToDo Div
    const toDoDiv = document.createElement("div")
    if (input.value !== "") {

    toDoDiv.classList.add("tododiv")
    // create li
    const toDoItem = document.createElement("li")
    toDoItem.classList.add("toDoItem")
    toDoItem.innerText =input.value
    // append li to div
    toDoDiv.appendChild(toDoItem)
    // create complete button
    const completeBtn = document.createElement("button")
    completeBtn.innerHTML = '<i class="fa-solid fa-square-check "></i>'
    completeBtn.classList.add("complete")
    toDoDiv.appendChild(completeBtn)
    // create del button
    const delBtn = document.createElement("button")
    delBtn.innerHTML = '<i class="fa-solid fa-square-minus"></i>'
    delBtn.classList.add("del")
    toDoDiv.appendChild(delBtn)
    // append div to main ul 
    toDoList.appendChild(toDoDiv)
    // clear input
    input.value = ""
}
}

function checkDelete (e) {
// selct current target
const item = e.target
// delete button
if (item.classList[1] === "fa-square-minus") {
    const parentElement = item.parentElement.parentElement
    parentElement.classList.add("fall")
    parentElement.addEventListener("transitionend", function () {
        parentElement.remove()
    })
}
// complete button
if (item.classList[1] === "fa-square-check") {
    const parentElement = item.parentElement.previousElementSibling
    parentElement.classList.toggle("style")
}
}