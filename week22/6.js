let jsonCat = `{
    "name":"Пушистик",
    "age":"One" 
}`;

try {
    let cat = JSON.parse(jsonCat);
    cat.age = +cat.age;
    // console.log(cat.age)
    
    if (isNaN(cat.age)==true) {
        throw new TypeError('Некорректный формат данных: возраст должен быть указан числом.');
    }
    console.log(cat.age)
    // console.log(typeof(cat.age))
    
    }
    catch (error) {
        console.log('Упс! Подробнее: ' + error.message)
    }