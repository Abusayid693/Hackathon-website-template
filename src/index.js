import React from "react";
import ReactDOM from "react-dom";
// import Footer from "./components/footer/footer.jsx";
import NAV from "./components/navbar/App.jsx"
import {faqCollapse} from "./components/FAQ/faq.jsx"
// import {NightView} from "./components/toggle-button/toggle";

const rootElement = document.getElementById("body");
const footer = document.getElementById("footer");



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

// ReactDOM.render(
//   <div style={mystyle}>
// <Footer />
// </div>
// ,
// footer
// );


// Dropdown function



faqCollapse();
