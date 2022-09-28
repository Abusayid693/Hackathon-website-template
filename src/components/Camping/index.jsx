import {Col, Row} from 'react-bootstrap';
import {CAMPING_PARTY_SECTION} from '../../Module/General';
import './style.css';

function SectionCamping() {
  return (
    <div className="SectionCamping">
      <Row className="imgContainer">
        {CAMPING_PARTY_SECTION.imgs.map((img, i) => (
          <Col key={i} className="center-block" sm={12} lg={12} md={12}>
            <img
              className="img-responsive img-circle campingImg"
              src={img}
              alt={`Camping Party ${i}`}
            />
          </Col>
        ))}
      </Row>
      <p className="campingDescription">{CAMPING_PARTY_SECTION.DESCRIPTION}</p>
    </div>
  );
}

export {SectionCamping};
