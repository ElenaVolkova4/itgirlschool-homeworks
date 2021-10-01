const moment = require('moment');
require('moment/locale/ru.js');

const Chart = require('chart.js');

const anime = require('animejs');


console.log('start-date');

let now = moment();
document.querySelector('#date').innerHTML = now.format("dddd, DD.MM.YYYY");
console.log('end-date');

console.log('start-chart');

let jsonDataTimeForStudy = `[
    0, 0, 0, 3, 4, 8, 31, 33, 35, 40
]`
let DataTimeForStudy = JSON.parse(jsonDataTimeForStudy);


const labels = [
    'Январь',
    'Февраль',
    'Март',
    'Апрель',
    'Май',
    'Июнь',
    'Июль',
    'Август',
    'Сентябрь',
    'Октябрь',
    'Ноябрь',
    'Декабрь',
  ];
  const data = {
    labels: labels,
    datasets: [{
      label: 'Уровень сложности обучения в школе itgirlschool, 3й поток, количество часов на обучение',
      backgroundColor: 'rgb(31, 56, 31)',
      borderColor: 'rgb(24, 161, 19)',
      data: DataTimeForStudy,
},
{
    label: 'Количество времени на учебу одной из учениц, часов в неделю',
    backgroundColor: 'rgb(255, 99, 132)',
    borderColor: 'rgb(207, 45, 153)',
    data: [10, 10, 10, 10, 10, 10, 10, 10, 10, 10],
}]
  };

  const config = {
    type: 'line',
    data: data,
    options: {}
  };

  let myChart = new Chart(
    document.getElementById('myChart'),
    config);

console.log('end-chart');


console.log('start-anime');

// Wrap every letter in a span
var textWrapper = document.querySelector('.ml1 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml1 .letter',
    scale: [0.3,1],
    opacity: [0,1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 600,
    delay: (el, i) => 70 * (i+1)
  }).add({
    targets: '.ml1 .line',
    scaleX: [0,1],
    opacity: [0.5,1],
    easing: "easeOutExpo",
    duration: 700,
    offset: '-=875',
    delay: (el, i, l) => 80 * (l - i)
  }).add({
    targets: '.ml1',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });

console.log('end-anime');
