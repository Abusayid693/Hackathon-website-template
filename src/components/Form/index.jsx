import {Col, Row} from 'react-bootstrap';
import {FORM_SECTION} from '../../Module/General';

const baseUrl = process.env.NEXT_SERVER_URL;

const handleSubmit = e => {
  e.preventDefault();
  const form = e.target;
  const formData = new FormData(form);

  const data = {};
  for (let entry of formData.entries()) {
    data[entry[0]] = entry[1];
  }

  const requestOptions = {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(data)
  };
  fetch(`/api/form`, requestOptions)
    .then(response => response.json())
    .then(data => console.log(data));
};

function SectionForm() {
  return (
    <div className="formSection">
      <Row className="flex-column justify-content-center align-items-center">
        <Col>
          <div className="formTitle">
            <h2>{FORM_SECTION.TITLE}</h2>
          </div>
        </Col>
        <Col className="d-flex justify-content-center" sm={12} lg={5} md={5}>
          <div className="formContainer">
            <form className="form-horizontal" onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  className="form-control"
                  placeholder="Nome"
                  name="name"
                  type="text"
                />
              </div>
              <div className="form-group">
                <input
                  className="form-control"
                  placeholder="Email"
                  name="email"
                  type="text"
                />
              </div>
              <div className="form-group">
                <input
                  className="form-control"
                  placeholder="Whatsapp"
                  name="phone"
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
