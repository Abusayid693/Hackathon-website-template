import React from 'react';
import {Btn} from '../Top-division-components/Top-division-components.jsx';
import './team.css';

interface IJoinTeam {
  placeholder: string;
  formLink: string;
  content: string;
}

const JoinTeam: React.FC<IJoinTeam> = ({placeholder, formLink, content}) => {
  return (
    <div className="joinT">
      <h3>{content} </h3>
      <a href={formLink}>
        <Btn type={placeholder} overlay="Fill the form" link={formLink} />
      </a>
    </div>
  );
};

function Member({info}: {info: any}) {
  const {github, role, name, img, linkedin} = info;
  return (
    <div className="member">
      <img src={img} alt="Limbo hack"></img>
      <div className="members-link">
        <h3>{name}</h3>
        <p>{role}</p>
        <a href={github}>
          <i className="fab fa-2x fa-github"></i>
        </a>
        <a href={linkedin}>
          <i className="fab fa-2x fa-linkedin"></i>
        </a>
      </div>
    </div>
  );
}

export {Member, JoinTeam};
