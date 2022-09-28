import {SOCIALS} from '../../Module/General';
import {Btn} from '../Landing/index.jsx';
import './sponsors.scss';

function SponsorsHead() {
  return <h2 className="shead">Parceiros</h2>;
}

function Sponsor(props) {
  return (
    <a
      className="sponsorLink"
      target="_blank"
      rel="noopener noreferrer"
      href={props.link}
    >
      <div className="Sponsor">
        <img src={props.srcx} alt="Hackathon moinho"></img>
        <p>{props.name}</p>
      </div>
    </a>
  );
}

function SponsorUS() {
  return (
    <div className="joinT sponsorUS">
      <h3>Interested in Sponsoring </h3>
      <a href={SOCIALS.email}>
        <Btn className="sponsor_btn" type="Sponsor us" overlay="Send a mail" />
      </a>{' '}
    </div>
  );
}

export {SponsorsHead, Sponsor, SponsorUS};
