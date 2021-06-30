import React from "react";
import "./footer.scss";
import Insta from "./icons8-instagram.svg";
import Dis from "./icons8-discord.svg";
import Linked from "./icons8-linkedin-2.svg";
import Mail from "./icons8-mail.svg";
import DevPost from "./icons8-dev-post.svg";
export default function Footer() {
  return (
    <div className="footer">
      <div className="social-icons-container">
        <div className="social-icon">
          <a rel="noreferrer" target="_blank" href="">
            <img src={Insta} alt="" />
          </a>
        </div>
        <div className="social-icon">
          <a rel="https://discord.gg/un2USMtv" target="_blank" href="">
            <img src={Dis} alt="" />
          </a>
        </div>
        <div className="social-icon">
          <a rel="https://www.linkedin.com/company/limbo-hacks/" target="_blank" href="">
            <img src={Linked} alt="" />
          </a>
        </div>
        <div className="social-icon">
          <a rel="noreferrer" target="_blank" href="">
            <img src={Mail} alt="" />
          </a>
        </div>
        <div className="social-icon">
          <a rel="https://limbo-hacks-12968.devpost.com/" target="_blank" href="">
            <img src={DevPost} alt="" />
          </a>
        </div>
      </div>
      <p>Contact us <a href="mailto:hello@limbohack.tech"><em>hello@limbohack.tech</em></a> </p>
      <p>Made with ❤️ </p>
    </div>
  );
}
