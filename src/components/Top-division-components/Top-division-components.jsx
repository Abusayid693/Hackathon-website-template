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
          <a href="mailto:abusayid693@gmail.com, sponsorlimbohack@gmail.com"><Btn type="Sponsor us" overlay="Send a mail"/></a> 
          <a href="https://forms.office.com/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAN__jZdNhdUNTgyREk0VzdEMU9RVFlPMVNWVEJQUkNYMi4u">  <Btn class="register" type="Register " overlay="Hackers registration" /></a>
         </div>


    );
}










  