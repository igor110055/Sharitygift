import React from "react";
import { Container, Row, Col, Button } from "reactstrap";
import Link from "next/link";

const SubInfobar = () => {
  return (
    <div className="subinfobar" id="coming">
      <Container className="py-4">
        <Row className="m-t-20">
            <Col sm={12}>
                <h2 className="midtitle text-white"><b>Lorem ipsum dolor sit amet, Crypto Donations</b></h2>
            </Col>
        </Row>
        <p className="text-white p-t-10 p-b-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
        </p>
      </Container>
    </div>
  );
};

export default SubInfobar;
