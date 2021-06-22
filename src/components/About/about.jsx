import React from "react";
import Myinfo from "../Top-division-components/Top-division-components.jsx"
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import "./about.css"
import Fade from 'react-reveal/Fade';





export default function AboutSection(props){
 return( 
<Container fluid>
  <Row className="Row">

  <Fade top><Col className="info-div" sm={12} lg={6} md={5}><Myinfo /></Col></Fade>
    <Col className="image-div" sm={12} lg={5} md={5}>sm=4</Col>
  </Row>
</Container>
 );

}
