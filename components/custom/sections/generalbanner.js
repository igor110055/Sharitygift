import React from "react";
import { Container, Row, Col } from "reactstrap";

const GeneralBanner = (props) => {
  return (
    <div className="main-banner" id="coming">
      <Container className="py-5 m-t-80">
        <Row>
          <Col md="6">
            <div className="d-flex align-items-center">
              <div>
                <h1 className="title text-white font-weight-bold">
                    {props.title}
                </h1>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default GeneralBanner;
