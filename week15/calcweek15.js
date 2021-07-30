function block() {
    document.getElementById('resultSum').readOnly = true;
    document.getElementById('resultSubtract').readOnly = true;
    document.getElementById('resultMultiplication').readOnly = true;
    // document.getElementById('resultDivision').readOnly = true;
    // не нужен, потому что в div и так ничего нельзя вставить
}
block();


function addnum() {
    let num1 = document.getElementById('firstnumber').value;
    let num2 = document.getElementById('secondnumber').value;
    return [num1, num2];
}



// function sum() {
//     let [num1, num2] = addnum();
//     return Number(num1) + Number(num2);
// }
// можно и нужно проверять, что внесли именно числа (код с проверкой ниже)

function resultSum() {
    let resultSum1 = document.getElementById('resultSum');
    resultSum1.value = sum();
}

function subtract() {
    let [num1, num2] = addnum();
    return Number(num1) - Number(num2);
}

function resultSubtract() {
    let resultSubtract1 = document.getElementById('resultSubtract');
    resultSubtract1.value = subtract();
}

function multiplication() {
    let [num1, num2] = addnum();
    return Number(num1) * Number(num2);
}

function resultMultiplication() {
    let resultMultiplication1 = document.getElementById('resultMultiplication');
    resultMultiplication1.value = multiplication();
}

function division() {
    let num2 = document.getElementById('secondnumber').value
    if (num2 == 0) {
        alert('Нельзя делить на ноль!');
    } else {
        let [num1, num2] = addnum();
        return Number(num1) / Number(num2);
    }
}

function resultDivision() {
    let resultDivision1 = document.getElementById('resultDivision');
    resultDivision1.innerText = division();
}


function clearAllInput() {
    document.getElementById("firstnumber").value = "";
    document.getElementById('secondnumber').value = "";
    document.getElementById('resultSum').value = "";
    document.getElementById('resultSubtract').value = "";
    document.getElementById('resultMultiplication').value = "";
    document.getElementById('resultDivision').innerText = "";
}

// Второй вариант кнопки Очистить
document.getElementById("clearButton").onclick = function () {
    document.getElementById("firstnumber").value = "";
    document.getElementById('secondnumber').value = "";
    document.getElementById('resultSum').value = "";
    document.getElementById('resultSubtract').value = "";
    document.getElementById('resultMultiplication').value = "";
    document.getElementById('resultDivision').innerText = "";
}



// валидация (проверка)введенных чисел
function isNum1Valid(num1) {
    return !Number.isNaN(Number(num1));
}

function isNum2Valid(num2) {
    return !Number.isNaN(Number(num2));
}

function sum() {
    let [num1, num2] = addnum();
    if (isNum1Valid(num1) && isNum2Valid(num2)) {
        return Number(num1) + Number(num2)
    } else {
        alert("Введенные значения должны быть цифрами!")
    }
}