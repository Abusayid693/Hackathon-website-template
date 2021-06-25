import React from "react";
import Myinfo from "../Top-division-components/Top-division-components.jsx"
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import "./about.css"
import { Logo , LogoSectionAbout } from "../logo-section/logoSection.jsx"
import {FirstPrize , PrizeHeading} from "../prize tracks/prizes.jsx"
import {Prizeinfo,Myicons} from "../prize tracks/prize-contents.jsx"



export default function AboutSection(props){
 return( 
<Container fluid>
  <Row className="Row">
  <Col className="info-div" sm={12} lg={12} md={12}><Myinfo /></Col>
  </Row>

  {/* Logo section  */}
  <Row className=" logoSection">
  <Col className="info-div" sm={12} lg={8} md={8}><LogoSectionAbout /></Col>
  <Col className="info-div" sm={12} lg={4} md={4}><Logo /></Col>

  </Row>

  <Row className="prizesection">
  <PrizeHeading />
  <Col className="" sm={12} lg={4} md={6}><FirstPrize icon={Myicons[0]} type= {Prizeinfo[0].type} content={Prizeinfo[0].content}/></Col>
  <Col className="" sm={12} lg={4} md={6}><FirstPrize icon={Myicons[1]} type= {Prizeinfo[1].type} content={Prizeinfo[1].content}/></Col>
  <Col className="" sm={12} lg={4} md={6}><FirstPrize icon={Myicons[2]} type= {Prizeinfo[2].type} content={Prizeinfo[2].content}/></Col>
  <Col className="" sm={12} lg={4} md={6}><FirstPrize icon={Myicons[3]} type= {Prizeinfo[3].type} content={Prizeinfo[3].content}/></Col>
  <Col className="" sm={12} lg={4} md={6}><FirstPrize icon={Myicons[4]} type= {Prizeinfo[4].type} content={Prizeinfo[4].content}/></Col>
  <Col className="" sm={12} lg={4} md={6}><FirstPrize icon={Myicons[5]} type= {Prizeinfo[5].type} content={Prizeinfo[5].content}/></Col>
  <Col className="" sm={12} lg={4} md={6}><FirstPrize icon={Myicons[6]} type= {Prizeinfo[6].type} content={Prizeinfo[6].content}/></Col>
  </Row>

</Container>
 );

}
