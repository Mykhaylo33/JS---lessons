const myInput = document.getElementById("myInput");

const myUL = document.getElementById("myUL");

function addCloseBtn(target) {
  const span = document.createElement("span");
  const txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  target.appendChild(span);
}

function addNewTask() {
  const task = myInput.value.trim();
  // console.log(task);
  myInput.value = "";

  if (task === "") {
    alert("Введіть валідне значення ");
    return;
  }
  createLi(task);
}

function createLi(text) {
  const liEl = document.createElement("li");
  liEl.textContent = text;

  myUL.appendChild(liEl);
  addCloseBtn(liEl);
}

function handleTaskBehaviour({ target }) {
  console.log(target);
}

export { addNewTask, handleTaskBehaviour };
