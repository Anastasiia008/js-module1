// СКРИПТ, КОТОРЫЙ ПРОСИТ ПОЛЬЗОВАТЕЛЯ ВВЕСТИ ЧИСЛО И СТЕПЕНЬ. ВОЗВОДИТ ЧИСЛО В СТЕПЕНЬ И ВЫВОДИТ РЕЗУЛЬТАТ
// // 1 - попроси ввести число и сохранить в переменную
// let base = prompt("Введите число");
// base = Number(base);
// // 2 - попроси ввести степень и сохранить в переменную
// let power = prompt("Введите  степень");
// power = Number(power);
// // 3 - возводим в степень и выводи результат
// const result = base ** power;
// console.log(result);


// СКРИПТ, КОТОРЫЙ РАНДОМНО ВЫБИРАЕТ ЦВЕТ ФОНА СТРАНИЦЫ
// const colors = ["black", "pink", "blue", "red", "yellow"];
// const max = colors.length - 1;
// const min = 0;
// const index = Math.round(Math.random() * (max-min) + min);
// const color = colors[index];
// console.log(color);
// document.body.style.backgroundColor = color;


// СКРИПТ, КОТОРЫЙ ВЫВЕДЕТ СТРОКУ "ГОСТЬ Х ПОСЕЛЯЕТСЯ В R НОМЕР Q"
// const firstName = "Tkachenko";
// const lastName = "Anastasiia";
// const room = 113;
// const type = "VIP";
// const welcomeMsg = ` Гость ${firstName} ${lastName} поселяется в ${type} номер ${room}`
// console.log(welcomeMsg);


// СКРИПТ, КОТОРЫЙ ПРОВЕРЯЕТ ВХОДИТ ЛИ ЧИСЛО В ОБОЗНАЧЕННЫЙ ОТРЕЗОК
// const x1 = 2;
// const x2 = 10;
// const number = 9;
// console.log(`Число ${number} попадает в отрезок до ${x1}`, number < x1);
// console.log(`Число ${number} попадает в отрезок от ${x1} до ${x2}`, x1 < number && number < x2);
// console.log(`Число ${number} попадает в отрезок от ${x2}`,  number > x2);



// СКРИПТ, КОТОРЫЙ ПРОВЕРЯЕТ ВОЗМОЖНОСТЬ ОТКРЫТЬ ЧАТ С ПОЛЬЗОВАТЕЛЕМ: ДРУГ + ОНЛАЙН + БЕЗ РЕЖИМА НЕ БЕСПОКОИТЬ
// const isFriend = true;
// const isOnline = true;
// const isDnd = false;
// const canOpenChat = isFriend && isOnline && !isDnd;
// console.log(`Можно начать чат?`,  canOpenChat);


// СКРИПТ, КОТОРЫЙ ПРОВЕРЯЕТ ПОДПИСКУ ПОЛЬЗОВАТЕЛЯ ПРИ ДОСТУПЕ К КОНТЕНТУ
// ТРИ ТИПА ПОДПИСКИ: FREE, PRO, VIP. ДОСТУП ТОЛЬКО PRO, VIP
// const user = "Vip";
// const normalized = user.toLowerCase();
// const canAccessContent = normalized === "pro" ||  normalized === "vip";
// console.log(`Могу просматривать контент?`,  canAccessContent);


// СКРИПТ, ДЛЯ ВЫБОРА ОПЦИИ ДОСТАВКИ ТОВАРА
// const option = 3;
// let delivery = "";
// switch(option) {
//         case 1:
//             delivery = "Вы можете забрать товар завтра с 12:00 в нашем офисе";
//             break;
//         case 2:
//             delivery = "Курьер доставит заказ завтра с 9:00 до 18:00";
//             break;
//         case 3:
//             delivery = "Посылка будет отправлена сегодня";
//             break;
//         default:
//             delivery = "Вами перезвонит менеджер";
//     }
//     console.log(delivery);



// // СКРИПТ, ДЛЯ ПОДСЧЕТА ЗП РАБОТНИКОВ
// // сделать вары
// const employees = 6;
// const min = 500;
// const max = 5000;
// let totalSalary = 0;
// //  перебрать работников в цикле
// for(let i = 1;  i <= employees; i += 1 ) {
// // сгенерить случайное зп
//     const salary = Math.round(Math.random() * (max-min) + min);
//     console.log ( `ЗП работника ${i} ${salary}`);
// //  прибавить к тоталу
//     totalSalary += salary;
// }
// // вывести
// console.log ( `ЗП`, totalSalary);



 // СКРИПТ, ДЛЯ ПОДСЧЕТА ВСЕХ ЧЕТНЫХ ЧИСЕЛ
// // сделать вары
// const min = 4;
// const max = 10;
// let total = 0;
// // перебрать числа в цикле
// for (let i = min; i <= max; i +=1) {
// // найти и сложить четніе числа
// if (i % 2 !== 0) {
//     console.log (`НЕЧЕТНОЕ`, i);
//     continue;
// }
//     total +=i;
// }
// //  вывести результат
// console.log (`Summ`, total)



// СКРИПТ, ОБРАБОТКИ ПОКУПКИ В МАГАЗИНЕ
// let balance = 200;
// const payment = 1000;

// console.log (`Общая стоимость заказа ${payment} кредитов. Проверяем кол-во доступных средств`);
// if (balance >= payment) {
//     balance -= payment;
//     console.log (`На счету осталось ${balance}`);
// } else {
//     console.log (`На счету недостаточно средств для проведения операции`);
// }
// console.log (`Операция завершена`);



// СКРИПТ, ПОДСЧЕТА СУММЫ ПОКУПКИ СО СКИДКРЙ В ЗАВИСИМОСТИ ОТ ПОТРАЧЕННОЙ СУММЫ ЗА ВСЕ ВРЕМЯ
// let totalSpent = 10000;
// let payment = 5000;
// let discount = 0;
// if (100 <= totalSpent && totalSpent  < 1000) {
//     console.log (`Бронзовый партнер, скидка 2%`);
//     discount = 0.02;
// } else if (1000 <= totalSpent && totalSpent  < 5000) {
//     console.log (`Серебряный партнер, скидка 5%`);
//     discount = 0.05;
// } else if (5000 <= totalSpent) {
//     console.log (`Золотой партнер, скидка 10%`);
//     discount = 0.1;
// } else {
//     console.log (`Cкидка 0%`);
// }
// payment -= payment * discount;
// console.log (`Оформляем заказ на сумму ${payment} со скидкой ${discount * 100} %`);
// totalSpent += payment;