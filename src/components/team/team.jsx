import React from "react";
import "./team.css";
import {Btn} from "../Top-division-components/Top-division-components.jsx";

function JoinTeam({placeholder, formLink, content}) {
  return (
    <div className="joinT">
      <h3>{content} </h3>
      <a href={formLink}>
        <Btn type={placeholder} overlay="Fill the form" link={formLink} />
      </a>
    </div>
  );
}

function Member({info}) {
  const {github,role,name,img, linkedin} = info;
  return (
    <div className="member">
      <img src={img} alt="Limbo hack"></img>
      <div className="members-link">
        <h3>{name}</h3>
        <p>{role}</p>
        <a href={github}>
          <i class="fab fa-2x fa-github"></i>
        </a>
        <a href={linkedin}>
          <i class="fab fa-2x fa-linkedin"></i>
        </a>
      </div>
    </div>
  );
}

export {Member, JoinTeam};
