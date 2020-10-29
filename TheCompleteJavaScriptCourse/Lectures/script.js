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
*/
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