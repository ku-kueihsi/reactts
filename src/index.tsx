import * as React from "react";
import * as ReactDOM from "react-dom";

import { Hello, ShoppingList, Square, Board } from "./components/hello";

// ReactDOM.render(
//   <Hello compiler="TypeScript" framework="React" />,
//   document.getElementById("example")
// );


ReactDOM.render(
  // <ShoppingList name="Mark" />,
  // document.getElementById("example")
  <Board />,
  document.getElementById("example")
);