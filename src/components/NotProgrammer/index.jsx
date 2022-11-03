import {NOT_PROGRAMMER_SECTION} from 'Module/General';
import {Row, Col, Button} from 'react-bootstrap';

const NotProgrammer = () => {
  return (
    <Row className="notProgrammerSection">
      <Col className="notProgrammerTitleHolder">
        <h1 className="title_default">{NOT_PROGRAMMER_SECTION.TITLE}</h1>
        <h3>{NOT_PROGRAMMER_SECTION.SHORT_DESCRIPTION}</h3>
      </Col>
      <Col>{NOT_PROGRAMMER_SECTION.LONG_DESCRIPTION}</Col>
      <Col>
        <Button
          className="mainButton"
          href={NOT_PROGRAMMER_SECTION.ACTION.LINK}
        >
          {NOT_PROGRAMMER_SECTION.ACTION.LABEL}
        </Button>
      </Col>
    </Row>
  );
};

export default NotProgrammer;
