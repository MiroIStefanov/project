"use strict";

/*
// Data types Lesson

// let javascriptIsFun = true;
// console.log(javascriptIsFun);

// console.log(typeof true);
// console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof 'Jonas');

//

// Демонстрация на dynamic typing
let javascriptIsFun = true;

console.log(javascriptIsFun);
console.log(typeof javascriptIsFun);

javascriptIsFun = "YES";
console.log(typeof javascriptIsFun);

//

let year;// Undefined varieble
console.log(year);
console.log(typeof year);

year = 1991;// Дефиниране на вече съществуващата променлива чрез dynamic typing
console.log(typeof year);


// Демонстарция на вграден бъг в javascript

console.log(typeof null);// Връща object  което не е вярно


// let const and var lecture

let age = 30;
age = 31;// присвояването на нова стойност при вече същестествуваща такава се нарича се МУТИРАНЕ
const birthYear = 1990;
// birthYear = 1991;// Зщото е декларирана като константа не може да мутира и дава грешка
// const job;// Дава грешка. Константата трябва винаги да е дефинирана
var job = 'programmer';// var е стара ключова дума преди ES6
job = 'teacher';// var работи подобно на let - може да мутира

// Basic operatore lesson

// Math operators
// const ageJonas = 2037 - 1991;
// const ageSarah = 2037 - 2018;
// console.log(ageJonas, ageSarah);

const now = 2037;// Демонстрация на често повтаряща се константа(по-добрия запис на горния код)
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);// 2 ** 3 - означава 2 на степен 3та

const firstName = 'Jonas';
const lastName = 'Schmedtmann';
console.log(firstName + lastName);// чреа оператора + могат да се събират и стрингове като двата стринга се събират без интервал между тях
console.log(firstName + ' ' + lastName);// поставяне на интервал между стринговете но не е добър начин за това

// Assignment operators
let x = 10 + 5;//15
x += 10;// означава x = x + 10 = 25
x *= 4;// Означава x = x * 4 = 100
x++;// означава x = x + 1 = 101
x--;// обратното на x++
x--;
console.log(x);

// Comparison operators
console.log(ageJonas > ageSarah);// >, <, <=, >=
// връща булев тип thrue или false. Използва се когато трябва да вземаме решения чрез кода 
console.log(ageSarah >= 18);// true

const isFullAge = ageSarah >= 18;// запазване на резултата в променлива

console.log(now - 1991 > now - 2018);// първо се извършва математическото пресмятане после сравнението(>)

const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);
// Операторите имат посока на действие. В долния запис посоката на изпълнение е от ляво на дясно, т.е. резултата е 10
console.log(25 - 10 - 5);

let x, y;
x = y = 25 - 10 - 5;// Изпълнение от дясно наляво x = y = 10, x = 10 свирзано е и със приоритета на изпълнение на операторите
console.log(x, y);

// const averageAge = ageJonas + ageSarah / 2;// Поради приоритета на операторите този запис не е верен и резултата също е неверен(55.5)
const averageAge = (ageJonas + ageSarah) / 2;// Верен запис
console.log(ageJonas, ageSarah, averageAge);

const firstName = 'Jonas';
const job = 'teacher';
const birthYear = '1991';
const year = 2037;

const jonas = "I'm " + firstName + ', a ' + (year - birthYear) + ' year old ' + job +'!';//(year-birthYear)е число което се конвертира в стринг при този тип запис
console.log(jonas);

//Templete literals

const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(jonasNew);// Този запис е по-добър и по-кратък. Това е Templete literal
console.log(`Just a regular string...`);

console.log('String with\n\
multiple\n\
lines');// Това е стария начин на записване стринг на няколко реда, преди EX6, който всъщност е бъг но работи!:)

console.log(`Sting
multiple
lines`);// Това е новия и правилен начин

// Taking decition_if_else_statements

const age = 15;

if(age >= 18) {
    console.log(`Sarah can start driving license.`);
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is too yung. Waith another ${yearsLeft} years:)`);
}
// if_else - работи с булев тип данни

const birthYear = 1998;

let century;
if(birthYear <= 2000) {
     century = 20;
} else {
     century = 21;
}
console.log(century);

// Type Conversion and Coercion

// type conversion
const inputYear = '1991';
console.log(Number(inputYear), inputYear);// Конвертиране на стринг в число с функция Number. Важи само за реда в който е записано
console.log(inputYear + 18);

console.log(Number('Jonas'));// Връща NaN - not a number - което всъщност е invalid number(в конзолата пише че е number)
console.log(typeof NaN);

console.log(String(123), 123);// Конвертиране на стринг в число с функция String

// type coercion
console.log('I am ' + 123 + ' years old');// дава стринг 'I am 23 years old'. тук има automatic type coercion защото 23 е число но накрая връща стринг. Става с оператора +
//console.log('I am ' + String(123) + ' years old');// Ръчно конверетиране
console.log('123' - '20' - 3);// autamatic type coercion на стринг в число. Става с оператора -
console.log('123' + '20' + 3);// връща стринг '123203'
console.log('123' * '2');// Връща число 246
console.log('123' / '2');// връща число 61.5
console.log('23' > '18');// Връща true(не във всички случаи)

let n = '1' + 1;// 11
n = n - 1;// 11 - 1
console.log(n);// връща числото 10

console.log(2 + 3 + 4 + '5');// връща стринг 95

console.log('10' - '4' - '3' - '2' + '5');// връща стринг 15

// Truthly and Falsy Value converted to Boolean

//5 falsy value: 0, '', undefined, NaN, null - this is all falsy in js
// All others by Truthly

console.log(Boolean(0));// false
console.log(Boolean(undefined));// false
console.log(Boolean('Jonas'));// true
console.log(Boolean({}));// true
console.log(Boolean(''));// false
console.log(Boolean(NaN));// fales
console.log(Boolean(null));// false
// Демонстрация 
const money = 0;
if(money) {
    console.log(`Dont't spend it all ;)`);
} else {
    console.log(`You shouls get a job!`);
}
// Демонстрация 2
let height;
if(height) {
    console.log(`YAY! Height is defined`);
} else {
    console.log(`Height is UNDEFINED!`);
}

// LECTURE 022 Equality Operators_ == vs. ===


// operator === is а strict equality operator

const age = 18;
if(age === 18) console.log(`You just became an adult :D (strict)`);// връща true
if(age == 18) console.log(`You just became an adult :D (loose)`);

// operator == is type coercion operator

if(`18` == 18) console.log(`You just became an adult :D`);// връща true because have type coercion here

const ageTwo = `18`;
if(ageTwo === 18) console.log(`You just became an adult :D (strict)`);// не отговаряна условието
if(ageTwo == 18) console.log(`You just became an adult :D (loose)`);// връща true becouse have coercion here
// !!! strong sugestion - when comparing values always use strict equality ===

const favorite = prompt ("What's your favorite number?");// подаваме число 123
console.log(favorite);// връща стринг '123'
console.log(typeof favorite);// показва че е стринг
if (favorite == 123) {// '123' = 123 - true
    console.log(`Cool! 123 is an amazing number!`);// работи(true) заради == защото има коерция
}
if (favorite === 123) {// '123' = 123 - false
    console.log(`Cool! 123 is an amazing numberr!`);// неработи(false) защото няма коерция и favorite  е стринг
}
 
const favorite2 = Number(prompt("What's is yours favorite number"));// prompt function
if (favorite == 123) {// 123 = 123 - true
    console.log(`Coll! 123 is an amazing numbeR!`);
}
if (favorite2 === 123) {// 123 = 123 - true
    console.log(`Coll! 123 is an amazing numbeRR`);
} 

const favorite3 = Number(prompt("what's your favorite number"));
if (favorite3 === 123) {
    console.log(`Cool! 123 is an amaizing number!`);
} else if (favorite3 === 7) {
    console.log(`7 is also a cool number`);
} else if (favorite3 === 9) {
    console.log(`9 is also a coll number`);
} else {
    console.log(`Number is not 123 or 7 or 9`);
}

// оператор !== означава 'различен от'
// !=  -  loose версия, !== strict версия.  строго се препоръчва използването на srict версията
const favorite4 = Number(prompt("What's yours favorite number"));
if (favorite4 !== 123) console.log(`Why not 123`);
*/

// Boolean Logic operators
//Operators - И - &&, OR - ИЛИ ||, НЕ - NOT - !
const hasDriverLicence = true;// A
const hasGoodVision = true;// B
       //       A - true     И     B - true    
console.log(hasDriverLicence && hasGoodVision);// връща true
       //       A - true     ИЛИ     B - true
console.log(hasDriverLicence || hasGoodVision);// връща true
       //  NOT   A - true     
console.log(!hasDriverLicence);// връща false

if (hasDriverLicence && hasGoodVision) {
    console.log(`Sarah is able to drive!`);
} else {
    console.log(`Someone else should drive...`);
}


const hasDriverLicence1 = true;// A
const hasGoodVision1 = false;// B
       //       A - true     И     B - false    
console.log(hasDriverLicence1 && hasGoodVision1);// връща false
       //       A - true     ИЛИ     B - false
console.log(hasDriverLicence1 || hasGoodVision1);// връща true
       //  NOT   A - true     
console.log(!hasDriverLicence1);// връща false

if (hasDriverLicence1 && hasGoodVision1) {
    console.log(`Sarah is able to drive!`);
} else {
    console.log(`Someone else should drive...`);
}


const hasDriverLicence2 = false;// A
const hasGoodVision2 = false;// B
       //       A - false     И     B - false    
console.log(hasDriverLicence2 && hasGoodVision2);// връща false
       //       A - false    ИЛИ     B - false
console.log(hasDriverLicence2 || hasGoodVision2);// връща false
       //  NOT   A - false     
console.log(!hasDriverLicence2);// връща true

if (hasDriverLicence2 && hasGoodVision2) {
    console.log(`Sarah is able to drive!`);
} else {
    console.log(`Someone else should drive...`);
}