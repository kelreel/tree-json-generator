const randomInteger = require("./integer");
const data = require("../data/names");

const emailEnd = [
  "@gmail.com",
  "@gmail.com",
  "@gmail.com",
  "@yahoo.com",
  "@yahoo.com",
  "@hotmail.com",
  "@hotmail.com",
  "@aol.com",
  "@outlook.com"
];

function random() {
  let text = "";
  let alphabet = "abcdefghijklmnopqrstuvwxyz0123456789";
  let additionalLength = randomInteger(1, 6);
  text += data[randomInteger(0, data.length)];
  for (var i = 0; i < additionalLength; i++) {
    text += alphabet.charAt(Math.floor(Math.random() * alphabet.length));
  }
  text += emailEnd[randomInteger(0, emailEnd.length)];

  return text;
}

module.exports = random;
