import {SOCIALS} from '../../Module/General';
import {Btn} from '../Landing/index.jsx';
import './sponsors.scss';

function SponsorsHead() {
  return <h1 className="shead">Special Thanks To Our Sponsors & Partners</h1>;
}

function Sponsor(props) {
  return (
    <div className="Sponsor ">
      <img src={props.srcx} alt="Hack@Davidson  "></img>
    </div>
  );
}

function SponsorUS() {
  return (
    <div className="joinT sponsorUS">
      <h3>Interested in Sponsoring?</h3>
      <a href={SOCIALS.email}>
        <Btn type="Sponsor us" overlay="Send a mail" />
      </a>{' '}
    </div>
  );
}

export {SponsorsHead, Sponsor, SponsorUS};
