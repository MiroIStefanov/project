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

// language = 'Bulgarian';

// let country = 'Bulgaria';
// const continent = 'Europe';
// let population = 70000000;
// const isIsland = false;

// console.log(typeof country);
// console.log(typeof continent);
// console.log(typeof population);
// console.log(typeof isIsland);

//continent = 123;// generate error

/*
LECTURE: Basic Operators 
1. If your country split in half, and each half would contain half the population
then how many people would live in each half? 
2. Increase the population of your country by 1 and log the result to the console
3. Finland has a population of 6 million. Does your country have more people than
Finland? 
4. The average population of a country is 33 million people. Does your country
have less people than the average country? 
5. Based on the variables you created, create a new variable 'description'
which contains a string with this format: 'Portugal is in Europe, and its 11 million people speak portuguese' 
*/
let halfPopulation = population / 2;
//console.log(halfPopulation);

let growPopulation = population;
growPopulation++;
console.log(growPopulation);

let populationFinland = 6000000;
console.log(population > populationFinland);

const allCountryAveragePopulation = 33000000;
console.log(population < allCountryAveragePopulation);

//let description = 'Portugal is in Europe, and its 11 million people speak portoguese';
//console.log(description);

// LECTURE: Strings and Template Literals 
// 1. Recreate the 'description' variable from the last assignment, this time 
// using the template literal syntax 

const countryName = 'Portugal';
const countryPlace = 'Europe';
const countryPopulation = '11000000';
const countryLanguage = 'Portoguese';

const description = `${countryName} is in ${countryPlace}, and its ${countryPopulation} people speak ${countryLanguage}`;
console.log(description);

/* LECTURE: Taking Decisions: if / else Statements 
1. If your country's population is greater that 33 million, log a string like this to the 
console: 'Portugal's population is above average'. Otherwise, log a string like 
'Portugal's population is 22 million below average' (the 22 is the average of 33 
minus the country's population) 
2. After checking the result, change the population temporarily to 13 and then to 
130. See the different results, and set the population back to original 
*/
let differencePopulation;
if(countryPopulation > allCountryAveragePopulation) {
    console.log(`Portugal's population is abovbe average`);
} else {
    differencePopulation = allCountryAveragePopulation - countryPopulation;
    console.log(`Portugal's population is ${differencePopulation} below average`);
}