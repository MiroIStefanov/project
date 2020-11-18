"use strict";

/*
1.	Ден от седмицата
Напишете функция, която получава цяло число и отпечатва ден от седмицата (на английски език), в граници [1...7] или отпечатва "Error" в случай, че въведеното число е невалидно. 
Примерен вход и изход
Вход	Изход
("1")	Monday
("2")	Tuesday
("3")	Wednesday
("4")	Thursday
("5")	Friday
("6")	Saturday
("7")	Sunday
("-1")	Error
Насоки
1.	Създайте нов JavaScript файл в съществуващата папка и го именувайте подходящо. Препоръчително е всеки скриптов файл да се казва както името на задачата, чието решение съдържа. 
2.	Съдържанието на новият файл ще се отвори в прозореца в дясно.
3.	Преобразувайте входните данни от стринг към число.
4.	Отпечатайте денят от седмицата според въведеното число. Ако то е невалидно, отпечатайте "Error".
*/
function dayOfWeek(arg1) {

     let day = Number(arg1);

     switch(day) {
        case 1:
            console.log('Monday');
            break;
        case 2:
            console.log('Tuesday');
            break;
        case 3:
            console.log('Wednesday');
            break;
        case 4:
            console.log('Thursday');
            break;
        case 5:
            console.log('Friday');
            break;
        case 6:
            console.log('Saturday');
            break;
        case 7:
            console.log('Sunday');
            break;
        default:
            console.log('Error');
     }
}
dayOfWeek('-1');


/*
2.	Почивен или работен ден
Напишете функция която, чете ден от седмицата (текст), на английски език - въведен от потребителя. Ако денят е работен отпечатва на конзолата - "Working day", ако е почивен - "Weekend". Ако се въведе текст различен от ден от седмицата да се отпечата - "Error".
Примерен вход и изход
Вход	      Изход
("Monday")	Working day
Вход	     Изход
("Sunday")	Weekend
Вход	     Изход
("April")	Error
Насоки
1.	Отпечатайте работен или почивен ден,според въведения ден, ако денят е невалиден отпечатайте "Error".
*/

function workingDay(arg1) {

    let day = arg1;

    switch(day) {
        case 'Monday':
        case 'Tuesday':
        case 'Wednesday':
        case 'Thursday':
        case 'Friday':
            console.log('Working day');
            break;
        case 'Saturday':
        case 'Sunday':
            console.log('Weekend');
            break;
        default:
            console.log('Error'); 
    }
}
workingDay("April");


/*
3.	Клас животно
Напишете функция, която отпечатва класа на животното според неговото име, въведено от потребителя.
1.	dog -> mammal
2.	crocodile, tortoise, snake -> reptile
3.	others -> unknown
Примерен вход и изход
Вход	     Изход
("dog")	     mammal
("snake")	 reptile
("cat")	     unknown
*/
function animalFunction (arg1) {
    let animal = arg1;
    switch(animal) {
        case 'dog': 
            console.log('mammal');
            break;
        case 'crocodile':
        case 'tortoise':
        case 'snake':
            console.log('reptile');
            break;
        default:
            console.log('unknown');
            break;
    }
        
}
animalFunction("crocodile");


/*
4.	Обръщение според възраст и пол
Да се напише функция, която получава възраст (реално число) и пол ('m' или 'f'), въведени от потребителя, и отпечатва обръщение измежду следните:
•	"Mr." – мъж (пол 'm') на 16 или повече години
•	"Master" – момче (пол 'm') под 16 години
•	"Ms." – жена (пол 'f') на 16 или повече години
•	"Miss" – момиче (пол 'f') под 16 години
Примерен вход и изход
вход	изход			
("12", "f")	Miss	

("17", "m")	Mr.		

("25", "f")	Ms.		

("13.5", "m")	Master

Насоки

1.	Преобразувайте числото от стринг в числен тип.
2.	Направете проверка за пола, и ако върне резултат true, направете проверка за годините. В тялото на проверките за възраст принтирайте желаното обръщение.
3.	Стартирайте програмата с [Ctrl+F5] и я тествайте, като извиквате функцията най-отдолу и й подадете различни входни стойности:
*/

function generic(arg1, arg2) {

    let age = Number(arg1);
    let gender = arg2;

    if (gender === 'f') {
        if(age >= 16) {
            console.log("Ms.");
        } else {
            console.log("Miss");
        }
    } else {
        if(age >= 16) {
            console.log("Mr.");
        } else {
            console.log("Master");
        }
    }
}
generic("12", "f");
generic("17", "m");
generic("25", "f");
generic("13.5", "m");



/*
Предприемчив българин отваря квартални магазинчета в няколко града и продава на различни цени според града:
град / продукт	coffee	water	beer	sweets	peanuts
Sofia			0.50	0.80    1.20    1.45     1.60
Plovdiv			0.40	0.70    1.15    1.30     1.50
Varna			0.45	0.70    1.10    1.35     1.55
Напишете функция, която получава аргументи: продукт (низ), град (низ) и количество (число), и пресмята и отпечатва колко струва съответното количество от избрания продукт в посочения град. 
Примерен вход и изход
	
	вход	                    изход
("coffee", "Varna", "2")	     0.9		

("peanuts", "Plovdiv", "1")	     1.5		

("beer", "Sofia", "6")	         7.2		

("water", "Plovdiv", "3")	     2.1		

("sweets", "Sofia", "2.23")	     3.2335
*/

function merchant(in1, in2 ,in3) {

    let product = in1;
    let city = in2;
    let pices = Number(in3);
    let coffee = 0;
    let water = 0;
    let beer = 0;
    let sweets = 0;
    let peanuts = 0;


    if(city === 'Sofia') {
        if(product === 'coffee') {
            coffee = pices * 0.50;
            console.log(coffee);
        } else if (product === 'water') {
            water = pices * 0.80;
            console.log(water);
        } else if(product === 'beer') {
            beer = pices * 1.20;
            console.log(beer);
        } else if (product === 'sweets') {
            sweets = pices * 1.45;
            console.log(sweets);
        } else if (product === 'peanuts') {
            peanuts = pices * 1.60;
            console.log(peanuts);
        }
    } else if(city === 'Plovdiv') {
        if(product === 'coffee') {
            coffee = pices * 0.40;
            console.log(coffee);
        } else if (product === 'water') {
            water = pices * 0.70;
            console.log(water);
        } else if(product === 'beer') {
            beer = pices * 1.15;
            console.log(beer);
        } else if (product === 'sweets') {
            sweets = pices * 1.30;
            console.log(sweets);
        } else if (product === 'peanuts') {
            peanuts = pices * 1.50;
            console.log(peanuts);
        }
    } else if(city === 'Varna') {
        if(product === 'coffee') {
            coffee = pices * 0.45;
            console.log(coffee);
        } else if (product === 'water') {
            water = pices * 0.70;
            console.log(water);
        } else if(product === 'beer') {
            beer = pices * 1.10;
            console.log(beer);
        } else if (product === 'sweets') {
            sweets = pices * 1.35;
            console.log(sweets);
        } else if (product === 'peanuts') {
            peanuts = pices * 1.55;
            console.log(peanuts);
        }
    }
    
}
merchant("coffee", "Varna", "2");
merchant("peanuts", "Plovdiv", "1");
merchant("beer", "Sofia", "6");
merchant("water", "Plovdiv", "3");
merchant("sweets", "Sofia", "2.23");


/*
6.	Число в интервалa
Да се напише функция, която проверява дали въведеното от потребителя число е в интервала [-100, 100] и е различно от 0 и извежда "Yes", ако отговаря на условията, или "No" ако е извън тях.
Примерен вход и изход
вход	изход		вход	изход		вход	изход
("-25")	Yes		   ("0")	No		   ("25")	Yes
*/

function nums(ar1) {

    let num = Number(ar1);

    if(num >= - 100 && num <= 100 && num !== 0) {
        console.log('Yes');
    } else {
        console.log('No');
    }
}
nums('101');
nums('100');
nums('25');
nums('0');
nums('-25');
nums('-100');
nums('-101');


/*
7.	Работно време
Да се напише функция, която получава час от денонощието(цяло число) и ден от седмицата(текст) и проверява дали офисът на фирма е отворен, като работното време на офисът е от 10-18 часа, от понеделник до събота включително.
Примерен вход и изход
вход	        изход		
("11","Monday")	open		
("19","Friday")	closed		
("11","Sunday")	closed
*/


function workTime(ar1, ar2) {

    let hour = Number(ar1);
    let day = ar2;

    if(hour >= 10 && hour <= 18) {
        switch(day) {
            case 'Monday':
            case 'Tuesday':
            case 'Wednesday':
            case 'Thursday':
            case 'Friday':
            case 'Saturday':
                console.log('open');
                break;
            case 'Sunday':
                console.log('closed');
                break;
        }
    } else {
        console.log('closed');
    }
}
workTime("11","Monday");
workTime("19","Friday");
workTime("11","Sunday");
workTime("9","Monday");
workTime("19","Monday");


/*
Да се напише функция, която получава ден от седмицата (текст) и принтира на конзолата цената на билет за кино според деня от седмицата:
Monday	Tuesday	Wednesday	Thursday	Friday	Saturday	Sunday
  12	  12	   14	      14	      12	  16	      16
*/


function ticket(ar1) {

    let day = ar1;

    if(day === 'Saturday' || day === 'Sunday') {
        console.log(16);
    } else if (day === 'Wednesday' || day === 'Thursday') {
        console.log(14);
    } else {
        console.log(12);
    }

    // switch(day) {
    //     case 'Monday':
    //     case 'Tuesday':
    //     case 'Friday':
    //         console.log(12);
    //         break;
    //     case 'Wednesday':
    //     case 'Thursday':
    //         console.log(14);
    //         break;
    //     default:
    //         console.log(16);
    //         break;
    // }
}
ticket("Monday");
ticket("Tuesday");
ticket("Wednesday");
ticket("Thursday");
ticket("Friday");
ticket("Saturday");
ticket("Sunday");

/*
9.	Плод или зеленчук?
Да се напише функция, която получава аргумент  име на продукт  и проверява дали е плод или зеленчук.
•	Плодовете "fruit" имат следните възможни стойности:  banana, apple, kiwi, cherry, lemon и grapes
•	Зеленчуците "vegetable" имат следните възможни стойности:  tomato, cucumber, pepper и carrot
•	Всички останали са "unknown"
Да се изведе "fruit", "vegetable" или "unknown" според въведения продукт.
Примерен  вход   и   изход

        ("apple")	fruit		
        ("tomato")	vegetable		
        ("water")	unknown
*/

function green(a1) {

    let input = a1;

    switch(input) {
        case 'banana':
        case 'apple':
        case 'kiwi':
        case 'cherry':
        case 'lemon':
        case 'grapes':
            console.log('fruit');
        break;
        case 'tomato':
        case 'cucumber':
        case 'pepper':
        case 'carrot':
            console.log('vegetable');
            break;
        default:
            console.log('unknown');    
    }
}
green("apple");
green("tomato");
green("water");


/*
10.	Невалидно число
Дадено число е валидно, ако е в диапазона [100…200] или е 0. Да се напише функция, която приема аргумент  цяло число, и печата "invalid" ако въведеното число не е валидно. 
Примерен вход и изход
вход	  изход		
("75")	invalid		
("150")	(няма изход)		
("220")	invalid		
("199")	(няма изход)
("-1")	invalid		
("100")	(няма изход)		
("200")	(няма изход)		
("0")	(няма изход)
*/


function number(a) {

    let num = Number(a);

    if(num >= 100 && num <=200 || num === 0) {
        console.log();
    } else {
        console.log('invalid');
    }

}
number("0");


/*
11.	Магазин за плодове

Магазин за плодове през работните дни работи на следните цени:
плод	banana	apple	orange	grapefruit	kiwi	pineapple	grapes
цена	2.50	1.20	0.85	1.45	2.70	5.50	3.85
Събота и неделя магазинът работи на по-високи цени:
плод	banana	apple	orange	grapefruit	kiwi	pineapple	grapes
цена	2.70	1.25	0.90	1.60	3.00	5.60	4.20
Напишете функция, която получава аргументи:плод (banana / apple / orange / grapefruit / kiwi / pineapple / grapes), ден от седмицата (Monday / Tuesday / Wednesday / Thursday / Friday / Saturday / Sunday) и количество (число) и пресмята цената според цените от таблиците по-горе. Резултатът да се отпечата закръглен с 2 цифри след десетичната точка. При невалиден ден от седмицата или невалидно име на плод да се отпечата "error". 

Примерен вход и изход
вход	                        изход
("apple", "Tuesday", "2")	    2.40		
("orange", "Sunday", "3")	    2.70		
("kiwi", "Monday", "2.5")	    6.75		
("grapes", "Saturday", "0.5")	2.10	
("tomato", "Monday","0.5")	    error
*/

function fruitShop(a, b, c) {

    let fruit = a;
    let day = b;
    let quantity = Number(c);

    switch(day) {
        case 'Monday':
        case 'Tuesday':
        case 'Wednesday':
        case 'Thursday':
        case 'Friday':
            if(fruit === 'banana') {
                console.log((quantity * 2.50).toFixed(2));
            } else if(fruit === 'apple') {
                console.log((quantity * 1.20).toFixed(2));
            } else if(fruit === 'orange') {
                console.log((quantity * 0.85).toFixed(2));
            } else if(fruit === 'grapefruit') {
                console.log((quantity * 1.45).toFixed(2));
            } else if(fruit === 'kiwi') {
                console.log((quantity * 2.70).toFixed(2));
            } else if(fruit === 'pineapple') {
                console.log((quantity * 5.50).toFixed(2));
            } else if(fruit === 'grapes') {
                console.log((quantity * 3.85).toFixed(2));
            } else {
                console.log('error');
            }
            break;
        case 'Saturday':
        case 'Sunday':
            if(fruit === 'banana') {
                console.log((quantity * 2.70).toFixed(2));
            } else if(fruit === 'apple') {
                console.log((quantity * 1.25).toFixed(2));
            } else if(fruit === 'orange') {
                console.log((quantity * 0.90).toFixed(2));
            } else if(fruit === 'grapefruit') {
                console.log((quantity * 1.60).toFixed(2));
            } else if(fruit === 'kiwi') {
                console.log((quantity * 3.00).toFixed(2));
            } else if(fruit === 'pineapple') {
                console.log((quantity * 5.60).toFixed(2));
            } else if(fruit === 'grapes') {
                console.log((quantity * 4.20).toFixed(2));
            } else {
                console.log('error');
            }
            break;
        default:
            console.log('error');
    }
}
fruitShop("apple", "Tuesday", "2");
fruitShop("orange", "Sunday", "3");
fruitShop("kiwi", "Monday", "2.5");
fruitShop("grapes", "Saturday", "0.5");
fruitShop("tomato", "Monday","0.5");


/*
12.	Търговски комисионни
Фирма дава следните комисионни на търговците си според града, в който работят и обема на продажбите:
Град	0 ≤ s ≤ 500	500 < s ≤ 1 000	1 000 < s ≤ 10 000	s > 10 000
Sofia	5%	7%	8%	12%
Varna	4.5%	7.5%	10%	13%
Plovdiv	5.5%	8%	12%	14.5%
Напишете функция, която  получава име на град (стринг) и обем на продажби (число) и изчислява и извежда размера на търговската комисионна според горната таблица. Резултатът да се изведе форматиран до 2 цифри след десетичната точка. При невалиден град или обем на продажбите (отрицателно число) да се отпечата "error". 
Примерен вход и изход
вход	                изход		
("Sofia", "1500")	    120.00		
("Plovdiv", "499.99")	27.50		
("Varna", "3874.50")	387.45		
("Kaspichan", "-50")	error
*/



function tradeCommissions(arg1, arg2) {

    let city = arg1;
    let sales = Number(arg2);

    if(city === 'Sofia') {

        if(sales >= 0 && sales <= 500) {
            console.log((sales * 0.05).toFixed(2));
        } else if(sales > 500 && sales <= 1000) {
            console.log((sales * 0.07).toFixed(2));
        } else if(sales > 1000 && sales <= 10000) {
            console.log((sales * 0.08).toFixed(2));
        } else if(sales > 10000) {
            console.log((sales * 0.12).toFixed(2));
        } else {
            console.log('error');
        }
    } else if(city === 'Varna') {

        if(sales >= 0 && sales <= 500) {
            console.log((sales * 0.045).toFixed(2));
        } else if(sales > 500 && sales <= 1000) {
            console.log((sales * 0.075).toFixed(2));
        } else if(sales > 1000 && sales <= 10000) {
            console.log((sales * 0.10).toFixed(2));
        } else if(sales > 10000) {
            console.log((sales * 0.13).toFixed(2));
        } else {
            console.log('error');
        }
    } else if(city === 'Plovdiv') {
        if(sales >= 0 && sales <= 500) {
            console.log((sales * 0.055).toFixed(2));
        } else if(sales > 500 && sales <= 1000) {
            console.log((sales * 0.08).toFixed(2));
        } else if(sales > 1000 && sales <= 10000) {
            console.log((sales * 0.12).toFixed(2));
        } else if(sales > 10000) {
            console.log((sales * 0.145).toFixed(2));
        } else {
            console.log('error');
        }
    } else {
        console.log('error');
    }
}
tradeCommissions("Sofia", "1500");
tradeCommissions("Plovdiv", "499.99");
tradeCommissions("Varna", "3874.50");
tradeCommissions("Kaspichan", "-50");


/*
13.	*Ски почивка
Атанас решава да прекара отпуската си в Банско и да кара ски. Преди да отиде обаче, трябва да резервира хотел и да изчисли колко ще му струва престоя. Съществуват следните видове помещения, със следните цени за престой:
	"room for one person" – 18.00 лв за нощувка
	"apartment" – 25.00 лв за нощувка 
	"president apartment" – 35.00 лв за нощувка
Според броят на дните, в които ще остане в хотела (пример: 11 дни = 10 нощувки) и видът на помещението, което ще избере, той може да ползва различно намаление. Намаленията са както следва:
вид помещение	по-малко от 10 дни	между 10 и 15 дни	повече от 15 дни
room for one person	не ползва намаление	не ползва намаление	не ползва намаление
apartment	30% от крайната цена	35% от крайната цена	50% от крайната цена
president apartment	10% от крайната цена	15% от крайната цена	20% от крайната цена
След престоя, оценката на Атанас за услугите на хотела може да е позитивна (positive) или негативна (negative) . Ако оценката му е позитивна, към цената с вече приспаднатото намаление Атанас добавя 25% от нея. Ако оценката му е негативна приспада от цената 10%.
Вход
Получават се 3 аргумента:
•	Първи - дни за престой - цяло число в интервала [0...365]
•	Втори - вид помещение - "room  for  one  person", "apartment" или "president  apartment"
•	Трети - оценка - "positive" или "negative"
Изход
На конзолата трябва да се отпечата един ред:
•	Цената за престоят му в хотела, форматирана до втория знак след десетичната запетая.
Примерен вход и изход
Вход	Изход	Обяснения
("14", "apartment", "positive")	264.06	14 дни => 13 нощувки => 13 * 25.00 = 325 лв.
10 < 13 дни < 15 => 325 – 35%= 211.25 лв.
Оценката е positive => 211.25 + 25% = 264.0625 -> 264.06 лв.
                    Вход	                Изход	
("30", "president apartment", "negative")	730.80	
("12", "room for one person", "positive")	247.50	
("2", "apartment", "positive")	21.88
*/


function skiTrip(arg1, arg2, arg3) {

    let days = Number(arg1);
    let room = arg2;
    let rating = arg3;

    let sleep = days - 1;
    let finalPrice = 0;

    if(room === "room for one person") {
        finalPrice = sleep * 18;
    }
    if(room === "apartment") {
        if(room === "apartment" && days < 10) {
            finalPrice = (sleep * 25) * 0.7;
        }
        if(room === "apartment" && days >= 10 && days <= 15) {
            finalPrice = (sleep * 25) * 0.65;
        }
        if(room === "apartment" && days > 15) {
            finalPrice = (sleep * 25) * 0.5;
        }
    }
    if(room === "president apartment") {
        if(room === "president apartment" && days < 10) {
            finalPrice = (sleep * 35) * 0.9;
        }
        if(room === "president apartment" && days >= 10 && days <= 15) {
            finalPrice = (sleep * 35) * 0.85;
        }
        if(room === "president apartment" && days > 15) {
            finalPrice = (sleep * 35) * 0.8;
        }
    }

    if(rating === "positive") {
        finalPrice = finalPrice * 1.25;
    }
    if(rating === "negative") {
        finalPrice = finalPrice * 0.9;
    }
    console.log(finalPrice.toFixed(2));

}
skiTrip("2", "apartment", "positive");