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
import {MoinhoLogo, Myinfo} from '../../components/Landing/index.jsx';
import {Sponsor, SponsorsHead} from '../../components/Sponsors/sponsors.jsx';
import {EVENT_SECTION, sponsors} from '../../Module/General';
import './about.css';
import pattern from './assets/pattern4.png';

const SponsorGroup = (props, index) => {
  return (
    <Row key={index}>
      {props.map((s, i) => (
        <Col key={i} className="" sm={12} lg={4} md={6}>
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
  return (
    <div className="Whole_div" style={{backgroundImage: `url(${pattern})`}}>
      {/* Initial banner */}
      <Banner />
      {/* Home section */}
      <div className="color_section" id="home">
        <Container fluid className="limiter">
          <Row className="Row info">
            <Col className="info-div" sm={12} lg={7} md={7}>
              <Myinfo />
            </Col>
            <Col className="topLogoCol" sm={12} lg={5} md={5}>
              <MoinhoLogo />
            </Col>
          </Row>
        </Container>
      </div>
      <Container fluid className="limiter" id="agenda">
        {/* Agenda section  */}
        <Row className="logoSection">
          <Col className="info-div" sm={12} lg={8} md={8}>
            <LogoSectionAbout />
          </Col>
        </Row>
        <Row className="info-div">
          <Col>
            <SectionAgendaAbout />
          </Col>
        </Row>
      </Container>
      {/* Enterprise section */}
      <div className="color_section" id="activities">
        <Container fluid className="limiter">
          <Row className="Row info2">
            <Col className="info-div" sm={12} lg={12} md={12}>
              <SectionEnterprise />
            </Col>
          </Row>
        </Container>
      </div>
      <Container fluid className="limiter">
        {/* ********Event here ***** */}
        <Row className="prizesection" id="event">
          <PrizeHeading title={EVENT_SECTION.TITLE} />
          {EVENT_SECTION.ACTIVITIES.map(PrizeGroup)}
        </Row>
        {/* ********Event ending here ***** */}
      </Container>
      {/* Camping here */}
      <div className="color_section" id="camping">
        <Container fluid className="limiter">
          <Row className="Row info2 campingSection">
            <SectionCamping />
          </Row>
        </Container>
      </div>
      {/* Camping ending here */}
      {/* Form here */}
      <div className="yellow_section" id="form">
        <Container fluid className="limiter">
          <SectionForm />
        </Container>
      </div>
      {/* Form ending here */}
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
