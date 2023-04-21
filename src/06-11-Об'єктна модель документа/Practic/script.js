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

const markup = `<ul>${technologies.reduce((acc, technology) => acc +=`<li>${technology}</li>`, "")}</ul>`
console.log(markup)

document.body.insertAdjacentHTML("beforeend", markup)
