import {SOCIALS} from '../../Module/General';
import {Btn} from '../Landing/index.jsx';
import './sponsors.scss';

function SponsorsHead() {
  return <h1 className="shead">Special Thanks To Our Sponsors & Partners</h1>;
}

function Sponsor(props) {
  return (
    <div className="Sponsor">
      <a href={props.linkx}>
        <img
          src={props.srcx}
          alt="Hack@Davidson  "
          // width={250}
          // height={150}
        ></img>
      </a>
    </div>
  );
}

function SponsorUS() {
  return (
    <div className="sponsorUS">
      <div>
        <h3>Interested in Donating?</h3>
        <p>
          I Want to Support... -{'>'} Other -{'>'} Hack@Davidson
        </p>
      </div>
      <a href={SOCIALS.donate} target="_blank">
        <Btn type="Donate" overlay="Davidson College Gift" />
      </a>
    </div>
  );
}

export {Sponsor, SponsorUS, SponsorsHead};
