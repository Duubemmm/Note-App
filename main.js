const buttonElement = document.getElementById("button-element")
const notesContainer = document.querySelector(".notes-container")
let notes = document.querySelectorAll(".input-box");

function showNotes(){
     notesContainer.innerHTML = localStorage.getItem("notes");
 }
showNotes();

function updateStorage(){
    localStorage.setItem("notes", notesContainer.innerHTML);
}

buttonElement.addEventListener("click", addNote)
function addNote(){
    let inputBox = document.createElement("p");
    let img = document.createElement("img")
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable", "true")
    img.src = "Images/image copy.png"
    notesContainer.appendChild(inputBox).appendChild(img);
    }

notesContainer.addEventListener('click', deleteButton)

function deleteButton(e){
    if(e.target.tagName === "IMG"){
        e.target.parentElement.remove();
        updateStorage();
    }
    else if(e.target.tagName === "P"){
        notes = document.querySelectorAll(".input-box");
        notes.forEach(nt => {
            nt.onkeyup = function(){
                updateStorage();
            } 
        });
    }
}
document.addEventListener("keydown", event =>{
    if(event.key === "Enter"){
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
})

