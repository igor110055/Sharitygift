/* eslint-disable */
import React from "react";
import { Row, Col, Container, Card, CardBody } from "reactstrap";
import Image from "next/image";
import Link from "next/link";
import PartnershipCard from "../../basic/partnership-card";
import img1 from "../../../assets/images/partnership/img1.png";
import img2 from "../../../assets/images/partnership/img2.png";
import img3 from "../../../assets/images/partnership/img3.png";
import img4 from "../../../assets/images/partnership/img4.png";

const PartnershipPortfolio = () => {
  return (
    <div>
      <div className="spacer">
        <Container>
            <Row>
                <Col sm={12}>
                    <p className="text-black">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
                    </p>
                </Col>
            </Row>
            <p className="p-t-20"></p>
          <Row>
            <Col md="12">
                <div className="align-center">
                    <h3 className="midtitle"><b>Explore our Partnerships</b></h3>
                </div>
            </Col>
          </Row>
          <Row className="m-t-30">
            <Col md="3">
              <PartnershipCard imgSrc={img1} />
            </Col>
            <Col md="3">
              <PartnershipCard imgSrc={img2} />
            </Col>
            <Col md="3">
              <PartnershipCard imgSrc={img3} />
            </Col>
            <Col md="3">
              <PartnershipCard imgSrc={img4} />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default PartnershipPortfolio;
