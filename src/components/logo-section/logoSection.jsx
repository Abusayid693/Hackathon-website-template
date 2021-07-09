import React from "react";
import "./logoSection.css";
import sym from './sym.png';

import logo1 from './logo4.png';
import logo2 from './logo2.png';
import logo3 from './logo3.png';



function LogoSectionAbout(){
    return(
   <div className="LogoSectionAbout">
    <h1>What is Limbo hacks?</h1>
  <p> Hack Limbo is 24 hour long running hackathon will be held on November 20th & 21th , We calls for hackers, artists, coders, designers, tech evangelists, creatives, and developers from all disciplines to take a part to win awesome prizes and collaborate with other developers . Throughout the weekend hackers at Limbo Hacks will have unique opportunities to learn from each other trying hands in new technologies We are determined to have an all-inclusive and diverse group of students attending. </p>
   </div>
    );
    }

function Logo(){
    return(
        <div className="logoS">
        <img className="Logo sym" src={sym} alt="Limbohacks" />

        <img className="Logo logo1" src={logo1} alt="Limbohacks" />
        <img className="Logo logo2" src={logo2} alt="Limbohacks" />
        <img className="Logo logo3" src={logo3} alt="Limbohacks" />

        </div>
    ) 
}

export { Logo , LogoSectionAbout }