"use strict";

if (4 == 9) {// При това записване след стартиране на кода нищо не се получава защото условието не е изпълнено
  console.log('Ok');
}

if (4 == 4) {// При това записване излиза резултат  - Ок - т.е. условието е изпълнено
  console.log('Ok');
}

if (4 == 9) {       // Илюстрация на работа с условие и if - else
  console.log('Ok');
} else {
  console.log('Error');
}

if (8) { // при такова записване условието винаги е вярно(Ок)
  console.log('Ok');
} else {
  console.log('Error');
}

/* const num = 50;

if (num < 49) {// Първо се проверява това условие
  console.log('Error')
} else if (num > 100) {// Второ се проверява това условие
  console.log('Много')
} else {
  console.log('Ok');// Когато никое от горните две условия не е изпълнено се изпълнява този ред
} 

(num === 50) ? console.log('Ok') : console.log('Error'); */ // Това е същия запис като горния (if - else if - else)само че с тернарни оператори

4 + 4//  плюсът е бинарен аргумент

+'4'; // унарен аргумент - унарен плюс


const num = 50;

switch (num) {// !!! Konstrukciqtq switch винаги работи със строго сравнение !!!
    case 49: 
      console.log('Невярно');
      break;
    case 100:
      console.log('Невярно');
      break;
    case 50:
      console.log('Точно е');
      break;
    default:
      console.log('Не е в това завъртане');
      break;
}

const num = '50';

switch (num) {// !!! Konstrukciqtq switch винаги работи със строго сравнение !!!
    case '49': // Цифрите може да се запишат и по този начин
      console.log('Невярно');
      break;
    case '100':
      console.log('Невярно');
      break;
    case '50':
      console.log('Точно е');
      break;
    default:
      console.log('Не е в това завъртане');
      break;
}