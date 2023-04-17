import { addNewTask, handleTaskBehaviour } from "./functions.js";

// ** 1 - Отримуємо доступ до елементів
const addBtn = document.getElementById("addBtn");
const myUL = document.getElementById("myUL");

// ** 2 - Обробник подій по кліку на кнопку
addBtn.addEventListener("click", addNewTask);

myUL.addEventListener("click", handleTaskBehaviour);
