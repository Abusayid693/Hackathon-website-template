import {Col, Row} from 'react-bootstrap';

function PrizeHeading(props) {
  return (
    <Row className="PrizeHeading">
      <Col sm={6} md={6} lg={6}>
        <h1>{props.title}</h1>
      </Col>
      <Col>
        <h2>{props.description}</h2>
      </Col>
    </Row>
  );
}

function FirstPrize(props) {
  return (
    <div className="Prizes">
      {props.icon}
      <h2>{props.title}</h2>
    </div>
  );
}

export {FirstPrize, PrizeHeading};
