const order = "Order#1456; date=2026-01-26 09:07:05; amount=15.3";

// преобразовать строку в формат:
// Заказ № 1456 от 26/01/2026 09:07 на сумму 16 рублей

const hashIndex = order.indexOf("#");
const firstSemicolonIndex = order.indexOf(";");
const orderNumber = order.substring(hashIndex + 1, firstSemicolonIndex);

const getDateIndex = order.indexOf("date=") + 5;
const year = order.substring(getDateIndex, getDateIndex + 4);
const month = order.substring(getDateIndex + 5, getDateIndex + 7);
const day = order.substring(getDateIndex + 8, getDateIndex + 10);
const time = order.substring(getDateIndex + 11, getDateIndex + 16);

const amountIndex = order.indexOf("amount=") + 7;
const amountValue = order.substring(amountIndex);
const orderAmount = Math.ceil(parseFloat(amountValue));

console.log(`Заказ № ${orderNumber} от ${day}/${month}/${year} ${time} на сумму ${orderAmount} рублей`);
