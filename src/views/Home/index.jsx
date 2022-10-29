import React from 'react';
import {SectionCamping} from 'components/Camping/index.jsx';
import {SectionEnterprise} from 'components/Enterprise/index.jsx';
import {SectionForm} from 'components/Form/index.jsx';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import {
  LogoSectionAbout,
  SectionAgendaAbout
} from '../../components/About/index.jsx';
import {FirstPrize, PrizeHeading} from '../../components/Activities/index.jsx';
import {Banner} from '../../components/Banner/index.jsx';
import Footer from '../../components/Footer/index.jsx';
import Collapse from '../../components/Collapse/index.jsx';
import {MoinhoLogo, Myinfo} from '../../components/Landing/index.jsx';
import Subscription from '../../components/Subscription/index.jsx';
import {Sponsor, SponsorsHead} from '../../components/Sponsors/sponsors.jsx';
import {EVENT_SECTION, sponsors} from '../../Module/General';
import {Mentors, Supporters} from 'components/People/index.jsx';

const SponsorGroup = (props, index) => {
  return (
    <Row key={index}>
      {props.map((s, i) => (
        <Col key={i} className="" sm={12} lg={4} md={12}>
          {' '}
          <Sponsor srcx={s.src} name={s.name} link={s.link} />{' '}
        </Col>
      ))}
    </Row>
  );
};

// Prize group
const PrizeGroup = (props, index) => {
  return (
    <Row key={index}>
      {props.map((s, i) => (
        <Col key={i} className="center-block" sm={12} lg={4} md={4}>
          <FirstPrize icon={s.icon} title={s.title} />
        </Col>
      ))}
    </Row>
  );
};
// Prize group ending

export default function HomePage() {
  const [termIsOpen, setTermIsOpen] = React.useState(false);

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
        <Row className="logoSection">
          <Col className="info-div" sm={12} lg={8} md={8}>
            <LogoSectionAbout />
          </Col>
        </Row>
        <Row className="Row">
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

      {/* Subscription */}
      <div className="black_section" id="subscription">
        <Container fluid className="limiter">
          <Row className="Row info">
            <Col className="info-div">
              <Subscription
                termIsOpen={termIsOpen}
                setTermIsOpen={setTermIsOpen}
              />
            </Col>
          </Row>
        </Container>
      </div>
      {/* Subscription ending */}

      {/* ********Event here ***** */}
      <Container fluid className="limiter">
        <Row className="prizesection" id="event">
          <PrizeHeading title={EVENT_SECTION.TITLE} />
          {EVENT_SECTION.ACTIVITIES.map(PrizeGroup)}
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
