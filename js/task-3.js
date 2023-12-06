"use strict";

/*function getElementWidth (content, padding, border) {
    return (Number.parseFloat(content) + (Number.parseFloat(padding) + Number.parseFloat(border)) * 2);
};

console.log(getElementWidth("50px", "8px", "4px"));
console.log(getElementWidth("60px", "12px", "8.5px"));
console.log(getElementWidth("200px", "0px", "0px"));*/


//Задача 3. Перевірка спаму

// function checkForSpam(message) {
//     const lowerCaseMessage = message.toLowerCase();
//     return lowerCaseMessage.includes(`sale`) || lowerCaseMessage.includes(`spam`); 
// }

// console.log(checkForSpam("Latest technology news")); 
// console.log(checkForSpam("JavaScript weekly newsletter")); 
// console.log(checkForSpam("Get best sale offers now!")); 
// console.log(checkForSpam("Amazing SalE, only tonight!")); 
// console.log(checkForSpam("Trust me, this is not a spam message")); 
// console.log(checkForSpam("Get rid of sPaM emails. Our book in on sale!")); 
// console.log(checkForSpam("[SPAM] How to earn fast money?"));


//Задача 3. Фільтрація масиву чисел
    
   /* Напиши функцію filterArray(numbers, value), яка приймає масив чисел (numbers) та значення (value) як параметри. Функція повинна повертати новий масив лише тих чисел із масиву numbers, які більші за значення value.

Усередині функції:

Створи порожній масив, у який будеш додавати підходящі числа.
Використай цикл для ітерації кожного елемента масиву numbers.
Використовуй умовний оператор if усередині циклу для перевірки кожного елемента и додавання до свого масиву.
Поверни свій новий масив з підходящими числами як результат.
Візьми код нижче і встав після оголошення своєї функції для перевірки коректності її роботи. У консоль будуть виведені результати її роботи.*/

function filterArray(numbers, value) {
    let filterArray = [];

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > value) {
            filterArray.push(numbers[i]);
        }
    }
    return filterArray;
}

console.log(filterArray([1, 2, 3, 4, 5], 3)); 
console.log(filterArray([1, 2, 3, 4, 5], 4)); 
console.log(filterArray([1, 2, 3, 4, 5], 5)); 
console.log(filterArray([12, 24, 8, 41, 76], 38)); 
console.log(filterArray([12, 24, 8, 41, 76], 20)); 