function formatDate(date) {

let diff = Math.floor(now - date);//сколько миллисекунд прошло
let diffSec = Math.floor((now - date)/1000);//сколько секунд прошло
let diffMin = Math.floor((now - date)/1000/60);//сколько минут прошло

if (diff<1000) {
    return `Прямо сейчас`;
}
else if (diffSec<60) {
    return diffSec + ' секунд назад';
}
else if (diffMin<60) {
    return diffMin +' мин. назад';
}
else {
let options = {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    timezone: 'UTC'
};
let dateRight = new Date().toLocaleString("ru", options);
let dateRight2 = dateRight.replace(",", "");
return dateRight2;
}
};


alert( formatDate(new Date(new Date - 1)) ); // только что
alert( formatDate(new Date(new Date - 30 * 1000)) ); // 30 сек. назад
alert( formatDate(new Date(new Date - 5 * 60 * 1000)) ); // 5 мин. назад
alert( formatDate(new Date(new Date - 86400 * 1000)) ); // вчерашняя дата в формате "дд.мм.гг чч:мм"

