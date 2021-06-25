import React from "react";
import "./logoSection.css";
import logo from './LIMBO.png';


function LogoSectionAbout(){
    return(
   <div className="LogoSectionAbout">
    <h1>About hydrangea hacks </h1>
   <p>At Hydrangea Hacks,hundreds of students from all over the world will come together and build awesome projects all while creating a supportive learning community. The event is open to all students ages 13+ who self-identify as women (cis and trans) or non-binary individuals.
   </p>
   </div>
    );
    }

function Logo(){
    return(
        <img className="Logo" src={logo} alt="" />
    ) 
}

export { Logo , LogoSectionAbout }