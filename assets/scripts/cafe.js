const сhoice = Number(
    prompt(
        "Виберіть напій:\n- 1 — Чай (50 грн);\n- 2 — Кава (70 грн);\n- 3 — Сік (60 грн);\n- 4 — Вода (30 грн).\n",
    ),
);

let drink;
let price;

switch (сhoice) {
    case 1:
        drink = "Чай";
        price = 50;
        break;
    case 2:
        drink = "Кава";
        price = 70;
        break;
    case 3:
        drink = "Сік";
        price = 60;
        break;
    case 4:
        drink = "Вода";
        price = 30;
        break;
    default:
        drink = "-";
}

if (drink === "-") {
    console.log(
        "Помилка! Ваше замовлення неможливо обробити через некоректний вибір",
    );
} else {
    console.log(
        "===== Замовлення =====\nНапій:",
        drink,
        "\nВартість:",
        price,
        "грн",
    );
}
