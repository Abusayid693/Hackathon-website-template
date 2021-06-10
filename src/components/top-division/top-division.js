import React from "react";

import "./top-division.css";
import bgImage from "./hbg.png"


function Btn(props){
 return(  
<button className={props.class}>{props.type}
    <div class="overlay">
    <div class="overlay-text">{props.overlay}</div>
    </div>
</button>
    );
}



function About(){
return (
     <div>
     <h1>Hey i am Rehan</h1>
     <p>---------js responsive--------</p>
      <p>Millions of companies of all sizes—from startups to Fortune 500s—use Stripe’s software and APIs to accept payments, send payouts, and manage their businesses online.</p>
      <Btn type="Contact me" overlay="abusayid693@gmail.com"/>
      <Btn class ="resume" type="Resume " overlay="pdf file" />

    </div>
    );
}






export default function TopDivision(){
   return (
    <div class="container" style={{ backgroundImage: `url(${bgImage})` }}>
    <div class="row">
      <div class="left col-lg-8">
      <About />
      </div>
      <div class="right col-lg-4">
   
      </div>
   
    </div>
  </div>
   )


}