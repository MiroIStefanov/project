"use sctrict";

//console.log('arr' + " - object"); // Връща arr - object
//console.log(4 + " - object");     // Връща 4 - object
//console.log(4 + + " - object"); // Връща NaN - not a number - не е число
//console.log(4 + + "5"); // Връща 9

//let incr = 10,
//    decr = 10;

//incr++;        // Връща 11 - запис тип postfix
//decr--;        // Връща 9 - запис тип postfix

//console.log(incr);
//console.log(decr);

//let incr = 10,
//    decr = 10;

//++incr;        // Връща 11 - друг вариант на записа с prefix 
//--decr;        // Връща 9 - друг вариант на записа с prefix 

//console.log(incr);
//console.log(decr);

//let incr = 10,
//    decr = 10;

//console.log(incr++);// Връща 10  - в началото връща старото значение
//console.log(decr--);// Връща 10  - в началото връща старото значение

//let incr = 10,
//    decr = 10;
//console.log(++incr);// Връща 11
//console.log(--decr);// Връща 9

//console.log(5%2); // Връща САМО остатъка от делението на двете числа

//console.log(2*4 == 8); // 2*4 равно ли е на 8? - в случая връща true защото 2*4=8
//console.log(2*4 == '8');// Същото като горното но 8 е записано като стринг и резултата пак е true
//console.log(2*4 === 8);// === това е строго сравнение в случая връща true
//console.log(2*4 === '8');// === това е строго сравнение в случая връща false

// && - Оператор логическо И (два пъти амперсант)
// || - Оператор логическо ИЛИ

//const isChecked = true,
//      isClose = true;

//console.log(isChecked && isClose); // Връща true

//const isChecked = true,
//        isClose = false;

//console.log(isChecked && isClose);// Връща false

//const isChecked = true,
//      isClose = false;

//console.log(isChecked || isClose);// Връща true

//const isChecked = false,
//      isClose = false;

//console.log(isChecked || isClose);// Връща false

// ! - знак за отрицание

// != - превежда се - не е равно

console.log(2 + 2 + 2 != 8);// В случая връща true защото 6 не е равно на 8
console.log(2 + 2 + 2 != '6');// В случая връща false защото 6 е стринг
console.log(2 + 2 + 2 !== '6');// В случая връща true

const isChecked = false,
      isClose = false;

console.log(isChecked || !isClose);// Връща true