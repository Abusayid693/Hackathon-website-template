import React, { Component } from "react";
import "./top-division-c.css";
import MytypedComponent from "../typing-effect/typing.js"
import { useMediaPredicate } from "react-media-hook";



  
  





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
        </div>
        );
    }



    
function Myinfo(){
    return (
         <div className="para">
           <p>Millions of companies of computer at age 3. now, i'm a software engineer who wants to pay it forward by providing others with opportunities to code. in my free time i run marathons, climb league solo queue, and drink loads of boba.all sizes—from startups to Fortune 500s—use Stripe’s software and APIs to accept payments, send payouts, and manage their businesses online.</p>
           <Btn type="Contact me" overlay="abusayid693@gmail.com"/>
           <Btn class ="resume" type="Resume " overlay="pdf file" />
         </div>


    );
}










    export { About , MyImage, Myinfo }    