/* eslint-disable */
import React from "react";
import { Row, Col, Container, Card, CardBody } from "reactstrap";
import Link from "next/link";
import Image from "next/image";
import Fundraiser from "../../basic/fundraiser";
import img1 from "../../../assets/images/portfolio/img10.jpg";
import img2 from "../../../assets/images/portfolio/img11.jpg";
import img3 from "../../../assets/images/portfolio/img12.jpg";

const MedicalRaisers = () => {
  return (
    <div>
      <div className="spacer">
        <Container>
          <Row>
            <Col md="12">
              <h3 className="midtitle">Medical Fundraisers</h3>
            </Col>
          </Row>
          <Row className="m-t-20">
            <Col md="4">
              <Fundraiser imgSrc={img1} />
            </Col>
            <Col md="4">
              <Fundraiser imgSrc={img2} />
            </Col>
            <Col md="4">
              <Fundraiser imgSrc={img3} />
            </Col>
          </Row>
        </Container>
        <Container>
          <Row className="align-right">
            <Col md="12">
              <Link href="#"><a href="#"><h5>See More <i className="fa fa-arrow-right"></i></h5></a></Link>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default MedicalRaisers;
