import React from 'react';
import {Row, Col, Button, ButtonGroup, ButtonToolbar} from 'react-bootstrap';

// Data
import {SUBSCRIPTION_SECTION} from '../../Module/General';

const Subscription = ({termIsOpen, setTermIsOpen}) => {
  return (
    <div className="subscriptionSection">
      <h2 className="main_subscription_text">{SUBSCRIPTION_SECTION.TITLE}</h2>
      <Row className="flex-column justify-content-center align-items-center">
        <Row>
          <Col>
            <h3 className="sec_subscription_text">
              {SUBSCRIPTION_SECTION.DESCRIPTION}
            </h3>
          </Col>
        </Row>
        <Row className="subscription_categories">
          {SUBSCRIPTION_SECTION.CATEGORIES.map((category, i) => (
            <Col key={i}>
              <p className="list-color-text">{category}</p>
            </Col>
          ))}
        </Row>
      </Row>

      <Row className="flex-column justify-content-center align-items-center mb-5">
        <Col>
          <p className="m-0">{SUBSCRIPTION_SECTION.VALUE}</p>
        </Col>
        <Col>
          <h4 className="h2">{SUBSCRIPTION_SECTION.DRAW}</h4>
        </Col>
      </Row>
      <div className="buttonContainer">
        <Row className="buttonWrapper">
          <Col>
            <Button
              className="mainButton"
              href={SUBSCRIPTION_SECTION.SUBSCRIBE_LINK}
              target="_blank"
              rel="noopener noreferrer"
            >
              Me inscrever agora
            </Button>
          </Col>
          <Col>
            <div
              className="btn secondaryButton"
              onClick={() => setTermIsOpen(!termIsOpen)}
            >
              Ler regulamento
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Subscription;
