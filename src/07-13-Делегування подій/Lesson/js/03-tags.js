/*
 * Делегування
 * - один из многих
 * - несколько из многих и Set
 */

const tagsContainer = document.querySelector('.js-tags');

// 2.Вішаємо слухача подій
tagsContainer.addEventListener('click', onTagsContainerClick);
// 3.Виносимо в окрему функцію
function onTagsContainerClick(evt) {
  // e , evt , even - елемент події

  if (evt.target.nodeName !== 'BUTTON') {
    return;
  }
  // Патерн «Раннє повернення» https://www.edu.goit.global/uk/learn/7349052/2294/2301/textbook

  const currentActiveBtn = document.querySelector('.tags__btn--active');
  console.log(currentActiveBtn);
  // 5.

  // console.log(evt.target);
  // evt.target - виводио в конрсоль цільвий елемент

  // 4.Добавляємо (активний) класс
  evt.target.classList.add('tags__btn--active');
}
