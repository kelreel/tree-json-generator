const randomInteger = require("./integer");
const data = require("../data/names");

function random() {
  return data[randomInteger(0, data.length - 1)];
}

module.exports = random;
