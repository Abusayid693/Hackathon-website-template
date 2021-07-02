import React from "react";
import "./sponsors.scss";

function SponsorsHead(){
    return(
        <h1 className="shead">Sponsors & Partners</h1>
    );
}


 function Sponsor(props){
    return(
        <div className="Sponsor">
        <img src={props.srcx} alt="Limbo hacks"></img>
       </div>
    );
}

export {SponsorsHead,Sponsor}