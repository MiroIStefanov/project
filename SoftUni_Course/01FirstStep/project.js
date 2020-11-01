'use strict';

// код е judge #1
function hello () {
    console.log(`Hello World!`);
}
hello ();// извква Hello World! в конзолата


// код в judge #2
function numsFrom1to10 () {
    console.log(1);
    console.log(2);
    console.log(3);
    console.log(4);
    console.log(5);
    console.log(6);
    console.log(7);
    console.log(8);
    console.log(9);
    console.log(10);
}
numsFrom1to10 ();// стартира тялото на функцията т.е. командите console.log('...');
// всяка камнда console.log("...."); печата написаното в нея всеки път на нов ред 


// входни данни 
function displayVariable () {
 // тип // име     // стойност на променливата   
    let password = 'jndfd%#12k';
    console.log(password);
    console.log(typeof password);// връща какъв тип е променливата
}
displayVariable ();


function takeInfo (person) {
    console.log(person);// връща Ivo123
}
takeInfo ('Ivo123');


function solve (age) {
    let ivosAge = age;
    console.log(ivosAge);// връща 27 обаче стринг
    console.log(ivosAge + 1);// връща 271  стринг
    console.log(typeof ivosAge);
}
solve ('27');


// преобразуване на стринг в число
function solve2 (age2) {
    let ivosAge2 = Number(age2);
    console.log(ivosAge2 + 1);// връща 28 
    console.log(typeof ivosAge2);// тип number
}
solve2 ('27');


// аритметични операции
function solve3 () {
     let firsNumber = 7;
     let secondNumber = 3;

     console.log(firsNumber * secondNumber);
}
solve3 ();


// модул/остатък от целочислено делене
function solve4 () {
    let numFirst = 5;
    let numSecond = 2;

    console.log(numFirst % numSecond);// връща само остатъка а не числото от деленето

    let firstWord = 'Hello';
    let secondWord = ' :)';
    let thirdWord = 5;
    console.log(firstWord + secondWord);// връща Hello :) Два стринфа може само да се събират
    console.log(firstWord + secondWord + thirdWord);// връща Hello :)5
}
solve4();


// създаване на placeHolder
function solve5 (firstName, lastName) {
    let age = 20;

    console.log(`Hello my name is ${firstName} ${lastName} im ${age}`);// шаблон с placeHolders - placeHolder - ${....}
}
solve5('Petar', 'Petrov');


