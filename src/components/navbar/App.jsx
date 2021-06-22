import React from "react";
import "./styles.css";
// import MytypedComponent from "../typing-effect/typing.js"
import TOGGLE from "../toggle-button/toggle";
import AboutSection from "../About/about";

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
              <Link to="/contact"><span className="links">contact me </span> </Link>
            </li>
            <li>
              <Link to="/projects"><span className="links">projects </span> </Link>
            </li>
            <li>
              <Link to="/links"><span className="links">Links </span> </Link>
            </li>
          </ul>
          <TOGGLE/>
        </nav>

       {/* Keep parent route at bottom */}
        <Switch>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/links">
            <Links />
          </Route>
          <Route path="/projects">
            <Projects />
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