// Imports
import {Row, Col} from 'react-bootstrap';

import {PRIZES_SECTION} from '../../Module/General';

const Img = ({prize}) => {
  return <img src={prize.SRC} className="prize-img shadow-4" alt={prize.ALT} />;
};

const ImageGroup = (prizes, size) => {
  return (
    <>
      <Row className="prizes-group">
        {prizes.map((prize, i) => (
          <Col key={i} className="prizes-item" sm={4} md={4} lg={2}>
            <Img prize={prize} />
          </Col>
        ))}
      </Row>
    </>
  );
};

const Prizes = () => {
  return (
    <div className="prizesContainer">
      <div className="prizes-top">
        <h2 className="title_default">{PRIZES_SECTION.TITLE}</h2>
      </div>
      <div className="prizes">
        <div className="prizes-list">{ImageGroup(PRIZES_SECTION.IMGS)}</div>
      </div>
      <div className="prize-descriptions">
        <h3 className="description">{PRIZES_SECTION.LONG_DESCRIPTION}</h3>
        <h3 className="description">{PRIZES_SECTION.SHORT_DESCRIPTION}</h3>
      </div>
    </div>
  );
};

export {Prizes};
