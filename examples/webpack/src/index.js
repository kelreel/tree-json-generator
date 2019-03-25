import "./css/style.scss";
import * as TreeGen from "../../../core";

const config = {
  node: {
    name: "@randomName()",
    age: "@randomInteger(14,99)",
    email: "@randomEmail()",
    registered: "@randomBoolean(0.79)",
    child: "@child()"
  },
  rootNodesNumber: 7,
  childNodesNumber: [2, 5],
  hasChildRate: 0.4,
  maxLevel: 3
};

console.log(TreeGen.generator(config));
