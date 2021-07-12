import React from "react";
import Insta from "./icons8-instagram.svg";
import Dis from "./icons8-discord.svg";
import Linked from "./icons8-linkedin-2.svg";
import Mail from "./icons8-mail.svg";
import DevPost from "./icons8-dev-post.svg";
import Twitter from "./icons8-twitter.svg";
import "./media.css";

export default function Media() {
  return (
    <div className="media">
    <p>Follow us on social media for updates</p>
      <div className="single">
        <a
          rel="noreferrer"
          target="_blank"
          href="https://www.instagram.com/limbohacks/"
        >
          {/* <img src={Insta} alt="Limbohacks" /> */}
          <i class="fab fa-3x fa-instagram"></i>
        </a>
      </div>

      <div className="single">
        <a rel="noreferrer" target="_blank" href="https://discord.gg/YEfteWAT">
          {/* <img src={Dis} alt="Limbohacks" /> */}
          <i class="fab fa-3x fa-discord"></i>
          
        </a>
      </div>

      <div className="single">
        <a
          rel="noreferrer"
          target="_blank"
          href="https://www.linkedin.com/company/limbo-hacks/"
        >
          {/* <img src={Linked} alt="Limbohacks" /> */}
          <i class="fab fa-3x fa-linkedin-in"></i>
        </a>
      </div>
      <div className="single">
        <a
          rel="noreferrer"
          target="_blank"
          href="https://twitter.com/HacksLimbo"
        >
          {/* <img src={Twitter} alt="limbo hacks" /> */}
          <i class="fab fa-3x fa-twitter"></i>
        </a>
      </div>
      <div className="single">
        <a
          rel="noreferrer"
          target="_blank"
          href="https://limbo-hacks-12968.devpost.com/"
        >
          {/* <img src={DevPost} alt="Limbo hacks" /> */}
          <i class="fab fa-3x fa-dev"></i>
        </a>
      </div>
    </div>
  );
}
