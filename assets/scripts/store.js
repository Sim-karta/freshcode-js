const price = Number(prompt("Введіть ціну товару"));
const num = Number(prompt("Введіть кількість товару"));

const paid = price * num;
let discount = 0;

if (paid >= 800) {
    discount = (paid / 100) * 5;
} else if (paid >= 500) {
    discount = (paid / 100) * 3;
}

const deliveryCh = Number(
    prompt(
        "Виберість спосіб доставки:\n- 1 — Самовивіз (0 грн);\n- 2 — Нова пошта (100 грн);\n- 3 — Кур'єр (150 грн).\nПри замовлені від 1000 грн доставка безкоштовна.",
    ),
);
let deliveryPrice;

if (paid - discount >= 1000) {
    deliveryPrice = 0;
} else {
    switch (deliveryCh) {
        case 1:
            deliveryPrice = 0;
            break;
        case 2:
            deliveryPrice = 100;
            break;
        case 3:
            deliveryPrice = 150;
            break;
    }
}

const finalPrice = paid - discount + deliveryPrice;

console.log("Ціна без знижки - ", paid);
console.log("Знижка - ", discount);
console.log("Доставка - ", deliveryPrice);
console.log("До сплати - ", finalPrice);
