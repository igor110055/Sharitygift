import React from "react";
import Link from "next/link";
import { Container, Row, Col } from "reactstrap";
import Image from "next/image";
import fundraisingimg from "../../assets/images/landingpage/fundraising.jpg";
import IconCard from "../basic/icon-card";

const Banner3 = () => {
  return (
    <div className="static-slider-head banner2">
      <Container>
        <Row className="">
          <Col lg="6" md="6" className="align-self-center">
            <h3 className="midtitle">
                Start Fundraising With 4 Easy Steps
            </h3>
            <h5 className="subcontent font-light">
                Donating crypto directly to a nonprofit is not a taxable event. This means you won’t have to pay any capital gains tax when you file. And, like any other donation, this type of donation would also be <b className="boldcontent">tax-deductible.</b>
            </h5>
            <IconCard />
            <a
              href="#"
              className="btn btn-light m-r-20 btn-md m-b-10"
            >
              View Details
            </a>
          </Col>
          <Col lg="6" md="6">
            <Image
              src={fundraisingimg}
              alt="fundraising banner"
              className="img-responsive img-thumbnail"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Banner3;
