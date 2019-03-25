function randomInteger(min = 0, max = 9999999999) {
  let result = min - 0.5 + Math.random() * (max - min + 1);
  result = Math.round(result);
  return result;
}

module.exports = randomInteger;
