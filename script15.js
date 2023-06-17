//Задаем переменную для контейнера с городами и значениями температур
let container = document.getElementById("container");
//Создаем масиив для температур
let temps = [];
//Цикл для запроса температур от пользователя
for (let city of cities){
  temps.push(prompt((`Введите температуру для города ` + `${city}`),''));
};
//Клонируем массив для сортировки
let minMaxTemps = temps.map((item)=>item);
//Сортируем массив
minMaxTemps.sort(function (a, b) {
  return b-a;
});
//Задаем переменные для элементов максим. и миним. температуры
let maxtemp = document.getElementById("maxtemp");
let mintemp = document.getElementById("mintemp");
//Присваивам значения из массива с отсортированной температурой
maxtemp.textContent = minMaxTemps[0];
mintemp.textContent = minMaxTemps[4];
//Цикл для создания блока с городами и значениями температур
for (let i = 0; i < cities.length; i++) {
  //Создаем новый html элемент, подставляем переменную
  let newP = document.createElement('p');
  newP.innerHTML =
    `<p>Температура в г.
    <span class="city" id="city`+`${i}`+`"></span> :
    <span class="temp" id="temperature`+`${i}`+`">0</span>
    °C</p>`;
  container.appendChild(newP);
  //Задаем переменные для html-элементов
  let citytown = document.getElementById("city" + `${i}`);
  let temperature = document.getElementById("temperature" + `${i}`);
  //Присваиваем значения из массива
  citytown.textContent = cities[i];
  temperature.textContent = temps[i];
};
