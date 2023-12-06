"use strict";

/*function makeTransaction(quantity, pricePerDroid){
    const totalPrice=(quantity * pricePerDroid);
    console.log(`You ordered ${quantity} droids worth ${totalPrice} credits!`);
};

makeTransaction(5, 3000);
makeTransaction(3, 1000);
makeTransaction(10, 500);*/

/*function makeTransaction(quantity, pricePerDroid){
    const totalPrice=(quantity * pricePerDroid);
    return `You ordered ${quantity} droids worth ${totalPrice} credits!`;
    };
    
    console.log(makeTransaction(5, 3000));
    console.log(makeTransaction(3, 1000));
    console.log(makeTransaction(10, 500));*/


    //Задача 1. Замовлення дроїдів
    
    // function makeTransaction(quantity, pricePerDroid, customerCredits){
    //     const totalPrice=(quantity * pricePerDroid);

    //    if (totalPrice > customerCredits) {
    //      return `Insufficient funds!`;
    //  } else {
    //     return `You ordered ${quantity} droids worth ${totalPrice} credits!`;
    //  }
    //    }

    // console.log(makeTransaction(5, 3000, 23000)); 
    // console.log(makeTransaction(3, 1000, 15000)); 
    // console.log(makeTransaction(10, 5000, 8000)); 
    // console.log(makeTransaction(8, 2000, 10000)); 
    // console.log(makeTransaction(10, 500, 5000)); 



    //Задача 1. Генератор slug

    /*Напиши функцію slugify(title), яка приймає заголовок статті, параметр title і повертає slug, створений із цього рядка.

Значенням параметра title будуть рядки, слова яких розділені лише пробілами.
Усі символи slug повинні бути в нижньому регістрі.
Усі слова slug повинні бути розділені тире.*/

function slugify(title) {
    return title.toLowerCase().split(' ').join('-');
}

console.log(slugify("Arrays for begginers")); 
console.log(slugify("English for developer")); 
console.log(slugify("Ten secrets of JavaScript")); 
console.log(slugify("How to become a JUNIOR developer in TWO WEEKS")); 

  