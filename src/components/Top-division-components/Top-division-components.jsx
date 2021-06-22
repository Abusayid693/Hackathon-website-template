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
         <div className="AboutMe">
         <h1>Hey i am Rehan</h1>
         <MytypedComponent />
        </div>
        );
    }



    
 export default function Myinfo(){
    return (
         <div >
         <About />
         <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy 
         </p>
           <Btn type="Contact me" overlay="abusayid693@gmail.com"/>
           <Btn class ="resume" type="Resume " overlay="pdf file" />
         </div>


    );
}










  