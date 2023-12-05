const notesContainer = document.querySelector(".notes-container");

const createbtn = document.querySelector(".btn");
let notes = document.querySelector(".input-box");

createbtn.addEventListener("click", function () {
  let inputBox = document.createElement("p");
  let img = document.createElement("img");
  inputBox.className = "input-box";
  inputBox.setAttribute("contenteditable", "true");
  img.src = "images/delete.png";
  notesContainer.appendChild(inputBox).appendChild(img);
});

notesContainer.addEventListener("click", function (e) {
  if (e.target.tagName === "IMG") {
    e.target.parentElement.remove();
    updatedata();
  } else if (e.target.tagName === "P") {
    notes = document.querySelectorAll(".input-box");
    notes.forEach((nt) => {
      nt.onkeyup = function () {
        updatedata();
      };
    });
  }
});

function updatedata() {
  localStorage.setItem("notes", notesContainer.innerHTML);
}

function getdata() {
  notesContainer.innerHTML = localStorage.getItem("notes");
}

getdata();

document.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    document.execCommand("insertLineBreak");
    e.preventDefault();
  }
});
