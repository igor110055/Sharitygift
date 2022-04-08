import React from "react";
import { Container, Row, Col, Button } from "reactstrap";

const MainBanner = () => {
  return (
    <div className="main-banner" id="coming">
      <Container className="py-5 mt-4">
        <Row>
          <Col md="6">
            <div className="d-flex align-items-center">
              <div>
                <h2 className="title text-white font-weight-bold">
                    Browse Fundraisers
                </h2>
                <h5 className="subtitle font-light text-white">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                </h5>
                <Button
                  href="/#"
                  className="btn btn-light m-r-20 btn-md m-t-30"
                >
                  Donate Crypto
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MainBanner;
