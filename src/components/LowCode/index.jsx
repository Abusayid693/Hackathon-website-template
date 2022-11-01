import {LOW_CODE_SECTION} from 'Module/General';
import {Row} from 'react-bootstrap';

const LowCode = () => {
  return (
    <Row className="lowCodeSection">
      <div className="title_wrapper">
        <h1 className="title_default">{LOW_CODE_SECTION.TITLE}</h1>
      </div>
      <div className="imgContainer">
        <img
          className="Banner img-rounded"
          src={LOW_CODE_SECTION.SRC}
          alt="lowCode"
        />
      </div>
      <div>
        <p className="lowCodeDescription">{LOW_CODE_SECTION.DESCRIPTION}</p>
      </div>
    </Row>
  );
};

export default LowCode;
