import React from "react";
import { Container, Row, Col, Button } from "reactstrap";
import Link from "next/link";

const Infobar = () => {
  return (
    <div className="infobar" id="coming">
      <Container className="py-4 mt-4">
        <Row>
          <Col md="4">
            <p className="p-t-10"></p>
            <div className="d-flex align-items-center">
              <div>
                <h4 className="subtitle font-light text-white">
                    Sharity's
                </h4>
                <h1 className="title text-white">
                    Charity
                </h1>
              </div>
            </div>
          </Col>
          <Col md="8">
            <div className="d-flex align-items-center">
              <div>
                <h3 className="font-light text-white">
                    Lorem ipsum dolor sit amet,<br /> consectetur adipiscing elit
                </h3>
                <br />
                    <Link href="#">
                        <a className="btn btn-md btn-alternate-border m-t-0 font-14 p-t-10 p-b-10">
                            Load More
                        </a>
                    </Link>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Infobar;
