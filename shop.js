let balance = 1000;
let beerCount = 100;
let beerPrice = 30;
let vineCount = 50;
let vinePrice = 90;
let pepsiCount = 80;
let pepsiPrice = 30;
let price = 0;
const appName = 'myShop';

function checkBalance() {
    return `Баланс: ${balance} грн`
}

function checkBeer() {
    return `Пиво: ${beerCount} шт`
}

function checkVine() {
    return `Вино: ${vineCount} шт`
}

function checkPepsi() {
    return `Пепсі: ${pepsiCount} шт`
}

function sellBeer(count) {
    if (count <= beerCount) {
        beerCount -= count;
        balance += count * beerPrice;
        price += count * beerPrice;
        return `Пиво: ${count} шт`
    }
    return `Вибачте, але на залишку пива менше ${beerCount} шт`
}

function sellVine(count) {
    if (count <= vineCount) {
        vineCount -= count;
        balance += count * vinePrice;
        price += count * vinePrice;
        return `Вино: ${count} шт`
    }
    return `Вибачте, але на залишку вина менше ${vineCount} шт`
}

function sellPepsi(count) {
    if (count <= pepsiCount) {
        pepsiCount -= count;
        balance += count * pepsiPrice;
        price += count * pepsiPrice;
        return `Пепсі: ${count} шт`
    }
    return `Вибачте, але на залишку пепсі менше ${pepsiCount} шт`
}

function sellAll() {
    return `Всього: ${price} грн`
}

export { checkBalance, checkBeer, checkVine, checkPepsi, sellBeer, sellVine, sellPepsi, sellAll, appName };