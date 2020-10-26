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
*/

// let const and var lecture

let age = 30;
age = 31;// присвояването на нова стойност при вече същестествуваща такава се нарича се МУТИРАНЕ
const birthYear = 1990;
// birthYear = 1991;// Зщото е декларирана като константа не може да мутира и дава грешка
// const job;// Дава грешка. Константата трябва винаги да е дефинирана
var job = 'programmer';// var е стара ключова дума преди ES6
job = 'teacher';// var работи подобно на let - може да мутира
