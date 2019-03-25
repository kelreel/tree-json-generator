const express = require("express");
const treeGen = require("../../core");

const { performance } = require("perf_hooks");

const app = express();

function testField() {
  return "field function works!";
}

const config = {
  node: {
    id: "@id()",
    parent: "@parent()",
    level: "@level()",
    name: "@randomName()",
    number: "@randomInteger(-20,5)",
    email: "@randomEmail()",
    child: "@child()"
  },
  rootNodesNumber: 10,
  childNodesNumber: [1, 4],
  hasChildRate: 0.3,
  maxLevel: 2
};

app.get("/", function(req, res) {
  let t1 = performance.now();
  res.send(treeGen.generate(config));
  console.log(`${Math.round(performance.now() - t1, 2)} ms`);
});

app.listen(3003, function() {
  console.log("Example app listening on port 3003!");
});
