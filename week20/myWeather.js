
 //проверка сайта

 fetch("http://api.openweathermap.org/data/2.5/weather?q=Moscow&lang=ru&appid=5d3186dfdc5383721d1b779bb0d57b2c")
 .then(response => response.json())
 .then(user => console.log(user))//можно выводить войства, например, user.name или user.avatar_url
 .catch(error => console.log(error));





document.addEventListener("DOMContentLoaded", function (event) {
    getWeather('Moscow');
});

function getWeather(city) {

fetch('http://api.openweathermap.org/data/2.5/weather?q='+city+'&lang=ru&appid=5d3186dfdc5383721d1b779bb0d57b2c&units=metric')
.then(response => response.json())
.then(weather => {
    console.log(weather);
    document.querySelector('.city').innerText = weather.name;
    document.querySelector('.tempValue').innerText = Math.round(weather.main.temp)+'\u00B0C';
    document.querySelector('.humidity').innerText = weather.main.humidity + '%';
    document.querySelector('.weather').innerText = weather.weather[0].description;
})
.catch(err => console.log(err));
}





//ключ NASA h4nQmI1ycQq5542TInG5ANWHuCfxrOeqOnhAsIEv

// fetch('https://images-api.nasa.gov/search?q={0202795}&api_key=h4nQmI1ycQq5542TInG5ANWHuCfxrOeqOnhAsIEv'
// )
// .then(response => response.json())
// .then(weatherMars => {
//     console.log(weatherMars);
//     // document.querySelector('.universe').innerText = universe.url;
// })
// .catch(err => console.log(err));


//погода на марсе
//https://api.nasa.gov/insight_weather/?api_key=h4nQmI1ycQq5542TInG5ANWHuCfxrOeqOnhAsIEv&feedtype=json&ver=1.0

// https://images-api.nasa.gov/search?q={0202795}&api_key=h4nQmI1ycQq5542TInG5ANWHuCfxrOeqOnhA


//https://api.nasa.gov/planetary/apod?api_key=h4nQmI1ycQq5542TInG5ANWHuCfxrOeqOnhAsIEv

//https://api.nasa.gov/insight_weather/?api_key=h4nQmI1ycQq5542TInG5ANWHuCfxrOeqOnhAsIEv&feedtype=json&ver=1.0

//https://images-api.nasa.gov/search?q={0202795}&api_key=h4nQmI1ycQq5542TInG5ANWHuCfxrOeqOnhAsIEv

// https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=h4nQmI1ycQq5542TInG5ANWHuCfxrOeqOnhA

//https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=h4nQmI1ycQq5542TInG5ANWHuCfxrOeqOnhAsIEv