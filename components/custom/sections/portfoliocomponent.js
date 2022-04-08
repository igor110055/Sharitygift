/* eslint-disable */
import React from "react";
import { Row, Col, Container, Card, CardBody } from "reactstrap";
import Image from "next/image";
import Fundraiser from "../../basic/fundraiser";
import img1 from "../../../assets/images/portfolio/img1.webp";
import img2 from "../../../assets/images/portfolio/img2.webp";
import img3 from "../../../assets/images/portfolio/img3.webp";
import img4 from "../../../assets/images/portfolio/img4.webp";
import img5 from "../../../assets/images/portfolio/img5.webp";
import img6 from "../../../assets/images/portfolio/img6.webp";

const PortfolioComponent = () => {
  return (
    <div>
      <div className="spacer">
        <Container>
          <Row>
            <Col md="12">
              <h3 className="midtitle">Top Fundraisers</h3>
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
            <Col md="4">
              <Fundraiser imgSrc={img4} />
            </Col>
            <Col md="4">
              <Fundraiser imgSrc={img5} />
            </Col>
            <Col md="4">
              <Fundraiser imgSrc={img6} />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default PortfolioComponent;
