import React from "react";
import ReactDOM from "react-dom";


import NAV from "./components/navbar/App.jsx"
import LOADER from "./components/Loading/loading.jsx";
import TopDivision from "./components/top-division/top-division.js"

const rootElement = document.getElementById("body");
const loader = document.getElementById("loader");




ReactDOM.render(
<LOADER  />
,
loader
)






ReactDOM.render(
  <div>
<NAV />
<TopDivision />
</div>
,
  rootElement
);

