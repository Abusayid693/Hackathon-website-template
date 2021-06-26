import React, { Component } from "react";
import "./top-division-c.css";
import MytypedComponent from "../typing-effect/typing.js"
import { useMediaPredicate } from "react-media-hook";
import CountDown from "../count-down/countDown";

  function Btn(props){
    return(  
   <button className={props.class}>{props.type}
       <div className="overlay">
        <div className="overlay-text">{props.overlay}</div>
       </div>
   </button>
       );
   }


   function About(){
    return (
         <div className="AboutMe">
         <h1>Join Limbo Hacks</h1>
         <MytypedComponent />
        </div>
        );
    }



    
 export default function Myinfo(){
    return (
         <div className="Myinfo">
         <About />
        <p> Join us on 20th November 2021 with over 300 students from across the nation for 24 hours of creation, innovation, & fun.
     
        
        
          </p>
          <CountDown />
           <Btn type="Sponsor us" overlay="sponsorlimbohack@gmail.com"/>
           <Btn class="register" type="Register " overlay="Hackers registration" />
      
         </div>


    );
}










  