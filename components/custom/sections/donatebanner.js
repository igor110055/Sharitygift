import React from "react";
import { Container, Row, Col, Button } from "reactstrap";

const DonateBanner = (props) => {
  return (
    <div className="donate-banner" style={{backgroundImage: `url(${props.imgSrc})`, height: 300, backgroundRepeat: "none"}}>
      <Container className="py-5 mt-4">
        <Row>
          <Col md="6">
            <div className="d-flex align-items-center">
              <div>
                <h2 className="title text-white font-weight-bold">
                    Donate Crypto
                </h2>
                <h5 className="subtitle font-light text-white">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                </h5>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default DonateBanner;
