const celsius = prompt("Введите температуру в градусах Цельсия:");
const fahrenheit = (9 / 5) * Number(celsius) + 32;
// const roundedFahrenheit = fahrenheit.toFixed(1);
const roundedFahrenheit = Math.round(fahrenheit * 10) / 10;
alert(`Цельсий: ${celsius}, Фаренгейт: ${roundedFahrenheit}`);
