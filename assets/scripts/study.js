const firstName = prompt("Введіть ім'я");
const lastName = prompt("Введіть прізвище");
const specialty = prompt("Введіть спеціальність");
const course = prompt("Введіть курс");
const averageGrade = prompt("Введіть середній бал");

const isStudent = confirm("isStudent\n(ОК - true/ Відміна - false)");
const hasPaid = confirm("hasPaid\n(ОК - true/ Відміна - false)");
const isMentor = confirm("isMentor\n(ОК - true/ Відміна - false)");

console.log(
    "===== Профіль студента =====\nПІБ:",
    firstName,
    lastName,
    "\nСпеціальність:",
    specialty,
    "\nКурс: ",
    course,
    " \nСередній бал:",
    averageGrade,
);

if ((isStudent && hasPaid) || isMentor) {
    console.log("Ви маєте доступ до курсу");
} else {
    console.log("Ви не маєте доступ до курсу");
}
