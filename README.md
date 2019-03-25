<h1 align="center"><img height="150" src="./docs/icon.png" /><br>Tree JSON Generator</h1>

<p align="center">
  <a href="https://github.com/kamranahmedse/driver.js/blob/master/license">
    <img src="https://img.shields.io/badge/License-MIT-yellow.svg" />
  </a>
  <a href="https://npmjs.org/package/tree-json-generator">
    <img src="https://badge.fury.io/js/tree-json-generator.svg" alt="version" />
  </a>
</p>

<p align="center">
  <b>More than 150 000 nodes per second!</b></br>
  <b>Simple library for generating JSON trees</b></br>
  <sub>No external dependency, highly customizable <sub>
</p>
  
<h2 align="center">
  <a href="https://kanitelk.github.io/tree-json-generator/">DEMO</a>
</h2>

## Installation

You can install it using `yarn` or `npm`

```bash
npm install tree-json-generator
# or
yarn add tree-json-generator
```

![](./docs/split.png)

## Usage

<b>NodeJS:</b>

```javascript
const TreeGen = require("tree-json-generator");
```

<b>WebPack:</b>

```javascript
import * as TreeGen from "tree-json-generator";
```

<b>Use `generate(config)` for generating tree</b>

```javascript
const config = {
  node: { // Node fields, required
    id: "@id()", // Pipes
    parent: "@parent()",
    level: "@level()",
    name: "@randomName()", 
    age: "@randomInteger(14,99)",
    email: "@randomEmail()",
    registered: "@randomBoolean(0.79)",
    child: "@child()" // Child field pointer (not required, if children are not needed)
  },
  rootNodesNumber: 7, // Number of root nodes
  childNodesNumber: [2, 5], // Number of children nodes (from 2 to 5)
  hasChildRate: 0.4, // Probability of children
  maxLevel: 3 // Max nesting
}

let tree = TreeGen.generate(config);
```

![](./docs/split.png)

## Pipes

This allows you to generate fields values for the nodes.

<b>Warning:</b> custom user functions only assign the same value to all nodes

<b>Remember:</b> Pipes are strings

Prebuilded pipes:

<b>`"@id()"`</b> 

Random node ID

<b>`"@child()"`</b> 

Child field pointer

<b>`"@parent()"`</b> 

Field with parent node ID. (For this field, a field with an `"@id"` pipe before required.

<b>`"@level()"`</b> 

Node level

<b>`"@randomName()"`</b> 

Random name

<b>`"@randomFruit()"`</b> 

Random fruit

<b>`"@randomEmail()"`</b> 

Random E-Mail

<b>`"@randomInteger(min, max)"`</b> 

Random Integer from range

<b>`"@randomBoolean(value = 0.5)"`</b> 

Random Boolean (value - coefficient)

![](./docs/split.png)

## Config API

<b>`node: {}`</b> 

Required. Contains node fields with pipes.

<b>`rootNodesNumber:`</b> 

Not required. Number (5) or array range ([1, 40]). Default is 1.

<b>`childNodesNumber:`</b> 

Not required. Number (9) or array range ([1, 15]). Default is 1.

<b>`maxLevel:`</b> 

Not required. Max node level. Number (3). Default is 3.

<b>`hasChildRate:`</b> 

Not required. The probability that the node has children. From 0 to 1. Default is 1.

