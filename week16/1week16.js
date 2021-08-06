function sumInput() {
    let numbers = [];
    let sum = 0;
    let num = 0
    for (;;) {
        num = +prompt('Введите число:');
        if (!num || num === "") break;
        sum += num
        numbers.push(num);
    }
    console.log(numbers); //вывод массива (для себя)

    //сортировка
    function compareNumbers(num1, num2) {
        return num1 - num2;
    }
    numbers.sort(compareNumbers);

    //вывод
    alert('Введенные числа: ' + numbers);
    alert('Результат: ' + sum);
}


// второй вариант
function sumInput2() {
    let numbers2 = [];
    let sum2 = 0;

    for (let i = 0;; i++) {
        numbers2[i] = +prompt('Введите число:');
        if (!numbers2[i] || numbers2[i] === "") break;
        sum2 += numbers2[i];
        console.log(numbers2); //вывод массива (для себя)
    }

    //сортировка
    function compareNumbers(num1, num2) {
        return num1 - num2;
    }
    numbers2.sort(compareNumbers2);

    //вывод
    alert('Введенные числа: ' + numbers2);
    alert('Результат: ' + sum2);
}