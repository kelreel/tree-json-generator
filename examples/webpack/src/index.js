import "./css/style.scss";
import * as TreeGen from "../../../core";
import prettifyJSON from "prettify-json";

let inputForm = document.getElementById("input");
let outputForm = document.getElementById("output");

inputForm.value = `[{
  "node": {
    "name": "@randomName()",
    "age": "@randomInteger(14,99)",
    "email": "@randomEmail()",
    "registered": "@randomBoolean(0.79)",
    "child": "@child()"
  },
  "rootNodesNumber": 7,
  "childNodesNumber": [2, 5],
  "hasChildRate": 0.4,
  "maxLevel": 3
}]`;

let genButton = document.getElementById("generate");
genButton.addEventListener("click", () => {
  let config = inputForm.value;

  config = JSON.stringify(eval(config));
  config = JSON.parse(config);
  config = config[0];

  let res = TreeGen.generate(config);
  console.log(res);

  outputForm.value = prettifyJSON(res);
});
