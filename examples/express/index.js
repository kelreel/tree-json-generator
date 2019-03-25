const express = require("express");
const treeGen = require("../../core");

const app = express();

function testField() {
  return "field function works!";
}

const config = {
  node: {
    name: "@randomName()",
    number: "@randomInteger(-20,5)",
    email: "@randomEmail()",
    child: "@child()"
  },
  rootNodesNumber: 2,
  childNodesNumber: [0, 2],
  hasChildRate: 1,
  maxLevel: 1
};

app.get("/", function(req, res) {
  res.send(treeGen.generator(config));
});

app.listen(3003, function() {
  console.log("Example app listening on port 3003!");
});
