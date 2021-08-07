const CAR_BRANDS = ["mercedes", "audi", "BMW", "lexus"];
const MERCEDES_MODELS = [
    ["A-class", 20000, [2021, 2019, 2017]],
    ["B-class", 25000, [2021, 2019, 2017]],
    ["C-class", 40000, [2021, 2019, 2017]],
];
const AUDI_MODELS = [
    ["A1", 15000, [2020, 2018, 2017]],
    ["A2", 20000, [2020, 2018, 2017]],
    ["A3", 25000, [2020, 2018, 2017]],
];
const BMW_MODELS = [
    ["X1", 20000, [2019, 2018, 2017]],
    ["X2", 25000, [2019, 2018, 2017]],
    ["X3", 30000, [2019, 2018, 2017]],
];
const LEXUS_MODELS = [
    ["GX", 10000, [2018, 2017, 2016]],
    ["LX", 15000, [2018, 2017, 2016]],
    ["RX", 20000, [2018, 2017, 2016]],
];

//поле Модель
const carBrandSelect = document.querySelector(".car-brand");
carBrandSelect.addEventListener("change", (e) => {
    const currentSelection = e.currentTarget.value; //бренд машины, который мы выберем
    // const doesBrandExist = CAR_BRANDS.some(brand => brand === currentSelection);
    // if (!doesBrandExist) return;//проверка

    const carModelsData = getCarModelDataByBrand(currentSelection); //получили массивы по брендам
    const carModelsNames = carModelsData.map(carData => carData[0]); // вытягиваем первый элемент из всех массивов
    //можно .map заменить на for с push в другой пустой массив

    const modelsSelect = document.querySelector(".car-model");
    modelsSelect.innerHTML = "";
    carModelsNames.forEach(model => {
        const newOption = document.createElement("option");
        newOption.value = model;
        newOption.innerText = model;
        modelsSelect.appendChild(newOption);
    });
    modelsSelect.disabled = false;
    document.querySelector(".car-conf").disabled = false; //поле Комплектации тоже становится активным при выборе модели авто
});



// поле Год выпуска
const carReleaseYearSelect = document.querySelector(".car-release-year");
carReleaseYearSelect.addEventListener("change", (e) => {
    const currentSelection = e.currentTarget.value; //могу снова использовать? какую модель выберем

    // const carBrand = document.querySelector(".car-brand").value;
    // const carModel = document.querySelector(".car-model").value;
    // // const carModelsData = getCarModelDataByBrand(carBrand);
    // const carReleaseYearData = carModelsData.map(releaseYear => releaseYear[2]);//вытягиваем третий элемент (то есть весь массив с годами)
   
    // или???
    const carReleaseYearData = getCarReleaseYearDataByModel(currentSelection); 

    function getCarReleaseYearDataByModel(model) {
        let carReleaseYearData = [];
        if (model === "A-class") carReleaseYearData = MERCEDES_MODELS[0],[2];
        else if (model === "B-class") carReleaseYearData = AUDI_MODELS[1],[2];
        else if (model === "C-class") carReleaseYearData = BMW_MODELS[2],[2];
        return carReleaseYearData;
    }
// ...

   
    // const carModel = document.querySelector(".car-model").value; //нужно?
    // const carReleaseYearData = carModelsData.find(releaseYear => releaseYear[2] === releaseYear); //вытягиваем масив с годами

    // или так?
    // const carReleaseYears = carReleaseYearData.map(carData => carData[2]); // вытягиваем третий элемент из всех массивов (то есть весь массив с годами)


    // создаем options
    const ReleaseYearSelect = document.querySelector(".car-release-year");
    ReleaseYearSelect.innerHTML = "";
    carReleaseYears.forEach(year => {
        const newOption = document.createElement("option");
        newOption.value = year;
        newOption.innerText = year;
        ReleaseYearSelect.appendChild(newOption);
    });
    ReleaseYearSelect.disabled = false;
});



//кнопка
document.getElementById("calcCar").addEventListener("click", () => {
    const carBrand = document.querySelector(".car-brand").value;
    const carModel = document.querySelector(".car-model").value;

    const carModelData = getCarModelDataByBrand(carBrand);
    const chosenCarModelData = carModelData.find(carData => carData[0] === carModel);
    document.getElementById("price").innerHTML = chosenCarModelData[1];

});

function getCarModelDataByBrand(brand) {
    let carModelData = [];
    if (brand === "mercedes") carModelData = MERCEDES_MODELS;
    else if (brand === "audi") carModelData = AUDI_MODELS;
    else if (brand === "BMW") carModelData = BMW_MODELS;
    else if (brand === "lexus") carModelData = LEXUS_MODELS;
    return carModelData;
}

