/*
* === TASK ===
1. Створити модальне вікно яке буде відкриватися при кліку на кнопку всередині тега body. Модальне вікно має закриватися при кліку на напівпрозорий оверлей, та на іконку хрестика всередині модалки
2. Додати в модалку логіку закриття при натисканні на кнопку Escape
*/

// *1 Отримуємо посилання з якими працюємо
// const overlay = document.getElementById("overlay")
// const modalWindow = document.getElementById("modalWindow")
// const closeBtn = document.getElementById("closeBtn")
// const openBtn = document.getElementById("openBtn")
// Або
const refs = {
    overlay: document.getElementById("overlay"),
    modalWindow: document.getElementById("modalWindow"),
    closeBtn: document.getElementById("closeBtn"),
    openBtn: document.getElementById("openBtn"),
}
 
const classes = {
    openModal: "open-modal"
}

// *2 Вішаймо обробник подій який відкриває модалку
refs.openBtn.addEventListener("click", handleModal)


function handleModal(event){
    console.log(event)
 }
