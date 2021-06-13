import React from "react";
import {Container,Col,Row} from 'react-bootstrap';




import "./top-division.css";
import bgImage from "./hbg.png"
import mob from "./mob.png";


import MytypedComponent from "../typing-effect/typing.js"


function Image(props){
  return(
   <div className="profile-image">
    <img className="" src={mob } />
   </div>
 );
}







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
     <MytypedComponent />
      <p>Millions of companies of all sizes—from startups to Fortune 500s—use Stripe’s software and APIs to accept payments, send payouts, and manage their businesses online.</p>
      <Btn type="Contact me" overlay="abusayid693@gmail.com"/>
      <Btn class ="resume" type="Resume " overlay="pdf file" />
    </div>
    );
}





export default function TopDivision(){
   return (
    <div class="container" style={{ backgroundImage: `url(${bgImage})` }}>
    <Container>
    <Row>
    <div class="row">
     <Col sm={9}>
      <div class="left col-lg-6">
      <About />
      </div>
      </Col>
      <Col sm={3}>
      <div class="right col-lg-6">
      <Image />
      </div>
      </Col>
    </div>
    </Row>
    </Container>


  </div>
   )
}