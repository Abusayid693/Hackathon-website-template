import React from "react";
import { propTypes } from "react-bootstrap/esm/Image";
import "./team.css";
import me from "./team/me.png"





export default function Member(){
    return (
        <div className="member">
        <img src={me} ></img>
        <div className="members-link">
        <h3>Rehan</h3>
        <a><i class="fab fa-2x fa-github"></i></a>
        <a><i class="fab fa-2x fa-linkedin"></i></a>
        </div>

        </div>
    );
}



