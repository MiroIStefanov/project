"use strict";

//4.	Число от 100 до 200
function number(int) {
    const a = Number(int);

    if (a <= 99) {
        console.log('Less than 100');
    } else if (a >= 100 && a <= 200) {
        console.log('Between 100 and 200');
    } else {
        console.log('Greater than 200');
    }
}
number(200);

// 5.	Познай паролата
function password (pass) {
    const a = pass;

    if (a === 's3cr3t!P@ssw0rd') {
        console.log('Welcome');
    } else {
        console.log('Wrong password!');
    }
}
password('s3cr3t!P@ssw0rd');

// 6.	Лица на фигури
function figures (arg1, arg2, arg3) {
    const str = arg1,
          a = Number(arg2),
          b = Number(arg3);
    
    if (str === 'square') {
        const s = a * a;
        console.log(s.toFixed(3));
    } else if (str === 'rectangle') {
        const s = a * b;
        console.log(s.toFixed(3));
    } else if (str === 'circle') {
        const s = (Math. * a ** 2);
        console.log(s.toFixed(3));
    } else { 
        const s = (a * b) / 2;
        console.log(s.toFixed(3));
    }
}
figures('square', '5');
figures('rectangle', '7', '2.5');
figures('circle','6');
figures('triangle', '4.5', '20');


//7.	Магазин за детски играчки
function market (num1, num2, num3, num4, num5, num6) {
    let funPrice = Number(num1),
          puzzles = Number(num2),
          dolls = Number(num3),
          bears = Number(num4),
          idiots = Number(num5),
          trucks = Number(num6),
          allToys = puzzles + dolls + bears + idiots + trucks,
          priceAll = (puzzles * 2.6) + (dolls * 3) + (bears * 4.1) + (idiots * 8.2) + (trucks * 2.0);

    if (allToys >= 50) {
        priceAll = priceAll * 0.75;
    }
    priceAll = priceAll * 0.9;
     if(priceAll >= funPrice) {
         console.log(`Yes! ${(priceAll - funPrice).toFixed(2)} lv left.`);
     } else {
         console.log(`Not enough money! ${(funPrice - priceAll).toFixed(2)} lv needed.`);
     }   
}
market("40.8", "20", "25", "30", "50", "10");
market("320", "8", "2", "5", "5", "1");