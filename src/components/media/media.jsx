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
      <div className="single">
        <a
          rel="noreferrer"
          target="_blank"
          href="https://www.instagram.com/limbohacks/"
        >
          <img src={Insta} alt="Limbohacks" />
        </a>
      </div>

      <div className="single">
        <a rel="noreferrer" target="_blank" href="https://discord.gg/un2USMtv">
          <img src={Dis} alt="Limbohacks" />
        </a>
      </div>

      <div className="single">
        <a
          rel="noreferrer"
          target="_blank"
          href="https://www.linkedin.com/company/limbo-hacks/"
        >
          <img src={Linked} alt="Limbohacks" />
        </a>
      </div>

      <div className="single">
        <a
          rel="noreferrer"
          target="_blank"
          href="mailto:abusayid693@gmail.com,hello@limbohack.tech"
        >
          <img src={Mail} alt="Limbo Hacks" />
        </a>
      </div>
      <div className="single">
        <a
          rel="noreferrer"
          target="_blank"
          href="https://twitter.com/HacksLimbo"
        >
          <img src={Twitter} alt="limbo hacks" />
        </a>
      </div>
      <div className="single">
        <a
          rel="noreferrer"
          target="_blank"
          href="https://limbo-hacks-12968.devpost.com/"
        >
          <img src={DevPost} alt="Limbo hacks" />
        </a>
      </div>
    </div>
  );
}
