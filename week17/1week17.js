function check () {

let fio = document.getElementById('user_fio').value;
// let fio = " цвеТкова   АлИса    алексанДровна";
let fioCleanWhitespace = fio.trim(fio); //убрали пробелы в начале и в конце строки
let fioCleanAllWhitespace = fioCleanWhitespace.replace(/\s+/g, ' ');//убрали пробелы внутри с помощью регулярного выражения /\s+/g (то есть несколько пробелов подряд заменили одним пробелом)
// console.log(fioCleanAllWhitespace);

let arr = fioCleanAllWhitespace.split(" ");
// console.log(arr);


let userName = arr[0];
let userNameRight = userName[0].toUpperCase()+(userName.slice(1)).toLowerCase();
// console.log(userNameRight)
document.getElementById('user_name').innerHTML = userNameRight;

let userSurname = arr[1];
let userSurnameRight = userSurname[0].toUpperCase()+(userSurname.slice(1)).toLowerCase();
// console.log(userSurnameRight)
document.getElementById('user_surname').innerHTML = userSurnameRight;

let userMiddleName = arr[2];
let userMiddleNameRight = userMiddleName[0].toUpperCase()+(userMiddleName.slice(1)).toLowerCase();
// console.log(userMiddleNameRight)
document.getElementById('user_middle_name').innerHTML = userMiddleNameRight;

};






