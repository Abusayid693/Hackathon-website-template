import {LOW_CODE_SECTION} from 'Module/General';
import {Row, Col} from 'react-bootstrap';

const LowCode = () => {
  return (
    <Row className="lowCodeSection">
      <Col className="title_wrapper">
        <h1 className="title_default">{LOW_CODE_SECTION.TITLE}</h1>
      </Col>
      <Col className="imgContainer">
        <img
          className="Banner img-rounded"
          src={LOW_CODE_SECTION.SRC}
          alt="lowCode"
        />
      </Col>
      <Col>
        <p className="lowCodeDescription">{LOW_CODE_SECTION.DESCRIPTION}</p>
      </Col>
    </Row>
  );
};

export default LowCode;
