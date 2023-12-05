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

  function formatMessage(message, maxLength) {
    if (message.length <= maxLength) {
        return message;
    } else {
        return message.slice(0, maxLength) + '...';
    }
}

    console.log(formatMessage("Curabitur ligula sapien", 16)); 
    console.log(formatMessage("Curabitur ligula sapien", 23)); 
    console.log(formatMessage("Vestibulum facilisis purus nec", 20)); 
    console.log(formatMessage("Vestibulum facilisis purus nec", 30)); 
    console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 15)); 
    console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 41)); 

