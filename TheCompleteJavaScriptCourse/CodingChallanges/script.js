/*
Coding Challenge #1 

Mark and John are trying to compare their BMI (Body Mass Index), which is 
calculated using the formula: 
BMI = mass / height ** 2 = mass / (height * height) (mass in kg 
and height in meter). 
Your tasks: 
1. Store Mark's and John's mass and height in variables 
2. Calculate both their BMIs using the formula (you can even implement both 
versions) 
3. Create a Boolean variable 'markHigherBMI' containing information about 
whether Mark has a higher BMI than John. 
Test data: 
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 
m tall. 
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 
m tall. 
*/

// let weightMark1 = 78,// грешка по дефолт се изполсва const
//     tallMark1 = 1.69,
//     bmiMark1,
//     weightJohn1 = 92,
//     tallJhon1= 1.95,
//     bmiJohn1,
//     weightMark2 = 95,
//     tallMark2 = 1.88,
//     bmiMark2,
//     weightJohn2 = 85,
//     tallJhon2 = 1.76,
//     bmiJohn2,
//     markHigherBMI1,
//     markHigherBMI2;

// bmiMark1 = weightMark1 / tallMark1 ** 2;
// bmiJohn1 = weightJohn1 / tallJhon1 ** 2;
// bmiMark2 = weightMark2 / tallMark2 ** 2;
// bmiJohn2 = weightJohn2 / tallJhon2 ** 2;
// console.log(bmiMark1, bmiMark2, bmiJohn1, bmiJohn2);

// markHigherBMI1 = bmiMark1 > bmiJohn1;
// markHigherBMI2 = bmiMark2 > bmiJohn2;
// console.log(markHigherBMI1, markHigherBMI2);

// Правилно записване

// const weightMark = 78;
// const tallMark = 1.69;
// const weightJohn = 92;
// const tallJhon = 1.95;

// const weightMark = 95;
// const tallMark = 1.88;
// const weightJohn = 85;
// const tallJhon = 1.76;
// // използват се едни исъщи формули като само се сменят стойностите на променливите
// const bmiMark = weightMark / tallMark ** 2;
// const bmiJohn = weightJohn / tallJhon ** 2;
// const markHigherBMI = bmiMark > bmiJohn;

// console.log(bmiMark, bmiJohn, markHigherBMI);


/* 
Coding Challenge #2 
Use the BMI example from Challenge #1, and the code you already wrote, and 
improve it. 
Your tasks: 
1. Print a nice output to the console, saying who has the higher BMI. The message 
is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!" 
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's 
BMI (28.3) is higher than John's (23.9)!" 
Hint: Use an if/else statement 😉 
*/

const weightMark = 78;
const tallMark = 1.69;
const weightJohn = 92;
const tallJhon = 1.95;

// const weightMark = 95;
// const tallMark = 1.88;
// const weightJohn = 85;
// const tallJhon = 1.76;

const bmiMark = weightMark / tallMark ** 2;
const bmiJohn = weightJohn / tallJhon ** 2;

if(bmiMark > bmiJohn) {
    console.log(`Mark's BMI (${bmiMark}) is higher than Jon's (${bmiJohn})!`);
} else {
    console.log(`John's BMI (${bmiJohn}) is higher than Mark's (${bmiMark})!`);
}
// Решението съвпада с прдложеното от преподавателя