const cafeBtn = document.querySelector("#cafe-btn");

const cafe = () => {
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
        const size = prompt(
            "Виберіть розмір:\nS, M, L\nРозмір напою впливає на вартість: M — +15 грн; L — +30 грн.",
        );

        const num = Number(prompt("Введіть кількість напоїв"));

        switch (size) {
            case "M":
                price += 15;
                break;
            case "L":
                price += 30;
                break;
        }

        console.log(
            "===== Замовлення =====\nНапій:",
            drink,
            "\nРозмір: ",
            size,
            " \nКількість:",
            num,
            " \nЦіна за одиницю:",
            price,
            "\nДо сплати:",
            price * num,
            "грн",
        );
    }
};

cafeBtn.addEventListener("click", cafe);
