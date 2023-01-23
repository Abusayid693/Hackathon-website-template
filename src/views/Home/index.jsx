import React from 'react';
import {SectionCamping} from 'components/Camping/index.jsx';
import {SectionEnterprise} from 'components/Enterprise/index.jsx';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import {
  LogoSectionAbout,
  SectionAgendaAbout
} from '../../components/About/index.jsx';
import {
  FirstActivity,
  ActivityHeading
} from '../../components/Activities/index.jsx';
import {Banner} from '../../components/Banner/index.jsx';
import Footer from '../../components/Footer/index.jsx';
import Collapse from '../../components/Collapse/index.jsx';
import {MoinhoLogo, Myinfo} from '../../components/Landing/index.jsx';
import Subscription from '../../components/Subscription/index.jsx';
import {Sponsor, SponsorsHead} from '../../components/Sponsors/sponsors.jsx';
import {EVENT_SECTION, sponsors} from '../../Module/General';
import {Mentors, Supporters} from 'components/People/index.jsx';
import LowCode from 'components/LowCode/index.jsx';
import NotProgrammer from 'components/NotProgrammer/index.jsx';
import {Prizes} from 'components/Prizes/index.jsx';
import {Team} from 'components/Team/index.jsx';
import {OnlineMeetings} from 'components/OnlineMeetings/index.jsx';
import SubscriptionClosed from 'components/SubscriptionClosed/index.jsx';

const SponsorGroup = (props, index) => {
  return (
    <Row className="justify-content-center" key={index}>
      {props.map((s, i) => (
        <Col key={i} className="" sm={12} lg={4} md={12}>
          {' '}
          <Sponsor srcx={s.src} name={s.name} link={s.link} />{' '}
        </Col>
      ))}
    </Row>
  );
};

// Activity group
const ActivityGroup = (props, index) => {
  return (
    <Row key={index}>
      {props.map((s, i) => (
        <Col key={i} className="center-block" sm={12} lg={4} md={4}>
          <FirstActivity icon={s.icon} title={s.title} />
        </Col>
      ))}
    </Row>
  );
};
// Activity group ending

export default function HomePage() {
  return (
    <div
      className="Whole_div"
      style={{backgroundImage: 'url(/Assets/Home/pattern4.png)'}}
    >
      {/* Initial banner */}
      <Banner />
      {/* Home section */}
      <div className="black_section" id="home">
        <Container fluid className="limiter">
          <Row className="Row info reverseRow">
            <Col className="info-div" sm={12} lg={7} md={7}>
              <Myinfo />
            </Col>
            <Col className="topLogoCol" sm={12} lg={5} md={5}>
              <MoinhoLogo />
            </Col>
          </Row>
        </Container>
      </div>
      <Container fluid className="limiter" id="about">
        <Row className="Row logoSection">
          <Col className="info-div">
            <Collapse />
          </Col>
        </Row>
      </Container>

      {/* Mentors */}
      <div className="grey_white_section">
        <Container fluid className="limiter" id="mentors">
          <Row className="mentorsSection Row">
            <Mentors />
          </Row>
        </Container>
      </div>
      {/* Mentors ending */}

      {/* Agenda */}

      <Container fluid className="limiter" id="agenda">
        <Row className="agendaSection">
          <Col className="info-div">
            <SectionAgendaAbout />
          </Col>
        </Row>
      </Container>

      {/* Agenda ending */}

      {/* Online meetings */}

      <div className="black_section no-pb">
        <Container id="online-meetings" fluid className="limiter">
          <Row className="Row info2">
            <OnlineMeetings />
          </Row>
        </Container>
      </div>

      {/* Online meetings ending */}

      {/* Prizes */}
      <div className="grey_white_section">
        <Container fluid className="limiter" id="prizes">
          <Row className="Row info2">
            <Prizes />
          </Row>
        </Container>
      </div>
      {/* Prizes ending */}

      {/* Team */}
      <div className="black_section no-pb">
        <Container fluid className="limiter" id="team">
          <Row className="Row info2">
            <Team />
          </Row>
        </Container>
      </div>
      {/* Team ending */}

      {/* Subscription */}
      {/* The event ended so let this section commented */}
      {/* <div className="black_section" id="subscription">
        <Container fluid className="limiter">
          <Row className="Row info">
            <Col className="info-div">
              <Subscription />
            </Col>
          </Row>
        </Container>
      </div> */}
      {/* Subscription ending */}

      {/* Subscription closed */}
      <div className="black_section" id="subscription">
        <Container fluid className="limiter">
          <Row className="Row info">
            <SubscriptionClosed />
          </Row>
        </Container>
      </div>
      {/* Subscription closed ending */}

      {/* ********Event here ***** */}
      <Container fluid className="limiter">
        <Row className="activitiesection" id="event">
          <ActivityHeading
            title={EVENT_SECTION.TITLE}
            description={EVENT_SECTION.DESCRIPTION}
          />
          {EVENT_SECTION.ACTIVITIES.map(ActivityGroup)}
        </Row>
      </Container>
      {/* ********Event ending here ***** */}

      {/* Enterprise section */}
      <div className="black_section" id="activities">
        <Container fluid className="limiter">
          <Row className="Row info2">
            <Col className="info-div" sm={12} lg={12} md={12}>
              <SectionEnterprise />
            </Col>
          </Row>
        </Container>
      </div>
      {/* Enterprise section ending */}

      {/* Suporters */}
      <div className="grey_section">
        <Container fluid className="limiter" id="suporters">
          <Row className="suportersSection Row">
            <Col>
              <Supporters />
            </Col>
          </Row>
        </Container>
      </div>

      {/* Camping here */}
      <div className="grey_white_section" id="camping">
        <Container fluid className="limiter">
          <Row className="Row info2">
            <Col className="info-div" sm={12} lg={12} md={12}>
              <SectionCamping />
            </Col>
          </Row>
        </Container>
      </div>
      {/* Camping ending here */}

      {/* Low code section */}
      <div className="grey_section" id="low_code">
        <Container fluid className="limiter">
          <Row className="Row info">
            <Col className="info-div">
              <LowCode />
            </Col>
          </Row>
        </Container>
      </div>
      {/* Low code section ending */}

      {/* Not programmer section */}
      <div className="grey_white_section">
        <Container fluid className="limiter">
          <Row className="Row info2">
            <Col className="info-div" sm={12} lg={12} md={12}>
              <NotProgrammer />
            </Col>
          </Row>
        </Container>
      </div>
      {/* Not programmer section ending */}

      {/* ********Sponsors here ***** */}
      <Container fluid className="limiter">
        <Row className="sponsorSection" id="partners">
          <SponsorsHead />
          {sponsors.map(SponsorGroup)}
        </Row>
        {/* ********Sponsors ending here ***** */}
      </Container>
      <Footer />
    </div>
  );
}
