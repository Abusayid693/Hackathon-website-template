import React from "react";
import "./styles.scss";
// import MytypedComponent from "../typing-effect/typing.js"
// import TOGGLE from "../toggle-button/toggle";
import AboutSection from "../About/about";
// import logo from "./logoo.png"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function NAVBAR() {
  return (
    <Router>
      <div>
        <nav className="nav_bar">
          <ul>
            <li>
              <Link to="/"><span className="links">Home </span> </Link>
            </li>
            <li>
              <Link to="/contact"><span className="links">Sponsors </span> </Link>
            </li>
            <li>
              <Link to="/projects"><span className="links">More info </span> </Link>
            </li>
          </ul>
          {/* <img className="myLogo" src={logo} /> */}
          {/* <TOGGLE/> */}
        </nav>

       {/* Keep parent route at bottom */}
        <Switch>
          <Route path="/contact">
          <AboutSection />

          </Route>
          <Route path="/links">
          <AboutSection />

          </Route>
          <Route path="/projects">
          <AboutSection />
          </Route>
          <Route path="/">
            <AboutSection />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Projects() {
  return <h2>Projects here</h2>;
}

function Contact() {
  return <h2>contact info</h2>;
}

function Links() {
  return <h2>Home</h2>;

}