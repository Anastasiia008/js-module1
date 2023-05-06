//=============================SWITCH=====================

// SWITCH - если одна переменная, сравниваю значение на равенство!
// Cкрипт, для выбора стоимости отлея по кол-ву звезд: 
// 1 - 20$; 2 - 30$; 3 - 40$; 4 - 70$; 5 - 120$


//  (IF)
// const stars = 9;
// let price;
// if (stars === 1) {
//     price = 20;
//     } else if (stars === 2) {
//         price = 30;}
//         else if (stars === 3) {
//             price = 40;
//         }
//         else if (stars === 4) {
//             price = 70;
//         }
//         else if (stars === 5) {
//             price = 120;
//         }
//         else {
//             console.log("Такого кол-ва звезд нет")
//         }
//         console.log(price);


// (SWITCH)
// const stars = 0;
// let price;
// switch(stars) {
//     case 1:
//         price = 20;
//         break;
//     case 2:
//         price = 30;
//         break;
//     case 3:
//         price = 40;
//         break;
//     case 4:
//         price = 70;
//         break;
//     case 5:
//         price = 120;
//         break;

//     default:
//         console.log("Такого кол-ва звезд нет")
// }
// console.log(price);




// ЦИКЛ FOR - позволяет повторять один и тот же кусочек кода с минимальными изменениями

// for (инициализация - начальное значение; условие - проганять цикл пока условие верно; пост - віражение - то, что делаем после каждого прогона) {
//     тело цикла
// }

// for (let i = 9; i < 30; i +=1) {
//     console.log (i);
// }