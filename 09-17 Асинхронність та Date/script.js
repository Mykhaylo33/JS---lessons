// // Написати таймер зворотнього відліку до Нового року який можна зупиняти при кліку на кнопку **Stop**


//  const refs = {
//     timer : document.getElementById("timer"),
//     stopBtn : document.getElementById("stopBtn"),
//  };

// //  1. створимо дату наступного Нового року, до якого будемо рахувати час
// const countDownDate = new Date(`Jan 1 , ${new Date().getFullYear() + 1}`);
// console.log(countDownDate)

// // 2. отримати поточну дату


// // 3. від дати Нового року відняти поточну дату, таким чином ми отримаємо кількість мілісекунд, яка лишилась до Нового року
// // 4. З нашої різниці витягнути дні, години, хвилини і секунди
// // 5. Показати результат на екрані
// // 6. Запустити сет інтервал, який буде оновлювати час кожну секунду


const date = new Date("March 16, 2030 14:25:00");

date.toString();
// "Sat Mar 16 2030 14:25:00 GMT+0200 (Eastern European Standard Time)"

date.toTimeString();
// "14:25:00 GMT+0200 (Eastern European Standard Time)"

date.toLocaleTimeString();
// "2:25:00 PM"

date.toUTCString();
// "Sat, 16 Mar 2030 12:25:00 GMT"

date.toDateString();
// "Sat Mar 16 2030"

date.toISOString();
// "2030-03-16T12:25:00.000Z"

date.toLocaleString();
// "3/16/2030, 2:25:00 PM"

date.getTime();
// 1899894300000