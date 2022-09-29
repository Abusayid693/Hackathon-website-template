import {Col, Row} from 'react-bootstrap';
import {FORM_SECTION} from '../../Module/General';

function SectionForm() {
  return (
    <div className="formSection">
      <Row className="formRow">
        <Col lg={8} md={8} className="formImg hidden-sm hidden-xs">
          <div
            className="formImg"
            style={{backgroundImage: 'url(/Assets/hackathonBanner.jpeg)'}}
          />
        </Col>
        <Col sm={12} lg={4} md={4}>
          <div className="formTitle">
            <h2>{FORM_SECTION.TITLE}</h2>
          </div>
          <div className="formContainer center-block">
            <form className="form-horizontal">
              <div className="form-group">
                <input
                  className="form-control"
                  placeholder="Nome"
                  type="text"
                />
              </div>
              <div className="form-group">
                <input
                  className="form-control"
                  placeholder="Email"
                  type="text"
                />
              </div>
              <div className="form-group">
                <input
                  className="form-control"
                  placeholder="Whatsapp"
                  type="text"
                />
              </div>

              <div className="form-group formBtnContainer">
                <input className="btn formBtn" type="submit" value="Me avise" />
              </div>
            </form>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export {SectionForm};
