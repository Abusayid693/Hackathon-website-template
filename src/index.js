import React from "react";
import ReactDOM from "react-dom";


import NAV from "./components/navbar/App.js"

import TopDivision from "./components/top-division/top-division.js"

const rootElement = document.getElementById("nav-bar");



ReactDOM.render(
  <div>
<NAV />
<TopDivision />
</div>
,
  rootElement
);

