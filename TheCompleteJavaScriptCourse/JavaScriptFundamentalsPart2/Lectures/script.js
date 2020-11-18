'use strict';
/*
function logger () {
    console.log('My name is Jonas');
}
// calling / running / invoking function
logger ();
logger ();
logger ();

function fruitProcessor (apples, oranges) {
    const juice = `Juice with ${apples} appels and ${oranges} oranges.`;
    return juice;
}
const appleJuice = fruitProcessor (5, 0);// Извикаване и запзване на резултата в променлива
console.log(appleJuice);// Логване на резултата
console.log(fruitProcessor(5, 0));// Извикване и логване, без запазване в променлива
const appleOrangeJuice = fruitProcessor (4, 5);
console.log(appleOrangeJuice);

const num = Number('123');


// Function declaration
function calcAge1(birthYear) {
    return 2037 - birthYear; 
}
const age1 = calcAge1(1991);
//console.log(age1);

// Function expression
const calcAge2 = function(birthYear) {
    return 2037 - birthYear;
}
const age2 = calcAge2(1991);
console.log(age1, age2);


// Function expression
// const calcAge2 = function (birthYear) {
//     return 2037 - birthYear;
// };

// Arrow function 
// Записана по долния начин автоматично връща резултат, без да се пише return
const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3 (1991);
console.log(age3);

// Semple with one parameter
const yearsUntilRetirement = birthYear => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    return retirement;
};
console.log(yearsUntilRetirement(1991));

// Semole with multiple parameters
const yearsUntilRetirement2 = (birthYear, firstName) => {
    const age2 = 2037 - birthYear;
    const retirement2 = 65 - age2;
    return `${firstName} retires in ${retirement2} years.`;
};
console.log(yearsUntilRetirement2(1991, 'Jonas'));
console.log(yearsUntilRetirement2(1976, 'Miro'));


const cutPieces = function (fruit) {
    return fruit * 4;
}; 
 
function fruitProcessor (apples, oranges) {

    const applePieces = cutPieces (apples);
    const orangePieces = cutPieces (oranges);

    const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
    return juice;
}
console.log(fruitProcessor (2, 3));
*/
const calcAge = function (birthYear) {
    return 2037 - birthYear;
};

const yearsUntilRetirement = function (birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;

    if (retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years.`);
        return retirement;
    } else {
        console.log(`${firstName} has already retited`);
        return -1;    
    }

    //return `${firstName} retires in ${retirement} years.`;
};
console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1960, 'Mike'));