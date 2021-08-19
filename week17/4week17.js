function generate () {
    document.getElementById('nums').innerHTML = "";
    document.getElementById('max').innerHTML = "";
    document.getElementById('min').innerHTML = "";
    document.getElementById('average').innerHTML = "";
    document.getElementById('sum').innerHTML = "";
    document.getElementById('multiplication').innerHTML = "";

//создаем функцию для генерации случайных чисел в заданном промежутке
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
  }

let nums = [];
for (let i=0; i<10; i++) {
    nums.push(getRandomIntInclusive(-10,10));
};//создаем массив с 10ю случайнвми числами в промежутке от -10 до 10ч
document.getElementById('nums').innerHTML += nums;

let max = Math.max.apply(null, nums);//получение из массива максимального числа
document.getElementById('max').innerHTML += max;

let min = Math.min.apply(null, nums);//получение из массива минимального числа
document.getElementById('min').innerHTML += min;

//среднее арифметическое
let average = nums.reduce((a, b) => a + b) / nums.length;
document.getElementById('average').innerHTML += average;

//сумма всех чисел
let sum = nums.reduce(function(previousValue, currentValue) {
    return previousValue + currentValue;
  });
  document.getElementById('sum').innerHTML += sum;

//произведение всех чисел
let multiplication = nums.reduce(function(previousValue, currentValue) {
    return previousValue * currentValue;
  });
  document.getElementById('multiplication').innerHTML += multiplication;
}

