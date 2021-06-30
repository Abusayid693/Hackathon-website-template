import React from "react";
import Insta from "./icons8-instagram.svg";
import Dis from "./icons8-discord.svg";
import Linked from "./icons8-linkedin-2.svg";
import Mail from "./icons8-mail.svg";
import DevPost from "./icons8-dev-post.svg";
import "./media.css"

export default function Media(){
    return(

        <div className="media">
        <div className="single">
        <a rel="noreferrer" target="_blank" href="">
            <img src={Insta} alt="" />
          </a>
          </div>
         
        <div className="single">
          <a rel="" target="_blank" href="https://discord.gg/un2USMtv">
            <img src={Dis} alt="" />
          </a>
          </div>

       
          <div className="single">
          <a rel="" target="_blank" href="https://www.linkedin.com/company/limbo-hacks/">
            <img src={Linked} alt="" />
          </a>
          </div>


          <div className="single">
          <a rel="" target="_blank" href="mailto:abusayid693@gmail.com,hello@limbohack.tech">
            <img src={Mail} alt="" />
          </a>
          </div>


          <div className="single">
          <a rel="" target="_blank" href="https://limbo-hacks-12968.devpost.com/">
            <img src={DevPost} alt="" />
          </a>
          </div>

       

        </div>
    );
}