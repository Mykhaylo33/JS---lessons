const myInput = document.getElementById("myInput");

const myUL = document.getElementById("myUL");




// **3 Добавляє нову задачку
function addNewTask() {
  // * текст задачі
  const task = myInput.value.trim();
console.log(task);
// очищає інпут 
  myInput.value = "";
  // * Перевірка на пусту строку
  // *(Якщо текст задачі = пустій строці => Виводить alert, return - зупиняє виконання ф-ції)
  if (task === "") {
    alert("Введіть валідне значення ");
    return;
  }
  createLi(task);
}


// ** 4 Добавляє список задач і викликається у addNewTask
function createLi(text) {
  //* Створюємо ел.списку
  const liEl = document.createElement("li");
  // * Додаємо текст ел.списку
  liEl.textContent = text;

  myUL.appendChild(liEl);
  addCloseButton(liEl);
}


// ** 6 Додає або видаляє ел.списку
function handleTaskBehaviour({ target }) {
  console.log(target);
// додає фу-нал видалення статусу задачі.



  
}


// **5 Добавляє бтн видалення ел.списку .
function addCloseButton(target) {
  const span = document.createElement("span");
  const txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  target.appendChild(span);
}

export { addNewTask, handleTaskBehaviour };
