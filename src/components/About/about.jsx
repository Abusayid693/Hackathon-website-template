import React from "react";
import { Myinfo } from "../Top-division-components/Top-division-components.jsx";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import "./about.css";
import { Logo, LogoSectionAbout } from "../logo-section/logoSection.jsx";
import { FirstPrize, PrizeHeading } from "../prize tracks/prizes.jsx";
import { Prizeinfo, Myicons } from "../prize tracks/prize-contents.jsx";
import { DropDown, QA } from "../FAQ/faq.jsx";
import { Sponsor, SponsorsHead } from "../Sponsors/sponsors.jsx";
import {
  taskade,
  Replit,
  interviewC,
  echoAR,
  cfc,
  pass,
  glimpse,
  qoom,
  sublime,
  egg,
  ll,
} from "../Sponsors/logos.jsx";
import Birds from "../Birds/birds.jsx";
import Footer from "../Footer/footer.jsx";
import { Member, JoinTeam } from "../team/team.jsx";
import {
  TeamInfo,
  me,
  moon,
  Ryah,
  lyin,
  Pravallika,
  keshav,
  zoha,
  kk,
} from "../team/teamdetails.jsx";

// import Schedule from "../Schedule/Schedule";

import pattern from "./pattern4.png";

import boy from "./boy.png";

import Media from "../media/media.jsx";

// import { useMediaPredicate } from "react-media-hook";

export default function AboutSection(props) {
  return (
    <div className="Whole_div" style={{ backgroundImage: `url(${pattern})` }}>
      <div className="color_sectiom">
        <Container fluid>
          <Row className="Row info">
            <Col className="info-div" sm={12} lg={7} md={8}>
              <Myinfo />
            </Col>
            <Col className="d-image" sm={12} lg={5} md={4}>
              <img src={boy} />
            </Col>
          </Row>

          <Row className="mediaInfo">
            <Col className="" sm={12} lg={12} md={12}>
              <Media />
            </Col>
          </Row>
        </Container>
      </div>
      <Container fluid>
        {/* Logo section  */}
        <Row className=" logoSection">
          <Col className="info-div" sm={12} lg={8} md={8}>
            <LogoSectionAbout />
          </Col>
          <Col className="info-div" sm={12} lg={4} md={4}>
            <Logo />
          </Col>
        </Row>

        <Row className="faqsSection">
          <Col className="" sm={12} lg={6} md={6}>
            <DropDown q={QA[0].q} ans={QA[0].ans} />
          </Col>
          <Col className="" sm={12} lg={6} md={6}>
            <DropDown q={QA[1].q} ans={QA[1].ans} />
          </Col>
        </Row>
        <Row className="faqsSection">
          <Col className="" sm={12} lg={6} md={6}>
            <DropDown q={QA[2].q} ans={QA[2].ans} />
          </Col>
          <Col className="" sm={12} lg={6} md={6}>
            <DropDown q={QA[3].q} ans={QA[3].ans} />
          </Col>
        </Row>

        <Row className="faqsSection">
          <Col className="" sm={12} lg={6} md={6}>
            <DropDown q={QA[4].q} ans={QA[4].ans} />
          </Col>
          <Col className="" sm={12} lg={6} md={6}>
            <DropDown q={QA[5].q} ans={QA[5].ans} />
          </Col>
        </Row>
        <Row className="faqsSection">
          <Col className="" sm={12} lg={6} md={6}>
            <DropDown q={QA[6].q} ans={QA[6].ans} />
          </Col>
          <Col className="" sm={12} lg={6} md={6}>
            <DropDown q={QA[7].q} ans={QA[7].ans} />
          </Col>
        </Row>

        <Row className="prizesection">
          <PrizeHeading type="Prize section" />
          <Row>
            <Col className="" sm={12} lg={4} md={6}>
              <FirstPrize
                icon={Myicons[0]}
                type={Prizeinfo[0].type}
                content={Prizeinfo[0].content}
              />
            </Col>
            <Col className="" sm={12} lg={4} md={6}>
              <FirstPrize
                icon={Myicons[1]}
                type={Prizeinfo[1].type}
                content={Prizeinfo[1].content}
              />
            </Col>
            <Col className="" sm={12} lg={4} md={6}>
              <FirstPrize
                icon={Myicons[2]}
                type={Prizeinfo[2].type}
                content={Prizeinfo[2].content}
              />
            </Col>
          </Row>
          <Row>
            <Col className="" sm={12} lg={4} md={6}>
              <FirstPrize
                icon={Myicons[3]}
                type={Prizeinfo[3].type}
                content={Prizeinfo[3].content}
              />
            </Col>
            <Col className="" sm={12} lg={4} md={6}>
              <FirstPrize
                icon={Myicons[4]}
                type={Prizeinfo[4].type}
                content={Prizeinfo[4].content}
              />
            </Col>
            <Col className="" sm={12} lg={4} md={6}>
              <FirstPrize
                icon={Myicons[5]}
                type={Prizeinfo[5].type}
                content={Prizeinfo[5].content}
              />
            </Col>
          </Row>
          <Row>
            <Col className="" sm={12} lg={4} md={6}>
              <FirstPrize
                icon={Myicons[6]}
                type={Prizeinfo[6].type}
                content={Prizeinfo[6].content}
              />
            </Col>
            <Col className="" sm={12} lg={4} md={6}>
              <FirstPrize
                icon={Myicons[7]}
                type={Prizeinfo[7].type}
                content={Prizeinfo[7].content}
              />
            </Col>
          </Row>
        </Row>

        <Row className="prizesection non-coding">
          <PrizeHeading type="Non-coding prizes" />
          <h2>coming soon</h2>
        </Row>

        <Row className="sponsorSection">
          <SponsorsHead />
          <Row>
            <Col className="" sm={12} lg={4} md={6}>
              {" "}
              <Sponsor srcx={cfc} />{" "}
            </Col>
            <Col className="" sm={12} lg={4} md={6}>
              {" "}
              <Sponsor srcx={sublime} />
              {""}
            </Col>
            <Col className="" sm={12} lg={4} md={6}>
              {" "}
              <a href="https://www.echoar.xyz">
                {" "}
                <Sponsor srcx={echoAR} />
              </a>{" "}
            </Col>
          </Row>
          <Row>
            <Col className="" sm={12} lg={4} md={6}>
              {" "}
              <Sponsor srcx={taskade} />{" "}
            </Col>
            <Col className="" sm={12} lg={4} md={6}>
              {" "}
              <Sponsor srcx={Replit} />{" "}
            </Col>
            <Col className="" sm={12} lg={4} md={6}>
              {" "}
              <Sponsor srcx={qoom} />
              {""}
            </Col>
          </Row>
          <Row>
            <Col className="" sm={12} lg={4} md={6}>
              {" "}
              <Sponsor srcx={interviewC} />{" "}
            </Col>
            <Col className="" sm={12} lg={4} md={6}>
              {" "}
              <a href="https://1password.com">
                {" "}
                <Sponsor srcx={pass} />
              </a>{" "}
            </Col>

            <Col className="" sm={12} lg={4} md={6}>
              {" "}
              <a href=" https://joinglimpse.com " target="blank">
                {" "}
                <Sponsor srcx={glimpse} />
              </a>{" "}
            </Col>
          </Row>
          <Row>
            <Col className="" sm={12} lg={4} md={6}>
              {" "}
              <Sponsor srcx={egg} />
              {""}
            </Col>
            <Col className="" sm={12} lg={4} md={6}>
              {" "}
              <Sponsor srcx={ll} />
              {""}
            </Col>
          </Row>
        </Row>
        <Birds top="120vh" left="0vh" type="" />

        {/* <h1 style={{ textAlign: "center" }}>Schedule</h1>
        <h5 style={{ textAlign: "center" }}>
          * The schedule is in Indian Standard Time(IST)
        </h5>
        <br />
        <Schedule /> */}

        <h1>Our Team</h1>
        <JoinTeam />
        <Row className="members">
          <Col className="" sm={12} lg={4} md={4}>
            <Member name={TeamInfo[0].Name} role={TeamInfo[0].role} img={me} />
          </Col>
          <Col className="" sm={12} lg={4} md={4}>
            <Member
              name={TeamInfo[1].Name}
              role={TeamInfo[1].role}
              img={moon}
            />
          </Col>
          <Col className="" sm={12} lg={4} md={4}>
            <Member
              name={TeamInfo[2].Name}
              role={TeamInfo[2].role}
              img={Ryah}
            />
          </Col>
        </Row>
        <Row className="members">
          <Col className="" sm={12} lg={4} md={4}>
            <Member
              name={TeamInfo[3].Name}
              role={TeamInfo[3].role}
              img={lyin}
            />
          </Col>
          <Col className="" sm={12} lg={4} md={4}>
            <Member
              name={TeamInfo[7].Name}
              role={TeamInfo[7].role}
              img={zoha}
            />
          </Col>
          <Col className="" sm={12} lg={4} md={4}>
            <Member name={TeamInfo[4].Name} role={TeamInfo[4].role} img={kk} />
          </Col>
          <Col className="" sm={12} lg={4} md={4}>
            <Member
              name={TeamInfo[5].Name}
              role={TeamInfo[5].role}
              img={Pravallika}
            />
          </Col>
          <Col className="" sm={12} lg={4} md={4}>
            <Member
              name={TeamInfo[6].Name}
              role={TeamInfo[6].role}
              img={keshav}
            />
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
}
// Name:"Rehan",
// role:"Organizer",
// github:"",
// linkedin:"",
// img:{me}
