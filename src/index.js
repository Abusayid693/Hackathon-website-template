import React from "react";
import ReactDOM from "react-dom";
import NAV from "./components/navbar/App.jsx";
import LOADER from "./components/Loading/loading.jsx";

const rootElement = document.getElementById("body");
const footer = document.getElementById("footer");

ReactDOM.render(
  <div>
    <NAV />
  </div>,
  rootElement
);

ReactDOM.render(
  <div>
    <LOADER />
  </div>,
  footer
);

