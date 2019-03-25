const randomInteger = require("../pipes/integer");
var nodes = 0;

/** MAIN FUNCTION */
exports.generate = function(config) {
  let tree = [];
  let rootNodesNumber = 1;
  const fields = Object.getOwnPropertyNames(config.node);

  /** ROOT NODES NUMBER CHECK */
  if (
    config.rootNodesNumber &&
    Array.isArray(config.rootNodesNumber) === false
  ) {
    rootNodesNumber = config.rootNodesNumber;
  } else if (
    config.rootNodesNumber &&
    Array.isArray(config.rootNodesNumber) === true &&
    config.rootNodesNumber.length === 2
  ) {
    rootNodesNumber = randomInteger(
      config.rootNodesNumber[0],
      config.rootNodesNumber[1]
    );
  }

  /** GENERATOR LOOP */
  for (let i = 0; i < rootNodesNumber; i++) {
    let node = {};
    for (let j = 0; j < fields.length; j++) {
      /** Check pipe */
      if (config.node[fields[j]] === "@child()") {
        node[fields[j]] = genChild(config, 0, node.id);
      } else if (config.node[fields[j]] === "@parent()") {
        node[fields[j]] = "root";
      } else if (config.node[fields[j]] === "@level()") {
        node[fields[j]] = 0;
      } else if (
        typeof config.node[fields[j]] === "string" &&
        config.node[fields[j]][0] == "@"
      ) {
        node[fields[j]] = eval(config.node[fields[j]].substr(1));
      } else {
        node[fields[j]] = config.node[fields[j]];
      }
    }
    nodes++;
    tree.push(node);
  }
  //console.log(nodes);
  return tree;
};

/** GENERATE CHILD FUNCTION */
function genChild(config, level, parent = "null") {
  let maxLevel = config.maxLevel;
  if (maxLevel === undefined) maxLevel = 3;

  if (level >= maxLevel) return;
  if (config.hasChildRate) {
    if (Math.random() >= config.hasChildRate) return [];
  }

  const fields = Object.getOwnPropertyNames(config.node);

  let tree = [];
  let childNodesNumber = 1;

  /** CHILD NODES NUMBER CHECK */
  if (
    config.childNodesNumber &&
    Array.isArray(config.childNodesNumber) === false
  ) {
    childNodesNumber = config.childNodesNumber;
  } else if (
    config.childNodesNumber &&
    Array.isArray(config.childNodesNumber) === true &&
    config.childNodesNumber.length === 2
  ) {
    childNodesNumber = randomInteger(
      config.childNodesNumber[0],
      config.childNodesNumber[1]
    );
  }

  /** GENERATOR LOOP */
  for (let i = 0; i < childNodesNumber; i++) {
    let node = {};
    for (let j = 0; j < fields.length; j++) {
      /** Check pipe */
      if (config.node[fields[j]] === "@child()") {
        node[fields[j]] = genChild(config, level + 1, node.id);
      } else if (config.node[fields[j]] === "@parent()") {
        node[fields[j]] = parent;
      } else if (config.node[fields[j]] === "@level()") {
        node[fields[j]] = level + 1;
      } else if (
        typeof config.node[fields[j]] === "string" &&
        config.node[fields[j]][0] == "@"
      ) {
        node[fields[j]] = eval(config.node[fields[j]].substr(1));
      } else {
        node[fields[j]] = config.node[fields[j]];
      }
    }
    nodes++;
    tree.push(node);
  }

  return tree;
}

/** IMPORT PIPES */
const randomFruit = require("../pipes/fruit");
const randomName = require("../pipes/name");
const randomEmail = require("../pipes/email");
const randomBoolean = require("../pipes/boolean");
const id = require("../pipes/id");

/** EXPORT PIPES */
exports.randomFruit = randomFruit;
exports.randomName = randomName;
exports.randomEmail = randomEmail;
exports.randomBoolean = randomBoolean;
exports.id = id;

exports.randomInteger = randomInteger;
