/* eslint-disable */
import React from "react";
import { Row, Col, Container, Card, CardBody } from "reactstrap";
import Image from "next/image";
import Link from "next/link";
import PartnershipCard from "../../basic/partnership-card";
import img1 from "../../../assets/images/campaigns/img1.jpg";
import img2 from "../../../assets/images/campaigns/img2.jpg";
import img3 from "../../../assets/images/campaigns/img3.jpg";
import img4 from "../../../assets/images/campaigns/img4.jpg";
import img5 from "../../../assets/images/campaigns/img5.jpg";
import img6 from "../../../assets/images/campaigns/img6.jpg";
import img7 from "../../../assets/images/campaigns/img7.jpg";
import img8 from "../../../assets/images/campaigns/img8.jpg";
import img9 from "../../../assets/images/campaigns/img9.jpg";

const CampaignsPortfolio = () => {
  return (
    <div>
      <div className="spacer">
        <Container>
            <Row>
                <Col sm={12}>
                    <p className="text-black">
                        The Giving Block organizes crypto fundraisers and campaigns to support causes and missions around the globe.
                    </p>
                </Col>
            </Row>
            <p className="p-t-20"></p>
            <Row className="m-t-30">
                <Col md="4">
                    <PartnershipCard imgSrc={img7} />
                </Col>
                <Col md="4">
                    <PartnershipCard imgSrc={img8} />
                </Col>
                <Col md="4">
                    <PartnershipCard imgSrc={img9} />
                </Col>
                <Col md="4">
                    <PartnershipCard imgSrc={img1} />
                </Col>
                <Col md="4">
                    <PartnershipCard imgSrc={img2} />
                </Col>
                <Col md="4">
                    <PartnershipCard imgSrc={img3} />
                </Col>
                <Col md="4">
                    <PartnershipCard imgSrc={img4} />
                </Col>
                <Col md="4">
                    <PartnershipCard imgSrc={img5} />
                </Col>
                <Col md="4">
                    <PartnershipCard imgSrc={img6} />
                </Col>
            </Row>
        </Container>
      </div>
    </div>
  );
};

export default CampaignsPortfolio;
