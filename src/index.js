import React from "react";
import ReactDOM from "react-dom";
import LOADER from "./components/Loading/loading.jsx";
import NAV from "./containers/navbar/App.jsx";

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

