function subtraction(a, b) {
  return Number(a) - Number(b);
}

function division(a, b) {
  return Number(a) / Number(b);
}

function multiplication(a, b) {
  return Number(a) * Number(b);
}

function percentage(value, percent) {
  return Number(value) * Number(percent) / 100;
}

function getWholeNumberPart(number) {
  return Math.trunc(Number(number));
}

function getEvenNumbers(numbers) {
  return numbers
    .map(Number)
    .filter(n => Number.isInteger(n) && n % 2 === 0);
}


function getMaxNumber(numbers) {
  const validNumbers = numbers
    .map(Number)
    .filter(n => !Number.isNaN(n));

  return Math.max(...validNumbers);
}


function getMinAndMaxNumbers(numbers) {
  const validNumbers = numbers
    .map(Number)
    .filter(n => !Number.isNaN(n));

  return {
    min: Math.min(...validNumbers),
    max: Math.max(...validNumbers)
  };
}


function arithmeticMeans(numbers) {
  if (numbers.length === 0) return NaN;
  const sum = numbers.reduce((acc, n) => acc + Number(n), 0);
  return sum / numbers.length;
}


function getVowels(str) {
  const vowels = 'aeiouyAEIOUY';
  return str.split('').filter(char => vowels.includes(char));
}

function cancatString(str) {
  return str.map(item => String(item)).join('');
}

function splitString(str, divider) {
  return str.split(divider);
}

function hasSubString(str, subStr) {
  return str.includes(subStr);
}

function isLowerCase(char) {
  return char === char.toLowerCase() && char !== char.toUpperCase();
}

module.exports = {
  subtraction,
  division,
  multiplication,
  percentage,
  getWholeNumberPart,
  getEvenNumbers,
  getMaxNumber,
  getMinAndMaxNumbers,
  arithmeticMeans,
  getVowels,
  cancatString,
  splitString,
  hasSubString,
  isLowerCase
};
