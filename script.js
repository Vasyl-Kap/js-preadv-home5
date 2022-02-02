// --- TASK #1 --- //

console.log('ЗАВДАННЯ №1');

function summa() {
    let count = 0;
    return function innerFunction(num) {
        count = count + num;
        console.log(`sum(${num}) = `, count);
    }
}

let sum = summa();
sum(3);
sum(5);
sum(228);

// --- TASK #2 --- //

console.log('ЗАВДАННЯ №2');

import { checkBalance, checkBeer, checkVine, checkPepsi, sellBeer, sellVine, sellPepsi, sellAll, appName } from './shop.js';

console.log(appName);
console.log('Баланс на початок робочого дня:');
console.log(checkBalance());
console.log(checkBeer());
console.log(checkVine());
console.log(checkPepsi());
console.log('Чек:');
console.log(sellBeer(10));
console.log(sellVine(5));
console.log(sellPepsi(10));
console.log(sellAll());
console.log('Баланс після продажі:');
console.log(checkBalance());
console.log(checkBeer());
console.log(checkVine());
console.log(checkPepsi());
console.log(sellBeer(100));
