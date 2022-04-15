/* eslint-disable */
import React from "react";
import { Row, Col, Container, Card, CardBody } from "reactstrap";
import Image from "next/image";
import Link from "next/link";
import PartnershipCard from "../../basic/partnership-card";
import img1 from "../../../assets/images/resources/img1.jpg";
import img2 from "../../../assets/images/resources/img2.jpg";
import img3 from "../../../assets/images/resources/img3.jpg";
import img4 from "../../../assets/images/resources/img4.jpg";
import img5 from "../../../assets/images/resources/img5.jpg";
import img6 from "../../../assets/images/resources/img6.jpg";
import img7 from "../../../assets/images/resources/img7.jpg";
import img8 from "../../../assets/images/resources/img8.jpg";

const ResourcesPortfolio = (props) => {
  return (
    <div>
      <div className="spacer">
        <Container>
            <Row>
                <Col sm={12}>
                    <h3 className="midtitle"><b>Lorem ipsum dolor sit amet, Crypto Donations</b></h3>
                </Col>
            </Row>
            <p className="p-t-20"></p>
            {props.part == 1 ? <Row className="m-t-30">
                
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
            </Row>: <Row className="m-t-30">
                
                <Col md="3">
                    <PartnershipCard imgSrc={img5} />
                </Col>
                <Col md="3">
                    <PartnershipCard imgSrc={img6} />
                </Col>
                <Col md="3">
                    <PartnershipCard imgSrc={img7} />
                </Col>
                <Col md="3">
                    <PartnershipCard imgSrc={img8} />
                </Col>
            </Row>}
            
            <Row>
                <Col sm={12} className="align-center">
                    <Link href="/#">
                        <a className="btn btn-md m-t-20 btn-alternate  p-r-40 p-l-40 p-t-10 p-b-10">
                            <span className="m-t-10">See More</span>
                        </a>
                    </Link>
                </Col>
            </Row>
        </Container>
      </div>
    </div>
  );
};

export default ResourcesPortfolio;
