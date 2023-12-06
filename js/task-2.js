"use strict";

/*function getShippingMessage(country, price, deliveryFee) {
const totalPrice=(price + deliveryFee);
console.log(`Shipping to ${country} will cost ${totalPrice} credits`);
};

getShippingMessage("Australia", 120, 50); 
getShippingMessage("Germany", 80, 20); 
getShippingMessage("Sweden", 100, 20);*/

/*function getShippingMessage(country, price, deliveryFee) {
    const totalPrice=(price + deliveryFee);
    return `Shipping to ${country} will cost ${totalPrice} credits`;
    };
    
    console.log(getShippingMessage("Australia", 120, 50)); 
    console.log(getShippingMessage("Germany", 80, 20)) 
    console.log(getShippingMessage("Sweden", 100, 20));*/


    //Задача 2. Форматування повідомлення

//   function formatMessage(message, maxLength) {
//     if (message.length <= maxLength) {
//         return message;
//     } else {
//         return message.slice(0, maxLength) + '...';
//     }
// }

//     console.log(formatMessage("Curabitur ligula sapien", 16)); 
//     console.log(formatMessage("Curabitur ligula sapien", 23)); 
//     console.log(formatMessage("Vestibulum facilisis purus nec", 20)); 
//     console.log(formatMessage("Vestibulum facilisis purus nec", 30)); 
//     console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 15)); 
//     console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 41)); 



//Задача 2. Композиція масивів

/* Напиши функцію під назвою makeArray, яка приймає три параметри: firstArray (масив), secondArray (масив) і maxLength (число). Функція повинна створювати новий масив, який містить усі елементи з firstArray, а потім усі елементи з secondArray.

Якщо кількість елементів у новому масиві перевищує maxLength, функція повинна повернути копію масиву з довжиною maxLength елементів.
В іншому випадку функція повинна повернути весь новий масив.
Візьми код нижче і встав після оголошення своєї функції для перевірки коректності її роботи. У консоль будуть виведені результати її роботи.*/

function makeArray(firstArray, secondArray, maxLength) {
    let newArray = firstArray.concat(secondArray);

    if (newArray.maxLength > maxLength) {
        return newArray.slice(0, maxLength);
    }

    return newArray;
}

console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3)); 
console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4)); 
console.log(makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3)); 
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2)); 
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4)); 
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0));

  