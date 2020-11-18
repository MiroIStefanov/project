"use strict";

// Видове сравнявания
function demo () {
    const a = 5;
    const b = '5';

    console.log(a == b); // сравнява само по value
    console.log(a === b);// сравнява по value и type
}
demo();

// Пълнолетие
function adult (input) {
    let age = 10;

    if(age < 18) {
        console.log('Access dsnied!');
    } else {
        console.log('Welcome to your place!');
    }
}
adult();


// Отличник
function assessment (input) {
    const number = Number(input);

    if(number >= 5.5) {
        console.log('Excellent!');
    }
}
assessment(3);


// По-голямо число
function numbers(num1, num2) {
    const a = Number(num1),
          b = Number(num2);
    console.log(`The BIG number is ${Math.max(a, b)}!`);
          
    if(a > b) {
        console.log(`Greater number is ${a}!`);
    } else {
        console.log(`Greater number ia ${b}!!!`);
    }
}
numbers(10, 10);


// Четно или нечетно число ?
function evenOddNumber(num1) {
    const a = Number(num1);
    
    if (a % 2 === 0) {
        console.log(`The number ${a} is even number.`);
    } else {
        console.log(`The number ${a} is odd number.`);
    }
}
evenOddNumber(9);


// Закръгляне на числа
function mathematics(input) {
    const a = Number(input);

    console.log(Math.ceil(a));// Закръгля до най-близко по-голямо цяло число, в случая = 6
    console.log(Math.floor(a));// Закръгля до най-близко по-малко цяло число в случая = 5
    console.log(Math.trunc(a));// Изрязва остатъка след десетичната запетая и остава цялото число, в случая = 5
    console.log(a.toFixed(2));// Закръгля до втория знак, в случая = 5.07. Ако числото  е цяло - 5, добавя нули - 5.00
}
mathematics(5.0691);

// Оценки вариант 1 - връща само 1 резултат
function assessments(input) {
    const a = Number(input);

    if(a >= 5.5) {
        console.log(`Exelent!`);
    } else if(a >= 4.5) {
        console.log(`Very good!`);
    } else if(a >= 3.5) {
        console.log(`Good.`);
    } else if(a >= 3) {
         console.log(`Not good.`);
    } else {
        console.log(`Bad...`);
    } 
}
assessments(4.35);


// Оценки вариант 2 - връща 1 или няколко резултата
function assessments(input) {
    const a = Number(input);

    if(a >= 5.5) {
        console.log(`Exelent!`);
    } 
    if(a >= 4.5) {
        console.log(`Very good!`);
    } 
    if(a >= 3.5) {
        console.log(`Good.`);
    } 
    if(a >= 3) {
         console.log(`Not good.`);
    } 
    {
        console.log(`Bad...`);
    }  
}
assessments(4.35);


// Сравнение на стрингове
function strings(str1, str2) {
    const a = str1;
    const b = str2;
    console.log(str1 === str2);// false
    console.log(str1 !== str2);// true
}
strings('abs', 'abc');