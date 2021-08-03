import React from "react";
import "./styles.scss";
// import MytypedComponent from "../typing-effect/typing.js"
// import TOGGLE from "../toggle-button/toggle";
import HomePage from "../Main-page/HomePage";
// import logo from "./logoo.png"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Discord from "../Routes/Discord";
import Twitter from "../Routes/Twitter";
import Linkedin from "../Routes/LinkedIn";
import Instagram from "../Routes/Instagram";
import Devpost from "../Routes/Devpost";

export default function NAVBAR() {
  return (
    <Router>
      <div>
        <nav className="nav_bar">
          <ul>
            <li>
              <Link to="/">
                <span className="links">Home </span>{" "}
              </Link>
            </li>
            <li>
              <Link to="/contact">
                <span className="links">Sponsors </span>{" "}
              </Link>
            </li>
            <li>
              <Link to="/projects">
                <span className="links">More info </span>{" "}
              </Link>
            </li>
          </ul>
          {/* <img className="myLogo" src={logo} /> */}
          {/* <TOGGLE/> */}
        </nav>

        {/* Keep parent route at bottom */}
        <Switch>
          <Route path="/discord" exact component={Discord} />
          <Route path="/linkedin" exact component={Linkedin} />
          <Route path="/devpost" exact component={Devpost} />
          <Route path="/twitter" exact component={Twitter} />
          <Route path="/instagram" exact component={Instagram} />
          <Route path="/contact">
            <HomePage />
          </Route>
          <Route path="/links">
            <HomePage />
          </Route>
          <Route path="/projects">
            <HomePage />
          </Route>
          <Route path="/">
            <HomePage />
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
