// Функция, возвращающая случайное целое число из переданного диапазона включительно. Источник: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random.
const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  if (min < 0) {
    return 'Пожалуйста, введите положительное число от нуля включительно';
  }

  if (min > max) {
    return 'Вы написали числа диапазона наоборот. Поменяйте значения друг с другом.';
  }

  if (min === max) {
    return 'Вы написали одинаковые числа диапазона. Пожалуйста, задайте разные значения.';
  }

  return Math.floor(Math.random() * (max - min + 1)) + min;
};

getRandomInt(0, 5);

// Функция, возвращающая случайное число с плавающей точкой из переданного диапазона включительно. Источник: https://learn.javascript.ru/number.
const getRandomFractional = (min, max, demicalPlaces) => {
  if (min < 0) {
    return 'Пожалуйста, введите положительное число от нуля включительно';
  }

  if (min > max) {
    return 'Вы написали числа диапазона наоборот. Поменяйте значения друг с другом.';
  }

  if (min === max) {
    return 'Вы написали одинаковые числа диапазона. Пожалуйста, задайте разные значения.';
  }

  const signs = Math.random() * (max - min + 1) + min;
  return Number(signs.toFixed(demicalPlaces));
};

getRandomFractional(2, 10);
