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

//добавление автоматически выбранного элемента
    const defaultModel = document.createElement("option");
    defaultModel.innerText = "Модель";
    modelsSelect.appendChild(defaultModel);

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
const carReleaseYearSelect = document.querySelector(".car-model");
carReleaseYearSelect.addEventListener("change", (e) => {
    const currentSelection = e.currentTarget.value; //какую модель выберем

    const carBrand = document.querySelector(".car-brand").value;
    const carModelsData = getCarModelDataByBrand(carBrand);
    const yearsForModel = carModelsData.find(model => model[0] === currentSelection)[2];


    // создаем options
    const ReleaseYearSelect = document.querySelector(".car-release-year");
    ReleaseYearSelect.innerHTML = "";

    //добавление автоматически выбранного элемента
    const defaultReleaseYear = document.createElement("option");
    defaultReleaseYear.innerText = "Год выпуска";
    ReleaseYearSelect.appendChild(defaultReleaseYear);

    yearsForModel.forEach(year => {
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

