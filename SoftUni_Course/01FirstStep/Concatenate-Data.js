'use strict';
/*
6.	Съединяване на текст и числа
Напишете функция, която получава: име, фамилия, възраст и град и печата съобщение от следния вид: "You are <firstName> <lastName>, a <age>-years old person from <town>."
Насоки
1.	Добавете към текущото Visual Studio Code решение още един JavaScript файл с име "Concatenate-Data".
2.	Приемете от конзолата входните данни (fname, lname, age, town)
3.	Изведете на конзолата форматирания изход.
4.	Стартирайте програмата с Ctrl + F5 и тествайте с различни входни примери. За да изведете локално резултат на конзолата, трябва да извикате функцията и да подадете входни данни в реда, в който очаквате да ги получите:
*/

function concatenateData (firstName, lastName, age, town) {
    console.log(`You are ${firstName} ${lastName}, a ${age}-years old person from ${town}.`);
}
concatenateData ('Milen', 'Stoilov', '43', 'Petrich');