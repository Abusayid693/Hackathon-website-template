import React from "react";
import { propTypes } from "react-bootstrap/esm/Image";
import "./team.css";
import {Btn} from "../Top-division-components/Top-division-components.jsx";



function JoinTeam(){
    return(
        <div className="joinT">
        <h3>Interested in joining our team </h3>
        <a href="https://forms.office.com/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAN__jZdNhdUOUhEQkJSRk02OEU4SlBMTUdYOFIxOTNZSy4u"><Btn type="Join our team" overlay="Fill the form"/></a> 
        </div>
    );
}




 function Member(props){
    return (
        <div className="member">
        <img src={props.img} ></img>
        <div className="members-link">
        <h3>{props.name}</h3>
        <p>{props.role}</p>
        <a><i class="fab fa-2x fa-github"></i></a>
        <a><i class="fab fa-2x fa-linkedin"></i></a>
        </div>

        </div>
    );
}



export {Member,JoinTeam}