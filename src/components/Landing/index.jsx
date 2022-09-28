import {TOP_SECTION} from '../../Module/General';
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

const MoinhoLogo = () => {
  return (
    <div className="topLogoContainer hidden-xs hidden-sm">
      <img className="topLogo" src={TOP_SECTION.LOGO} alt="Moinho" />
    </div>
  );
};

const Myinfo = () => {
  return (
    <div className="Myinfo">
      <About />
      <p> {TOP_SECTION.LONG_DESCRIPTION}</p>
      <p> {TOP_SECTION.SHORT_DESCRIPTION}</p>
      <div className="buttom-group">
        <a href={TOP_SECTION.ACTION_BTN}>
          {' '}
          <Btn class="sponsor_btn" type="Me avise" overlay="Ir!" />
        </a>
      </div>
    </div>
  );
};

export {Btn, Myinfo, MoinhoLogo};
