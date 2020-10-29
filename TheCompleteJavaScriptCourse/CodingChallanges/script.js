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

let weightMark1 = 78,// грешка по дефолт се изполсва const
    tallMark1 = 1.69,
    bmiMark1,
    weightJohn1 = 92,
    tallJhon1= 1.95,
    bmiJohn1,
    weightMark2 = 95,
    tallMark2 = 1.88,
    bmiMark2,
    weightJohn2 = 85,
    tallJhon2 = 1.76,
    bmiJohn2,
    markHigherBMI1,
    markHigherBMI2;

bmiMark1 = weightMark1 / tallMark1 ** 2;
bmiJohn1 = weightJohn1 / tallJhon1 ** 2;
bmiMark2 = weightMark2 / tallMark2 ** 2;
bmiJohn2 = weightJohn2 / tallJhon2 ** 2;
console.log(bmiMark1, bmiMark2, bmiJohn1, bmiJohn2);

markHigherBMI1 = bmiMark1 > bmiJohn1;
markHigherBMI2 = bmiMark2 > bmiJohn2;
console.log(markHigherBMI1, markHigherBMI2);

// Правилно записване

// const weightMark = 78;
// const tallMark = 1.69;
// const weightJohn = 92;
// const tallJhon = 1.95;

const weightMark = 958;
const tallMark = 1.88;
const weightJohn = 85;
const tallJhon = 1.76;
// използват се едни исъщи формули като само се сменят стойностите на променливите
const bmiMark = weightMark1 / tallMark ** 2;
const bmiJohn = weightJohn1 / tallJhon ** 2;
const markHigherBMI = bmiMark > bmiJohn;

console.log(bmiMark, bmiJohn, markHigherBMI);