import React from "react";
import "./faq.css"


const QA=[{
    q:"What is a hackathon?",
    ans:"Hackathons are community events, where you get to interact with students from all around the world as well as forming teams to create future tech"
},
{
    q:"How to participate?",
    ans:"All you need is to fill our form above and join Discord, we will guide you through everything there"
},
{
    q:"I have no idea what coding is?",
    ans:"Thats why you must attend our event, we will guide you through everything with awesome workshops,tech talk and many more"
},
{
    q:"Do i need to pay any money?",
    ans:"Absolutely not ! our event is free and open for all , if incase anyone asks for money you can dm any of our moderatator"
},
{
    q:"I dont have a team to participate?",
    ans:"You dont need one, prior to our event in discord you will meet many hackers exactly like you and join to form a team, if not you can participate alone and fun fact we are running special best solo prize."
},
{
    q:"I have more doubts?",
    ans:"Reach us directly at (rehan@limbohacks.tech) we would happy to help you."
},
{
  q:"Can i volunteer?",
  ans:"Yes we are looking for volunteers, fill the form (in footer section) we would be glad to have you."
},
{
  q:"What are the conduct of guidlines?",
  ans:"We strong follow MLH code of conduct, Our team members will enforce this code throughout the event. "
}

]











function faqCollapse(){
  var coll = document.querySelectorAll(".collapsible");
  var i;
  
  for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var content = this.nextElementSibling;
      if (content.style.display === "block") {
        content.style.display = "none";
      } else {
        content.style.display = "block";
      }
    });
  }
  }





 function DropDown(props){
    return(
      <div className="faq">
         <button type="button" class="collapsible">{props.q}</button>
        <div class="content">
           <p>{props.ans}</p>
        </div>
      </div>
    );
}

export {DropDown, faqCollapse,QA}

