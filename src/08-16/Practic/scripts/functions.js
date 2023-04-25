import {save, load} from "./storage.js"
// save("test", "helo")
const STORAGE_KEY = "tasks"

const myInput = document.getElementById("myInput");
const myUL = document.getElementById("myUL");

let currentId = 0



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
function createLi(text, isDone = false, id = currentId) {
  // Створюємо ел.списку
  const liEl = document.createElement("li");
  //  Додаємо текст ел.списку
  liEl.textContent = text;
  liEl.dataset.id = id
if (isDone) liEl.classList = "checked";
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
const currentState = load(STORAGE_KEY);
// додає фу-нал видалення статусу задачі.
if (target.nodeName === "LI") {
  // console.log("LI")
  target.classList.toggle("checked")
  const taskIndex = currentState.findIndex((task) => Number(task.id)  === Number(target.dataset.id))
  currentState[taskIndex].isDone = !currentState[taskIndex].isDone
} else if ( target.classList.contains("close")) {
  target.parentNode.remove()
  const taskIndex = currentState.findIndex((task) => Number(task.id)  === Number(target.parentNode.dataset.id))

  currentState.splice(taskIndex, 1)
} 
save(STORAGE_KEY, currentState)
}


function createTaskObj (text, isDone) {
  return{
    text,
    isDone,
    id: currentId,
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
currentId += 1;
}

// При завантаженні сторінки напрвнує список задачами , якщо такі є 
function fillTasksLists() {
  // отримує задачі в lockal Storage 
  const currentState = load(STORAGE_KEY)
if (currentState !== undefined ){
  currentState.forEach(({text, isDone, id}) =>
   createLi(text, isDone, id))
   currentId = id +1
  //  або
// currentId = currentState.length === 0 ? 0 
// :currentState[currentState.length -1].id +1 
}
}

export { addNewTask, handleTaskBehaviour, fillTasksLists};
