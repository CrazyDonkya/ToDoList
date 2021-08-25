const mainBlock = document.querySelector(".list-body");
const mainUl = document.querySelector(".list");
const textBox = document.querySelector(".add-text")
const mainListBody = document.querySelector(".main-list-body")
const importantCheckBox = document.querySelector(".important-box")
const deleteButton = document.querySelector(".delete-button")
const deleteAllButton = document.querySelector(".delete-all-button")
const completeButton = document.querySelector(".complete-button")
const saveButton = document.querySelector(".save-button")
const changeTextBox = document.querySelector(".change-text")
const savechangedTaskButton = document.querySelector(".safe-button")
const changeImportantCheckBox = document.querySelector(".important-change-box")
const sortButton = document.querySelector(".sort-button")
const sortByLenghtCheckBox = document.querySelector(".sort-lenght-change-box")
const sortByImportantCheckBox = document.querySelector(".sort-important-change-box")

function init() {
    saveTask()
    sortTask()
    deleteAllTasks()
}

function saveTask() {
    saveButton.addEventListener("click", () => {
        if (textBox.value != "") {
            const newLiElement = document.createElement("li")
            newLiElement.append(textBox.value)
            newLiElement.classList.add("new-Li")
            mainListBody.append(newLiElement)
            if (importantCheckBox.checked) {
                newLiElement.classList.add("important")
            }
            selectTask(newLiElement)
            deleteTask(newLiElement)
            completeTask(newLiElement)
            saveChangedTask(newLiElement)
        }
        textBox.value = ""
    })
}

function selectTask(newLiElement) {
    newLiElement.addEventListener("click", () =>{
        (newLiElement.classList.contains("selected")
        ? newLiElement.classList.remove("selected")
        : newLiElement.classList.add("selected"))
        })
}

function deleteTask(newLiElement) {
    deleteButton.addEventListener("click", () => {
        if (newLiElement.classList.contains("selected")) {
            newLiElement.remove()
        }
    })    
}

function deleteAllTasks() {
    deleteAllButton.addEventListener("click", () => {
        while (mainListBody.firstChild) {
            mainListBody.removeChild(mainListBody.firstChild)
        }
    })
}

function completeTask(newLiElement) {
    completeButton.addEventListener("click", () => {
        if (newLiElement.classList.contains("selected")) {
            (newLiElement.classList.contains("completed")) 
                ? newLiElement.classList.remove("completed") 
                : newLiElement.classList.add("completed")
        }
    })
}

function saveChangedTask(newLiElement) {
    savechangedTaskButton.addEventListener("click", () => {
        if (changeTextBox.value != "") {
            if (newLiElement.classList.contains("selected")) {
                newLiElement.innerHTML = changeTextBox.value
            }
        }
        if (newLiElement.classList.contains("selected")) {
            if (changeImportantCheckBox.checked) {
                newLiElement.classList.add("important")
            }
        }
    })
}


function sortTask(){
    sortButton.addEventListener("click", () => {
        let allNewLiElements = document.querySelectorAll(".new-Li")
        let lis = Array.from(allNewLiElements);
        if (sortByLenghtCheckBox.checked) {   
            lis.sort(function(a, b){
                return a.innerHTML.length - b.innerHTML.length
            });
            while (mainListBody.firstChild) {
                mainListBody.removeChild(mainListBody.firstChild)
            }
            for(let i = 0; i < lis.length; i++){
                    mainListBody.appendChild(lis[i]);
            }
        }
        if (sortByImportantCheckBox.checked) {
            console.log(lis)
            lis.sort(function(a, b) {
                return b.className.length - a.className.length
            })
            while (mainListBody.firstChild) {
                mainListBody.removeChild(mainListBody.firstChild)
            }
            console.log(lis)
            for(let i = 0; i < lis.length; i++){
                mainListBody.appendChild(lis[i]);
            }
        }
        })
}

init()