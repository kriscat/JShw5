// цикл, который выводит четные числа от 0 до 100
for (let a = 0; a <= 100; ++a) {
    if (a % 2 == 0) {
        console.log(`Четное число: ${a}`);
    } else("Error");
};
// цикл, который выводит числа, которые делятся на 3 и на 5
for (let b = 0; b <= 100; ++b) {
    if (b % 3 == 0) {
        console.log(`Число делится на 3: ${b}`);
    }
    if (b % 5 == 0) {
        console.log(`Число делится на 5: ${b}`);
    } else("Error");
};
// цикл, который запрашивает ввод, пока не введено число, которое больше 100
let c;
do {
    c = prompt("Введите число, которое больше 100:,");
} while (c <= 100 && c);
// таблица умножения на 56
let num;
let multiplyNum = 56;
let n = prompt("Какое число вы хотите умножить на 56?", 1);
let multiply = n * multiplyNum;
for (n; 1 <= n <= 10; multiply) {
    alert(`${n} * ${multiplyNum} = ${multiply}`)
    break;
};