import {Col, Row} from 'react-bootstrap';
import {CAMPING_PARTY_SECTION} from '../../Module/General';

function SectionCamping() {
  return (
    <div className="SectionCamping">
      <Row className="imgContainer">
        <Col className="col-6">
          <div>
            <img
              className="rounded campingImg"
              src={CAMPING_PARTY_SECTION.img}
              alt={`Camping Party`}
            />
          </div>
        </Col>

        <Col className="col-6">
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
    </div>
  );
}

export {SectionCamping};
