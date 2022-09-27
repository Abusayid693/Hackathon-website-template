import {SectionEnterprise} from 'components/Enterprise/index.jsx';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import {
  Logo,
  LogoSectionAbout,
  SectionAgendaAbout
} from '../../components/About/index.jsx';
import {FirstPrize, PrizeHeading} from '../../components/Activities/index.jsx';
import {Banner} from '../../components/Banner/index.jsx';
import Footer from '../../components/Footer/index.jsx';
import {MoinhoLogo, Myinfo} from '../../components/Landing/index.jsx';
import {
  Sponsor,
  SponsorsHead,
  SponsorUS
} from '../../components/Sponsors/sponsors.jsx';
import {Prizeinfo, sponsors} from '../../Module/General';
import './about.css';
import pattern from './assets/pattern4.png';

const SponsorGroup = (props, index) => {
  return (
    <Row key={index}>
      {props.map((s, i) => (
        <Col key={i} className="" sm={12} lg={4} md={6}>
          {' '}
          <Sponsor srcx={s.src} />{' '}
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
        <Col key={i} className="" sm={12} lg={4} md={4}>
          <FirstPrize icon={s.icon} type={s.type} content={s.content} />
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
        <Container fluid>
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
      <Container fluid>
        {/* Agenda section  */}
        <Row className="logoSection">
          <Col className="info-div" sm={12} lg={8} md={8}>
            <LogoSectionAbout />
          </Col>
          <Col className="info-div" sm={12} lg={4} md={4}>
            <Logo />
          </Col>
        </Row>
        <Row className="info-div">
          <Col>
            <SectionAgendaAbout />
          </Col>
        </Row>
      </Container>
      {/* Enterprise section */}
      <div className="color_section" id="enterprise">
        <Container fluid>
          <Row className="Row info2">
            <Col className="info-div" sm={12} lg={12} md={12}>
              <SectionEnterprise />
            </Col>
          </Row>
        </Container>
      </div>
      <Container fluid>
        {/* ********Event here ***** */}
        <Row className="prizesection" id="prizes">
          <PrizeHeading type="Prize section" />
          {Prizeinfo.map(PrizeGroup)}
        </Row>
        {/* ********Event ending here ***** */}

        {/* ********Sponsors here ***** */}
        <Row className="sponsorSection" id="sponsors">
          <SponsorsHead />
          <SponsorUS />
          {sponsors.map(SponsorGroup)}
        </Row>
        {/* ********Sponsors ending here ***** */}
      </Container>
      <Footer />
    </div>
  );
}
