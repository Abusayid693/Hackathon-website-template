import React, { Component } from "react";
import "./top-division-c.css";
import MytypedComponent from "../typing-effect/typing.js";
import { useMediaPredicate } from "react-media-hook";
import CountDown from "../count-down/countDown";

function Btn(props) {
  return (
    <button className={props.class}>
      <i className={props.ico}></i>
      {props.type}
      <div className="overlay">
        <div className="overlay-text">{props.overlay}</div>
      </div>
    </button>
  );
}

function About() {
  return (
    <div className="AboutMe">
      <h2>Join Limbo Hacks</h2>
      <MytypedComponent />
    </div>
  );
}

function Myinfo() {
  return (
    <div className="Myinfo">
      <About />
      <p>
        {" "}
        Join us on 20th November 2021 with over 300 students from across the
        nation for 24 hours of creation, innovation, & fun.
      </p>
      <div className="join_dis">
        <a
          rel="noreferrer"
          target="_blank"
          href="https://discord.gg/8XJSzmtWPp"
        >
          <Btn
            ico="fab fa-2x fa-discord"
            class="join_disco"
            type="Join our discord"
            overlay="Click the link"
          />
        </a>
      </div>
      <a href="mailto:abusayid693@gmail.com, sponsorlimbohack@gmail.com">
        <Btn className="sponsor_btn" type="Sponsor us" overlay="Send a mail" />
      </a>
      <a href="https://forms.office.com/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAN__jZdNhdUNTgyREk0VzdEMU9RVFlPMVNWVEJQUkNYMi4u">
        {" "}
        <Btn class="register" type="Register " overlay="Hackers registration" />
      </a>
    </div>
  );
}

export { Btn, Myinfo };
