'use strict';
/*JavaScript Fundamentals – Part 2 

Note: Please start Part 2 from scratch and comment out all the code from Part 1. 

LECTURE: Functions 
1. Write a function called 'describeCountry' which takes three parameters: 
'country', 'population' and 'capitalCity'. Based on this input, the 
function returns a string with this format: 'Finland has 6 million people and its capital city is Helsinki' 
2. Call this function 3 times, with input data for 3 different countries. Store the returned values in 3 different variables, and log them to the console 

function describeCountry(country, population, capitalCity) {
    return `${country} has ${population} million people and its capital city is ${capitalCity}`;
};
const describeOne = describeCountry('Finland', 6, 'Helsinki');
const describeTwo = describeCountry('Bulgaria', 7, 'Sofia');
const describeThree = describeCountry('Turkey', 20, 'Akara');
console.log(describeOne, describeTwo, describeThree);
*/


/*LECTURE: Function Declarations vs. Expressions 
1. The world population is 7900 million people. Create a function declaration called 'percentageOfWorld1' which receives a'population' value, and returns the percentage of the world population that the given population represents. For example, China has 1441 million people, so it's about 18.2% of the world population 
2. To calculate the percentage, divide the given 'population' value by 7900 and then multiply by 100 
3. Call 'percentageOfWorld1' for 3 populations of countries of your choice, store the results into variables, and log them to the console 
4. Create a function expression which does the exact same thing, called 'percentageOfWorld2', and also call it with 3 country populations (can be the same populations) 


// function precentageOfWorld1(population) {
//     return (population / 7900) * 100;
// }

// const precentageOfWorld2 = function (population) {
//     return (population / 7900) * 100;
// };
// const popChina = precentageOfWorld1(1441);
// const popFinland = precentageOfWorld1(7);
// const popBulgaria = precentageOfWorld1(8);
// console.log(popChina, popFinland, popBulgaria);

LECTURE: Arrow Functions 
1. Recreate the last assignment, but this time create an arrow function called 'percentageOfWorld3'

const precentageOfWorld3 = population => (population / 7900) * 100;
const popChina = precentageOfWorld3(1441);
const popFinland = precentageOfWorld3(7);
const popBulgaria = precentageOfWorld3(8);
console.log(popChina, popFinland, popBulgaria);
*/

/* 
LECTURE: Functions Calling Other Functions 
1. Create a function called 'describePopulation'. Use the function type you like the most. This function takes in two arguments: 'country' and 'population', and returns a string like this: 'China has 1441million people, which is about 18.2% of the world.' 
2. To calculate the percentage, 'describePopulation' call the 
'percentageOfWorld1' you created earlier 
3. Call 'describePopulation' with data for 3 countries of your choice

// Variant 1
const precentageOfWorld = population => (population / 7900) * 100;

const describePopulation = function (country, population) {
    const precentage = precentageOfWorld(population); 

    const description = `${country} has ${population} million people, which is about ${precentage.toFixed(2)}% of the world.`;  
    console.log(description);
};
describePopulation('Portugal', 10);
describePopulation('China', 1441);
describePopulation('USA', 332);

//Variant 2
const precentageOfWorld1 = function (population) {
    return (population / 7900) * 100;
};

const describePopulation1 = function (country, population) {
    const precentage = precentageOfWorld(population); 

    const description = `${country} has ${population} million people, which is about ${precentage.toFixed(2)}% of the world.`;  
    console.log(description);
};
describePopulation('Portugal', 10);
describePopulation('China', 1441);
describePopulation('USA', 332);
*/