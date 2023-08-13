// Есть массив цветов в hex-формате и кнопки Start и Stop.

// <button type="button" data-action="start">Start</button>
// <button type="button" data-action="stop">Stop</button>
// const colors = [
//   '#FFFFFF',
//   '#2196F3',
//   '#4CAF50',
//   '#FF9800',
//   '#009688',
//   '#795548',
// ];
// Напиши скрипт, который после нажатия кнопки Start, раз в секунду меняет цвет фона body на случайное значение из массива используя инлайн-стиль. При нажатии на кнопку Stop, изменение цвета фона должно останавливаться.

// ⚠️ Учти, на кнопку Start можно нажать бесконечное количество раз. Сделай так, чтобы пока изменение темы запушено, кнопка Start была не активна.

// Для генерации случайного числа (индекс элемента массива цветов), используй функцию randomIntegerFromInterval.

// const randomIntegerFromInterval = (min, max) => {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// };



import colors from "./colors.js";

const startBTN = document.querySelector('[data-action="start"]');
const stopBTN = document.querySelector('[data-action="stop"]');
let bodyColors = null;

let i = 0;
const body = document.querySelector('#body');


startBTN.addEventListener("click", () => {
    startBTN.disabled = true;
    bodyColors = setInterval(() => {
       
        i = randomIntegerFromInterval(0, colors.length - 1);
        console.log(i);
        body.style.backgroundColor = colors[i];
        
    }, 2000);
   
    
});


stopBTN.addEventListener("click", () => {
    startBTN.disabled = false;
    clearInterval(bodyColors);
})

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

