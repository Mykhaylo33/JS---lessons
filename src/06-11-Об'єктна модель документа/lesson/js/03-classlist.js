const magicBtn = document.querySelector('.js-magic-btn');
/*
 * Интерфейс classList
 * - add(класс)
 * - remove(класс)
 * - toggle(класс)
 * - replace(старыйКласс, новыйКЛасс)
 * - contains(класс)
 */

// const navEll = document.querySelector('.site-nav')
// console.log(navEll)


const currentPageUrl = "/portfolio";

// *Пошутк елемента (portfolio ) і заміна його класу 
const linkEll = document.querySelector(`.site-nav__link[href="${currentPageUrl}"] `);


console.log(linkEll);

linkEll.classList.add('site-nav__link--current');