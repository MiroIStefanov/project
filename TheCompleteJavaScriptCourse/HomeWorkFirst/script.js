"use strict";

/* Value and variables home task

1. Declare variables called 'country', 'continent' and 'population' and 
assign their values according to your own country (population in millions) 
2. Log their values to the console
*/

//let country = 'Bulgaria';
//let continent = 'Europe';
//let population = 7000000;

//console.log(country);
//console.log(continent);
//console.log(population);

/* Data types home task

1. Declare a variable called 'isIsland' and set its value according to your 
country. The variable should hold a Boolean value. Also declare a variable 
'language', but don't assign it any value yet 
2. Log the types of 'isIsland', 'population', 'country' and 'language' 
to the console
*/

//let isIsland = false;
let language;

//console.log(typeof isIsland);
//console.log(typeof population);
//console.log(typeof country);
console.log(typeof language);

/* let, const, and var home task

1. Set the value of 'language' to the language spoken where you live (some 
countries have multiple languages, but just choose one) 
2. Think about which variables should be const variables (which values will never change, and which might change?). Then, change these variables to const. 
3. Try to change one of the changed variables now, and observe what happens
*/

language = 'Bulgarian';

let country = 'Bulgaria';
const continent = 'Europe';
let population = 70000000;
const isIsland = false;

console.log(typeof country);
console.log(typeof continent);
console.log(typeof population);
console.log(typeof isIsland);

continent = 123;// generate error