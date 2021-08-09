import React from "react";
import "./sponsors.scss";
import {Btn} from "../Top-division-components/Top-division-components.jsx";


function SponsorsHead() {
  return <h1 className="shead">Sponsors & Partners</h1>;
}

function Sponsor(props) {
  return (
    <div className="Sponsor ">
      <img src={props.srcx} alt="Limbo hacks"></img>
    </div>
  );
}

function SponsorUS() {
  return (
    <div className="joinT sponsorUS">
      <h3>Interested in joining our team </h3>
      <a href="mailto:abusayid693@gmail.com, sponsorlimbohack@gmail.com">
        <Btn className="sponsor_btn" type="Sponsor us" overlay="Send a mail" />
      </a>{" "}
    </div>
  );
}

export { SponsorsHead, Sponsor,SponsorUS };
