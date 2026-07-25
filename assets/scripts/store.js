const price = Number(prompt("Введіть ціну товару"));
const num = Number(prompt("Введіть кількість товару"));

const paid = price * num;
let discount = 0;

if (paid >= 800) {
    discount = (paid / 100) * 5;
} else if (paid >= 500) {
    discount = (paid / 100) * 3;
}

const finalPrice = paid - discount;

console.log("Ціна без знижки - ", paid);
console.log("Знижка - ", discount);
console.log("До сплати - ", finalPrice);
