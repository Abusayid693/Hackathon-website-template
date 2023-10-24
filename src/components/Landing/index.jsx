import {SOCIALS, TOP_SECTION} from '../../Module/General';
import MytypedComponent from '../Typed/index.js';
import './style.css';

const Btn = props => {
  return (
    <button className={props.class}>
      <i className={props.ico}></i>
      {props.type}
      <div className="overlay">
        <div className="overlay-text">{props.overlay}</div>
      </div>
    </button>
  );
};

const About = () => {
  return (
    <div className="AboutMe">
      <h2>{TOP_SECTION.TITLE}</h2>
      <MytypedComponent />
    </div>
  );
};

const Myinfo = () => {
  return (
    <div className="Myinfo">
      <About />
      <p> {TOP_SECTION.SHORT_DESCRIPTION}</p>
      <br></br>
      <br></br>
      <div className="buttom-group">
        <a href={SOCIALS.SPONSOR_US_EMAIL} target="_blank">
          {' '}
          <Btn
            class="register"
            type="Sponsor us!"
            overlay="See sponsor package"
          />
        </a>

        <a href={TOP_SECTION.HACKERS_REGISTRATION_FORM_LINK} target="_blank">
          {' '}
          <Btn type="Register" overlay="Hackers registration" />
        </a>
      </div>
      {/* <div className="join_dis">
        <a
          style={{position: 'relative', left: '0%'}}
          rel="noreferrer"
          target="_blank"
          href={SOCIALS.discord}
        >
          <Btn
            ico="fab fa-discord"
            class="join_disco"
            type="Join our discord"
            overlay="Click the link"
          />
        </a>
      </div> */}
    </div>
  );
};

export {Btn, Myinfo};
