import {Col, Row} from 'react-bootstrap';

function ActivityHeading(props) {
  return (
    <Row className="ActivityHeading">
      <Col sm={6} md={6} lg={6}>
        <h1 className="title_default">{props.title}</h1>
      </Col>
      <Col>
        <h2>{props.description}</h2>
      </Col>
    </Row>
  );
}

function FirstActivity(props) {
  return (
    <div className="Activities">
      {props.icon}
      <h2>{props.title}</h2>
    </div>
  );
}

export {FirstActivity, ActivityHeading};
