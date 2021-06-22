import React from "react";
import ReactDOM from "react-dom";


import NAV from "./components/navbar/App.jsx"

const rootElement = document.getElementById("body");
const loader = document.getElementById("loader");



const mystyle={
  // background: "linear-gradient(0deg, #FFE8E8, #FFE8E8);"
};




ReactDOM.render(
  <div style={mystyle}>
<NAV />
</div>
,
  rootElement
);

