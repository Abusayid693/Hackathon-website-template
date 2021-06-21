import React from "react";
import "./styles.css";
import MytypedComponent from "../typing-effect/typing.js"
import TOGGLE from "../toggle-button/toggle";


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
              <Link to="/about"><span className="links">Home </span> </Link>
            </li>
            <li>
              <Link to="/contact"><span className="links">Home </span> </Link>
            </li>
            <li>
              <Link to="/links"><span className="links">Home </span> </Link>
            </li>
          </ul>
          <TOGGLE/>
        </nav>

   
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/links">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>AboutLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</h2>;
}

function Users() {
  return <MytypedComponent />;
}