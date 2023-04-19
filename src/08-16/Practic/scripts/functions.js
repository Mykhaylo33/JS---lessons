import {save, load} from "./storage.js"
// save("tast", "helo")
const STORAGE_KEY = "tasks"

const myInput = document.getElementById("myInput");

const myUL = document.getElementById("myUL");




// *!3 Добавляє нову задачку
function addNewTask() {
  // * текст задачі
  const task = myInput.value.trim();
// console.log(task);
// очищає інпут 
  myInput.value = "";
  //  Перевірка на пусту строку
  // (Якщо текст задачі = пустій строці => Виводить alert, return - зупиняє виконання ф-ції)
  if (task === "") {
    alert("Введіть валідне значення ");
    return;
  }
  createLi(task);
  addTaskToStorage(task)
}


//  !4 Добавляє список задач і викликається у addNewTask
function createLi(text) {
  // Створюємо ел.списку
  const liEl = document.createElement("li");
  //  Додаємо текст ел.списку
  liEl.textContent = text;

  myUL.appendChild(liEl);
  addCloseButton(liEl);
}


// !5 Добавляє бтн видалення ел.списку .
function addCloseButton(target) {
  const span = document.createElement("span");
  const txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  target.appendChild(span);
}

// *! 6 Додає або видаляє ел.списку
function handleTaskBehaviour({ target }) {
  // console.log(target);
// додає фу-нал видалення статусу задачі.
if (target.nodeName === "LI") {
  // console.log("LI")
  target.classList.toggle("checked")
} else if ( target.classList.contains("close")) {
  target.parentNode.remove()
} 
}

function createTaskObj (text, isDone) {
  return{
    text,
    isDone,
    id: 0,
  }
}

function addTaskToStorage(text, isDone = false) {
  const currentState = load(STORAGE_KEY)
  if (currentState === undefined){
  // Створюємо масив і додаємо перший обєкт задачі
  const arr = [createTaskObj(text, isDone)]
console.log(arr)
save(STORAGE_KEY, arr)
}else{
// До існуючого масиву додати новий обєкт задачі
  // const currentState = load(STORAGE_KEY)
  currentState.push(createTaskObj (text, isDone))
  save(STORAGE_KEY, currentState)

}
}



export { addNewTask, handleTaskBehaviour };
