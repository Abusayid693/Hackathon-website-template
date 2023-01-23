import {useState} from 'react';
import {Col, Row} from 'react-bootstrap';
import {FORM_SECTION} from '../../Module/General';

function SectionForm({title, description, successText}) {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(undefined);
  const [error, setError] = useState(undefined);

  const handleSubmit = async e => {
    try {
      setLoading(true);
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

      const response = await fetch(`/api/form`, requestOptions);
      if (response.status === 200) {
        setSuccess(true);
        setError(undefined);
      } else {
        const body = await response.json();
        console.log(body);
        setSuccess(false);
        setError(body.error.message);
      }
      setLoading(false);
    } catch (e) {
      setLoading(false);
      console.log('ERROR LOG', e);
    }
  };

  return (
    <div className="formSection">
      <Row className="flex-column justify-content-center align-items-center">
        <Col>
          {!success && (
            <div className="formTitle">
              <h3>{title || FORM_SECTION.TITLE}</h3>
              {description && <p>{description}</p>}
            </div>
          )}
        </Col>
        <Col
          className="d-flex justify-content-center flex-column align-items-center"
          sm={12}
          lg={5}
          md={5}
        >
          {!success && (
            <div className="formContainer">
              <form className="form-horizontal" onSubmit={handleSubmit}>
                <div className="form-group">
                  <input
                    className="form-control"
                    placeholder="Nome"
                    required
                    name="name"
                    type="text"
                  />
                </div>
                <div className="form-group">
                  <input
                    className="form-control"
                    placeholder="Email"
                    required
                    name="email"
                    type="text"
                  />
                </div>
                <div className="form-group">
                  <input
                    className="form-control"
                    placeholder="Telefone"
                    required
                    name="phone"
                    pattern="^\s*(\d{2}|\d{0})[-. ]?(\d{5}|\d{4})[-. ]?(\d{4})[-. ]?\s*$"
                    type="text"
                  />
                </div>

                <div className="form-group formBtnContainer d-flex justify-content-center align-items-center">
                  <input
                    className="mainButton btn-primary btn"
                    type="submit"
                    disabled={loading}
                    value="Me avise"
                  />
                  {loading && (
                    <div className="spinner-border ml-3" role="status">
                      <span className="sr-only">Loading...</span>
                    </div>
                  )}
                </div>
              </form>
            </div>
          )}
          <div className="alert-container">
            {!!success && (
              <div className="d-flex flex-column text-center">
                <h3 className="display-1 mb-5">
                  {successText || (
                    <>
                      <strong>Parabéns!</strong> Você foi cadastrado com
                      successo.
                    </>
                  )}
                </h3>
                <a href="#home">
                  <p>Voltar ao topo</p>
                </a>
              </div>
            )}
            {!!error && (
              <div>
                <div className="alert alert-danger" role="alert">
                  <h3>{error}</h3>
                </div>
              </div>
            )}
          </div>
        </Col>
      </Row>
    </div>
  );
}

export {SectionForm};
