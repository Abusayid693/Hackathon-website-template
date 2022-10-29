import {Col, Row} from 'react-bootstrap';
import {CAMPING_PARTY_SECTION} from '../../Module/General';

function SectionCamping() {
  return (
    <Row className="SectionCamping">
      <Col sm={12} md={12} lg={6}>
        <div>
          <img
            className="rounded campingImg"
            src={CAMPING_PARTY_SECTION.img}
            alt={`Camping Party`}
          />
        </div>
      </Col>

      <Col sm={6} md={12} lg={6}>
        <div className="camping_description_wrapper">
          <p className="campingDescription">
            {CAMPING_PARTY_SECTION.LONG_DESCRIPTION}
          </p>
          <p className="campingDescription">
            {CAMPING_PARTY_SECTION.SHORT_DESCRIPTION}
          </p>
        </div>
      </Col>
    </Row>
  );
}

export {SectionCamping};
