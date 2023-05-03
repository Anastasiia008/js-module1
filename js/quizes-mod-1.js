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