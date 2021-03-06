'use strict';

/*
3.	Пресмятане на лице на квадрат
Да се напише функция, която получава цяло число и пресмята лицето на квадрат със страна "a". Задачата е тривиално лесна: получавате число в аргумента на функцията, умножавате го само по себе си и печатате получения резултат на конзолата.
Примерен вход и изход
вход	изход
("5")	25
Насоки
1.	Приемете вход (число във вид на стринг) и  го запазете в променливата a, като го преобразувате към числен тип. 
2.	Инициализирайте променлива, която държи пресметнатата стойност на лицето, получена по формулата
 a * a и принтирайте резултата, като не забравяйте, че за да получите локално резултат, трябва да извикате функцията и да й подадете входни данни.

*/

function squareArea (input) {
    let a = Number(input);
    let area = a * a;
    console.log(area);
}
squareArea('5');


/*
Да се напише функция, която получава цяло число и преобразува числото от инчове в сантиметри. За целта умножава инчовете по 2.54 (защото 1 инч = 2.54 сантиметра).
Примерен вход и изход
вход	Изход
("5")	12.7
*/

function inchToSm (input) {
    let inch = Number(input);
    let sm = inch * 2.54;
    console.log(sm);
}
inchToSm ('5');


/*
7.	Изготвяне на проекти
Напишете функция, която изчислява колко часове ще са необходими на един архитект, за да изготви проектите на няколко строителни обекта. Изготвянето на един проект отнема три часа.
Вход
Функцията получава 2 аргумента:
1.	Името на архитекта - текст
2.	Брой на проектите - цяло число в интервала [0… 100]
Изход
На конзолата се отпечатва:
•	"The architect {името на архитекта} will need {необходими часове} hours to complete {брой на проектите} project/s."
Примерен вход и изход
вход	изход		вход	изход
("George",
"4")	The architect George will need 12 hours to complete 4 project/s.		("Sanya",
"9")
	The architect Sanya will need 27 hours to complete 9 project/s.
*/

function hoursCheck (name, projects) {
    let oneProjectHours = 3;
    let allHours = Number(projects) * oneProjectHours;

    console.log(`The architect ${name} will need ${allHours} hours to complete ${projects} project/s.`);
}
hoursCheck ('Ivan', '3');

/*
8.	Зоомагазин
Напишете функция, която пресмята нужните разходи за закупуването на храна за кучета.  Храната се пазарува основно за кучета, от зоомагазин, но понякога стопанинът им купува и за животните на съседа му. Една опаковка храна за кучета е на цена 2.50лв., а всяка останала, която не е за тях струва 4лв.
Вход
 Функцията получава 2 аргумента:
1.	Броят на кучетата – цяло число в интервала [0… 100]
2.	Броят на останалите животни  - цяло число в интервала [0… 100]
Изход
На конзолата се отпечатва:
"{крайната сума} lv."
Примерен вход и изход
вход	изход		вход	изход
("5", "4")	28.5 lv.		("13", "9")	68.5	lv.
*/

function petFoodCalculate (numberOfDogs, otherPetsFood) {
    let foodDogs = Number(numberOfDogs) * 2.50,
        otherFood = Number(otherPetsFood) * 4.00,
        allFood = foodDogs + otherFood;

        console.log(`${allFood} lv.`);
}
petFoodCalculate ('10', '5');

/*
9.	Озеленяване на дворове
Божидара разполага с няколко къщи на Черноморието и желае да озелени дворовете на някои от тях, като по този начин създаде уютна обстановка и комфорт на гостите си, като за целта е наела фирма.
Напишете функция, която изчислява необходимите средства, които Божидара ще трябва да заплати на фирмата изпълнител на проекта. Цената на един кв. м. е 7.61лв със ДДС. Тъй като нейният двор е доста голям, фирмата изпълнител предлага 18% отстъпка от крайната цена.
Вход
Функцията получава един аргумент:
1.	Кв. метри, които ще бъдат озеленени – реално число в интервала [0.00… 10000.00]
Изход
На конзолата се отпечатват два реда:
•	"The final price is: {крайна цена на услугата} lv."
•	"The discount is: {отстъпка} lv."
Примерен вход и изход
Вход	Изход	Обяснения
("550")
	The final price is: 3432.11 lv.
The discount is: 753.39 lv.	Пресмятаме цената за озеленяване на целия двор:
550 * 7.61 = 4185.5 лв.
Приспадаме отстъпката от общата сума:
0.18 * 4185.5 = 753.39 лв.
Калкулираме крайната цена на услугата:
4185.5 – 753.39  3432.11 лв.
Вход	Изход	
("150")
	The final price is: 936.03 lv.
The discount is: 205.47 lv.	

*/

function calculatePrice (input) {
    let area = Number(input) * 7.61,
        discount = area * 0.18,
        finalPrice = area - discount;
console.log(`The final price is: ${finalPrice} lv. 
The discount is: ${discount} lv.`);
}
calculatePrice ('150');