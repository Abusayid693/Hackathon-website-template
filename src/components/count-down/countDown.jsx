import React, { Component } from "react";
import "./countDown.css";
import Countdown from 'react-countdown';



export default function CountDown(){
    return(
<div className="counter">
<h1>
<Countdown date={Date.now() + 415201152} />
</h1>

</div>

    );
}