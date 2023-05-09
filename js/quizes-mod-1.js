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



// ---------------------------АВТОПЕРЕВІРКА-------------------------------------------
// №1  Оголоси дві змінні, productName для назви товару, і pricePerItem для зберігання ціни за штуку. При оголошенні надай змінним наступні значення:
// назва - рядок "Droid";
// ціна за штуку - число 2000.

// const productName = "Droid";
// const pricePerItem = 2000;


// №2 Ім'я товару змінили на "Repair droid" і збільшили його ціну на 1500 кредитів. Перевизнач значення змінних pricePerItem і productName після їх оголошення.

// let productName = "Droid";
// let pricePerItem = 2000;
// pricePerItem = pricePerItem+=1500;
// productName = "Repair droid";


// №3 Оголоси наступні змінні, використовуючи ключове слово const або let, і присвой їм відповідні значення.
// topSpeed - число 160.
// distance - число 617.54.
// login - рядок "mango935".
// isOnline - буль true.
// isAdmin - буль false.

// const topSpeed = 160;
// const distance = 617.54;
// const login = "mango935";
// const isOnline = true;
// const isAdmin = false;


// №4 Доповни код, присвоївши змінній totalPrice вираз для підрахунку загальної суми замовлення. Змінна pricePerItem зберігає ціну однієї одиниці товару, а orderedQuantity - кількість одиниць товару в замовленні.

// const pricePerItem = 3500;
// const orderedQuantity = 4;
// const totalPrice = pricePerItem * orderedQuantity;
// console.log (totalPrice);


// №5 Оголоси змінну message і запиши в неї повідомлення про покупку, рядок у форматі: "You picked <назва товару>, price per item is <ціна товару> credits". Де <назва товару> і <ціна товару> — це значення змінних productName і pricePerItem. Використовуй синтаксис шаблонних рядків.

// const productName = 'Droid';
// const pricePerItem = 3500;
// const message = `You picked ${productName}, price per item is ${pricePerItem} credits`;


// №6 Магазин з продажу ремонтних дроїдів готовий до відкриття, залишилося написати скрипт для їх замовлення. Оголоси змінні та присвой їм відповідні значення:
// pricePerDroid - ціна одного дроїда, значення 800
// orderedQuantity - кількість дроїдів у замовленні, значення 6
// deliveryFee - вартість доставки, значення 50
// totalPrice - загальна сума замовлення до сплати, не забудь про вартість доставки
// message - повідомлення про стан замовлення у форматі "You ordered droids worth <total price> credits. Delivery (<delivery fee> credits) is included in total price."

// const pricePerDroid = 800;
// const orderedQuantity = 6;
// const deliveryFee = 50;
// const totalPrice = pricePerDroid * orderedQuantity + deliveryFee;
// const message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`


// №7 Оголоси функцію sayHi, всередині якої додай console.log() з рядком "Hello, this is my first function!". Після оголошення виклич функцію sayHi.

// function sayHi() {
//     console.log("Hello, this is my first function!")
// }
// sayHi();


// №8 Функція add повинна вміти додавати три числа і виводити результат у консоль. Додай функції add три параметри: a, b і c, які будуть отримувати значення аргументів під час її виклику.
// Доповни console.log() таким чином, щоб він логував рядок "Addition result equals <result>", де <result> - це сума переданих чисел.

// function add(a, b, c) {
//     console.log( `Addition result equals ${a + b + c}`);
// }
// add(15, 27, 10);
// add(10, 20, 30);
// add(5, 10, 15);


// №9 Доповни код функції add таким чином, щоб вона повертала результат додавання значень трьох параметрів: a, b і c.

// function add(a, b, c) {
//     return a + b + c;
// }
// add(15, 27, 10);
// add(10, 20, 30);
// add(5, 10, 15);


// №10 Функція makeMessage(name, price) складає і повертає повідомлення про покупку. Вона оголошує два параметри, значення яких будуть задаватися під час її виклику.
// name - назва товару
// price - ціна товару
// Доповни код функції таким чином, щоб у змінну message записувався рядок "You picked <product name>, price per item is <product price> credits", де <product name> і <product price> - це значення параметрів name і price. Використовуй синтаксис шаблонних рядків.

// function makeMessage (name, price) {
//     const message = `You picked ${name}, price per item is ${price} credits`;
//     return message;
// };
// makeMessage('Radar', 6150);
// makeMessage('Scanner', 3500);
// makeMessage('Reactor', 8000);
// makeMessage('Engine', 4070);


// №11 Функція calculateTotalPrice рахує і повертає загальну суму покупки. Вона приймає два параметри, значення яких будуть задаватися під час її виклику.
// orderedQuantity - кількість одиниць товару в замовленні;
// pricePerItem - ціна однієї одиниці товару.
// Доповни код функції таким чином, щоб у змінну totalPrice записувалася загальна сума покупки - результат множення кількості товарів на ціну одного.

// function calculateTotalPrice (orderedQuantity, pricePerItem) {
//     const totalPrice = orderedQuantity * pricePerItem;
//     return totalPrice;
// };
// calculateTotalPrice(5, 100);
// calculateTotalPrice(8, 60);
// calculateTotalPrice(3, 400);
// calculateTotalPrice(1, 3500);
// calculateTotalPrice(12, 70);



// №12 Функція makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) складає і повертає повідомлення про покупку ремонтних дроїдів. Вона оголошує три параметри, значення яких будуть задаватися під час її виклику.
// orderedQuantity - кількість дроїдів у замовленні
// pricePerDroid - ціна одного дроїда
// deliveryFee - вартість доставки
// Доповни код функції таким чином, щоб вона повертала повідомлення про замовлення у форматі "You ordered droids worth <total price> credits. Delivery (<delivery fee> credits) is included in total price.". Не забудь про ціну доставки в обчисленнях загальної вартості.

// function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {
//     const totalPrice = orderedQuantity * pricePerDroid + deliveryFee;
//     return `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`;
// }
// makeOrderMessage(2, 100, 50);
// makeOrderMessage(4, 300, 100);
// makeOrderMessage(10, 70, 200);


// №13 Функція isAdult оголошує один параметр age (вік), значення якого буде задаватися під час її виклику. Присвой змінній passed вираз перевірки віку користувача на повноліття. Людина вважається повнолітньою у віці 18 років і старше.

// function isAdult(age) {
//     const passed = age >= 18;
//     return passed;
// }


// №14
// №15
// №16
// №17
// №18
// №19
// №20
// №21
// №22
// №23
// №24
// №25
// №26
// №27
// №28
// №29
// №30
// №31
// №32
// №33
// №34
// №35
// №36
