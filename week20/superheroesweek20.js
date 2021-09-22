
let json = `[{
    "heroName": "Бэтмен",
    "alterEgo": "Брюс Уэйн",
    "universe": "DC Comics",
    "superPower": "интеллект, обширные познания, знания боевых искусств, ловкость",
    "details": "По популярности человек-летучая мышь может сравниться только с Суперменом. Его образ кажется очень мистическим и мрачным: черный костюм с развевающимся плащом, устрашающий Бэтмобиль, штаб-квартира в сырой пещере. Его биография настолько же темна, как и образ. В детстве у него на глазах убили родителей, и юный Брюс поклялся всеми силами защищать родной Готэм от преступности.Брюс знаменит, несмотря на пожилой возраст: первый выпуск с его участием вышел аж в 1939 году. С каждым годом популярность только крепнет. Большую роль в этом сыграли экранизации: Темный рыцарь, сериал Готэм и несколько одноименных картин. Главная причина такой любви среди фанатов — мысль, что каждый может стать Бэтменом.<br>Если подумать, это один из немногих героев, кто добился своего положения за счет ума и упорства, а не за счет мутаций."
}, {
    "heroName": "Супермен",
    "universe": "DC Comics",
    "alterEgo": "Кларк Кент",
    "superPower": "непробиваемость, суперсила, полет, самоисцеление, суперзрение и суперслух, классный костюм",
    "details": "полная противоположность своему противнику Бэтмену. Если Брюс Уэйн был простым человеком и стал героем, то Супермен героем родился, но вынужден был изображать выходца из бедной канзасской семьи. Последний представитель планеты Криптон был отправлен на Землю прямо перед тем, как его родина была уничтожена.  <br>Супермен — некий хамелеон от мира комиксов. В своем первом выпуске в 1938 году он был просто человек-огромный мускул, который умел только разбивать стены и выбивать двери. Позднее к его умениям добавилась способность летать. Дальше у многочисленных воплощений Кларка, от подростка в «Тайнах Смоллвиля» до величественного «Человека из стали», разный уровень и количество суперспособностей. Неизменным остается его слабое место — уязвимость к Криптониту, радиоактивному веществу с родной планеты."
}, {
    "heroName": "Железный человек",
    "universe": "Marvel Comics",
    "alterEgo": "Тони Старк",
    "superPower": "высокий уровень интеллекта, широкие познания науки и техники, связь со всемирной паутиной, бронекостюмы",
    "details": "пожалуй, самый популярный современный супергерой. У него много общего с мрачной птицей ночи Бэтменом: оба потеряли родителей в детстве, стали борцами с преступностью без особых сверхсил, невероятно богатые. Только если Бэтменом восхищаются, то Тони Старка — обожают :) То ли дело в шикарной актерской игре Роберта Дауни мл., который выбил роль у Николаса Кейджа и Тома Круза, то ли в хорошо прописанном персонаже. <br>Прототипом для героя послужили Илон Маск и изобретатель Говард Хьюз. Железный Человек не всегда ходил в красном модном костюме: в своих первых версиях 1963 года он был скромного серого цвета. Увы, в киновоплощении бронекостюм даже не из металла — его делали из пластика и стекловолокна."
}, {
    "heroName": "Дэдпул",
    "universe": "Marvel Comics",
    "alterEgo": "Уэйд Уинстон Уилсон",
    "superPower": "высокий болевой порог, регенерация и бессмертие, сверхчеловеческая иммунная система",
    "details": "как и Росомаха из Людей Икс, Дэдпул был подвергнут опытам по программе «Оружие Икс». Ученые попытались исцелить его рак, привив его клеткам способность к регенерации. Но что-то пошло не так, и Дэдпул остался изуродованным и психически нестабильным. Это единственный супергерой из списка, который однозначно не на стороне добра. Дэдпул наслаждается насилием. <br>Первоначально появившись в основной Вселенной Marvel, он получил альтернативные варианты в других реальностях Мультивселенной. Что оставалось неизменным — его циничное, черное чувство юмора: за него Дэдпула прозвали «Болтливым наемником»."
}]`;

//проверка
let hero = JSON.parse(json);//парсим героя (переводим в объект)

//ВАРИАНТ 1

document.addEventListener("DOMContentLoaded", function (event) {
showInfoBatman();
showinfoSuperman();
showinfoIronman();
showinfoDeadpool();

if (localStorage.getItem('ratingBatman') != null)// если в локальном хранилище уже есть оценка, то..
{
    document.querySelector('.ratingBatman').selectedIndex = localStorage.getItem('ratingBatman');
}

if (localStorage.getItem('ratingSuperman') != null)// если в локальном хранилище уже есть оценка, то..
{
    document.querySelector('.ratingSuperman').selectedIndex = localStorage.getItem('ratingSuperman');
};

if (localStorage.getItem('ratingIronman') != null)// если в локальном хранилище уже есть оценка, то..
{
    document.querySelector('.ratingIronman').selectedIndex = localStorage.getItem('ratingIronman');
};
});


function showInfoBatman() {
    let hero = JSON.parse(json);//парсим героя (переводим в объект)

    let heroInfo = "";
    heroInfo += `<div class='infoBatman'>
    <h3>${hero[0].heroName}</h3>
    <div class='title'>Альтер эго: <span>${hero[0].alterEgo}</span></div>
    <div class='title'>Вселенная: <span>${hero[0].universe}</span></div>
    <div class='title'>Суперсилы: <span>${hero[0].superPower}</span></div>
    <div class='title'>Подробнее: <span>${hero[0].details}</span></div>
    </div>`
    document.getElementById("infoBatman").innerHTML = heroInfo;
};


function showinfoSuperman() {
    let hero = JSON.parse(json);//парсим героя (переводим в объект)

    let heroInfo = "";
    heroInfo += `<div class='infoSuperman'>
    <h3>${hero[1].heroName}</h3>
    <div class='title'>Альтер эго: <span>${hero[1].alterEgo}</span></div>
    <div class='title'>Вселенная: <span>${hero[1].universe}</span></div>
    <div class='title'>Суперсилы: <span>${hero[1].superPower}</span></div>
    <div class='title'>Подробнее: <span>${hero[1].details}</span></div>
    </div>`
    document.getElementById("infoSuperman").innerHTML = heroInfo;
};

function showinfoIronman() {
    let hero = JSON.parse(json);//парсим героя (переводим в объект)

    let heroInfo = "";
    heroInfo += `<div class='infoIronman'>
    <h3>${hero[2].heroName}</h3>
    <div class='title'>Альтер эго: <span>${hero[2].alterEgo}</span></div>
    <div class='title'>Вселенная: <span>${hero[2].universe}</span></div>
    <div class='title'>Суперсилы: <span>${hero[2].superPower}</span></div>
    <div class='title'>Подробнее: <span>${hero[2].details}</span></div>
    </div>`
    document.getElementById("infoIronman").innerHTML = heroInfo;
};

function showinfoDeadpool() {
    let hero = JSON.parse(json);//парсим героя (переводим в объект)

    let heroInfo = "";
    heroInfo += `<div class='infoDeadpool'>
    <h2>${hero[3].heroName}</h2>
    <div class='title'>Альтер эго: <span>${hero[3].alterEgo}</span></div>
    <div class='title'>Вселенная: <span>${hero[3].universe}</span></div>
    <div class='title'>Суперсилы: <span>${hero[3].superPower}</span></div>
    <div class='title'>Подробнее: <span>${hero[3].details}</span></div>
    </div>`
    document.getElementById("infoDeadpool").innerHTML = heroInfo;
};



//ОЦЕНКА

function chooseRatingBatman() {

    let savedRatingBatman = document.querySelector(".ratingBatman").selectedIndex;
    if (localStorage.getItem('ratingBatman')===null)// если в локальном хранилище нет оценки
{
    localStorage.setItem('ratingBatman', JSON.stringify(savedRatingBatman));//то добавляем оценку
}
};

function chooseRatingSuperman() {

    let savedRatingBatman = document.querySelector(".ratingSuperman").selectedIndex;
    if (localStorage.getItem('ratingSuperman')===null)// если в локальном хранилище нет оценки
{
    localStorage.setItem('ratingSuperman', JSON.stringify(savedRatingBatman));//то добавляем оценку
}
};

function chooseRatingSIronman() {

    let savedRatingBatman = document.querySelector(".ratingIronman").selectedIndex;
    if (localStorage.getItem('ratingIronman')===null)// если в локальном хранилище нет оценки
{
    localStorage.setItem('ratingIronman', JSON.stringify(savedRatingBatman));//то добавляем оценку
}
};

function chooseRatingDeadpool() {

    let savedRatingBatman = document.querySelector(".ratingDeadpool").selectedIndex;
    if (localStorage.getItem('ratingDeadpool')===null)// если в локальном хранилище нет оценки
{
    localStorage.setItem('ratingDeadpool', JSON.stringify(savedRatingBatman));//то добавляем оценку
}
}
