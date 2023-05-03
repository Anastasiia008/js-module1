// const age = 10;
//         const - переменная; 
//         age - имя переменной (англ);   
//         = 10 - операция присвоения.



// console.log();
//         console - объект;
//         .log - метод;
//         () - вызов метода.



// ОПРЕДЕЛЯЕТ ТИП ДАННЫХ (typeof)
// const type = typeof 54;
// console.log(type);

//=============================РАБОТА С ЧИСЛАМИ=====================

// ПОПРОСИТЬ ПОЛЬЗОВАТЕЛЯ ПОДТВЕРДИТЬ ЧТО-ТО (выводит true/false)
// const shouldRenew = confirm("Хотите продлить подписку?");
// console.log(shouldRenew);



// ВЫВЕСТИ ЦЕЛОЕ ЧИСЛО (parseInt)
// let elementWidth = "50 px";
// elementWidth = Number.parseInt(elementWidth);
// console.log(elementWidth);



// ВЫВЕСТИ ДЕСЯТИЧНОЕ ЧИСЛО (parseFloat)
// let elementHeight = "200.74px";
// elementHeight = Number.parseFloat(elementHeight);
// console.log(elementHeight)



// ОТСЕЧЬ ДЕСЯТЫЕ ЧАСТИ ЧИСЛА (toFixed)
// let salary = 1300.4354365;
// salary = Number(salary.toFixed(2));
// console.log (salary);



// ВОЗВЕДЕНИЕ В СТЕПЕНЬ (pow  **)
// console.log(Math);
// const base = 2;
// const power = 5;
// const result = Math.pow(base, power);
// console.log(result);
// console.log(2 ** 5);



// ГЕНЕРИРУЕМ ПСЕВДОСЛУЧАЙНОЕ ЧИСЛО (random)
// Math.random() * (max - min) + min;
// const max = 50;
// const min = 30;
// const result = Math.random() * (max-min) + min;
// console.log(result);



// ОКРУГЛЯЕМ ЧИСЛО (round)
// Math.round(5.866);
// const number = 4.6788;
// const result = Math.round(number);
// console.log(result);


//=============================РАБОТА СО СТРОКАМИ=====================

// ПОПРОСИТЬ ПОЛЬЗОВАТЕЛЯ ВВЕСТИ ЧТО-ТО (выводит строку)
// let quantity = prompt("Введите количество товара");
// quantity = Number(quantity);
// console.log(quantity);



// ДЛИНА СТРОКИ (свойство length)
// const message = "Улыбайся чаще!";
// console.log(message.length);



// КОНКАТЕНАЦИЯ СТРОК (+)
// const firstName = "Tkachenko";
// const lastName = "Anastasiia";
// const fullName = firstName + " " + lastName;
// console.log(fullName);



// ШАБЛОННЫЕ СТРОКИ (` ${} `)
// const quantity = 9;
// const orderMSG = ` Вы заказали ${quantity} книг`;
// console.log(orderMSG);



// НОРМАЛИЗАЦИЯ СТРОК (toLowerCase())
// const brand = "Samsung";
// const normalized = brand.toLowerCase();
// console.log(normalized);



// ВЫБОРКА  (slice()) - возвращает значение с индекса, который указали
// const brand = "SAMSUNG";
// console.log(brand[4]);
// console.log(brand.slice(3));



// ПОИСК В СТРОКЕ (метод includes())    (выводит true/false)
// const blackList1 = "спам";
// const blackList2 = "распродажа";

// const string1 = "Привет, это не спам, прочти до конца!";
// const string2 = "Самая большая РАСПРОДАЖА только сегодня!";
// const string3 = "Реклама по выгодной цене!";
// console.log(string1.toLowerCase().includes(blackList1));
// console.log(string1.toLowerCase().includes(blackList2));

// console.log(string2.toLowerCase().includes(blackList1));
// console.log(string2.toLowerCase().includes(blackList2));

// console.log(string3.toLowerCase().includes(blackList1));
// console.log(string3.toLowerCase().includes(blackList2));



//=============================БУЛЬ=====================
// Операнды при сравнении всегда приводятся к числу
// console.log(true > 5);
// console.log("10" > 5);


// Когда хотим сравнить используем только строгое равенство (===), или неравенство (!==)

// ПРЕОБРАЗОВАНИЕ К БУЛЮ (Boolean())
// console.log(Boolean(0));
// console.log(Boolean("ddfcd"));
// console.log(Boolean(null));
// console.log(Boolean(undefined));
// console.log(Boolean(""));
// console.log(Boolean(false));


// ЛОГИЧЕСКИЙ ОПЕРАТОР (И &&)  - если находит FALSE, то возвращает его, если нет, то последнее значение
// console.log( 9 && 12 && 1);
// console.log( 9 && 0 && 1);



// ЛОГИЧЕСКИЙ ОПЕРАТОР (ИЛИ ||)  - если находит TRUE, то возвращает его, если нет, то последнее значение
// console.log( 9 || 12 || 1);
// console.log( 0 || 0 || 1);
// console.log( 0 || 0 || false);



// ЛОГИЧЕСКИЙ ОПЕРАТОР (НЕ )  - меняет все местами
// console.log( !0); - true
// console.log( !10); - false



// ОПЕРАТОР ВЕТВЛЕНИЯ (  if(truе) - выполняем      if(false) - нет ))
// if( 5 > 3 ) {
//     console.log(`Выполняем код если в круглых скобках правда`);
// }
// console.log(`Дальше`);




// ОПЕРАТОР ВЕТВЛЕНИЯ (if......else)
// if (5>30) {
//     console.log(`Выполняем код если в круглых скобках правда`);
// } else {
//     console.log(`Выполняем код если в круглых скобках ложь`);
// }



// ОПЕРАТОР ВЕТВЛЕНИЯ (else...if)
// const salary = 1000;
// if (salary < 500) {
//     console.log(`Мизерная зп`);
// } else if (salary > 500 && salary <= 5000) {
//     console.log(`Маленькаяя зп`);
//     } else if (salary > 5000 && salary <= 10000) {
//         console.log(`Средняя зп`);
//     } else if (salary > 10000 && salary <= 20000) {
//         console.log(`Нормальная зп`);
//     } else {
//         console.log(`Достаточная зп`);
//     }



// ТЕРНАРНЫЙ ОПЕРАТОР - запись переменной по условию!!!
// const message = условие ? выражение1 : выражение2;
// const balance = -100;
// const message = balance >= 0 ? "Позитивный баланс" : "Негативный баланс";
// console.log(message);