'use strict';

/*
5.	Поздрав по име
Напишете функция, която получава име на човек и отпечатва "Hello, <name>!", където <name> е въведеното име от конзолата.
Насоки
1.	 Първо създайте нов JavaScript файл в съществуващата папка и го именувайте подходящо. Препоръчително е всеки скриптов файл да се казва, както името на задачата, чието решение съдържа.
2.	Съдържанието на новият файл ще се отвори в прозореца в дясно
 Създайте променливата name и запазете в нея името, което се подава от (input).
Изведете изхода на конзолата, като използвате следния шаблон: 
Как работи примерът? Методът console.log() ни позволява в кръглите скоби да записваме поредица от символи, които държат в себе си стойността на дадена променлива –  ${name} и я принтира на конзолата.
Забележете, че за да работи текстът  трябва да е ограден от символа ` , който разпознава обикновен текст и променлива. За да бъде разпозната една променлива, като такава, тя трябва да започва със символа $ и да бъде оградена в къдрави скоби  :  {  } .
3.	Стартирайте програмата с Ctrl + F5 и тествайте с различни входни примери. 
4.	За да получим резултат трябва да "повикаме" функцията и да й подадем входни данни:
*/

function greetings (input) {
    let name = (input);
    console.log(`Hello, ${name}!`);
}
greetings ('Spiro');