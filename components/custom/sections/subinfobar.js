import React from "react";
import { Container, Row, Col, Button } from "reactstrap";
import Link from "next/link";

const SubInfobar = () => {
  return (
    <div className="subinfobar" id="coming">
      <Container className="py-4">
        <Row className="m-t-20">
            <Col sm={12}>
                <h2 className="midtitle text-white"><b>Welcome to Sharity, Crypto Donations</b></h2>
            </Col>
        </Row>
        <p className="text-white p-t-10 p-b-5">
          The Sharity donation platform is a one-stop shop where charity organizations are fully organized, so you don&apos;t have to worry about the funds reaching the proper hands. It is our mission to make the donation process much simpler and secure
        </p>
      </Container>
    </div>
  );
};

export default SubInfobar;
