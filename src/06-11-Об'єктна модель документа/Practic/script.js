// const container = document.querySelector("#container")
// const container = document.getElementById("container")


// const { doc } = require("prettier");

// console.log(container.childNodes)

//! ====================================================

//* 1. Створити список технологій що вивчаються на курсі Fullstack за допомогою js
// Показати як це робиться через **map** та **reduce**

const technologies = ["HTML", "CSS", "JavaScript", "React", "Node"];

/*
<ul>
    <li>HTML</li>
    <li>CSS</li>
    <li>JavaScript</li>
</ul>
*/

// const listEl = document.createElement("ul")

// for (const technology of technologies) {
//     // console.log("technology:", technology)
//     const liEl = document.createElement("li")
//     liEl.textContent = technology 
//     listEl.appendChild(liEl)
// }   


// document.body.appendChild(listEl)

//* ===== map =====

// const markup = `<ul>${technologies.map(technology => `<li>${technology}</li>`).join("")}</ul>`
// console.log(markup)

// document.body.insertAdjacentHTML("beforeend", markup)


//* ===== reduce =====

// const markup = `<ul>${technologies.reduce((acc, technology) => acc +=`<li>${technology}</li>`, "")}</ul>`
// console.log(markup)

// document.body.insertAdjacentHTML("beforeend", markup)


//* 2. Створити кілька кнопок на основі масива з обєктами використовуючи createElement

const colors = [
  {
    label: "red",
    color: "#FF0000",
  },
  {
    label: "green",
    color: "#00FF00",
  },
  {
    label: "blue",
    color: "#0000FF",
  },
  {
    label: "yellow",
    color: "#FFFF00",
  },
];

// colors.forEach(({label, color}) => {
//  const buttonEl = document.createElement("button")
// buttonEl.textContent = label
// buttonEl.style.backgroundColor = color
// // buttonEl.style.margin = "5px", 
// buttonEl.type = "button";
// buttonEl.className = "button";

// console.dir(buttonEl)

// document.body.appendChild(buttonEl)
// })


// Створення кнопок з кольорами та додавання їх до сторінки
colors.forEach(({ label, color }) => {
  const buttonEl = document.createElement("button");
  buttonEl.textContent = label;
  buttonEl.style.backgroundColor = color;
  buttonEl.type = "button";
  buttonEl.classList.add("button");

  document.body.appendChild(buttonEl);
});
// *Основні відмінності від попереднього коду полягають у використанні деструктуризації для отримання label та color без використання додаткової змінної, а також використанні функції forEach для ітерації по масиву colors та створенні кнопок з кольорами.