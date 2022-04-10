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
          <Col lg="6" md="6" className="align-self-center m-b-20">
            <h4 className="subcontent font-light" style={{lineHeight: 2}}>
                Here at <b className="boldcontent">Sharity&apos;s Gift</b>, our mission is to make <b className="boldcontent">crypto giving simple</b> while highlighting your organization. We are creating a future where the gift of crypto donations becomes a standard. Our platform provides <b className="boldcontent">convenience</b> for the crypto donor, and a secure <b className="boldcontent">solution</b> for the charity, non profit, or organization to accept crypto donations <b className="boldcontent">safely.</b>
            </h4>
            {/* <IconCard /> */}
            
              Click <a
                href="#"
                className=""
                style={{textDecoration: "underline"}}
              >here</a> to learn more
            
          </Col>
          <Col lg="6" md="6" className="m-b-40">
            {/* <Image
              src={fundraisingimg}
              alt="fundraising banner"
              className="img-responsive img-thumbnail"
            /> */}
            <div className="home-banner-2">
              <h4 className="subtitle font-light description-homeprimary">
                Donate to your favorite charities, organization, and non profits quickly, safely and efficiently.
                <br />Gain favorable tax breaks, while contributing with crypto.
              </h4>
              <a
                href="#"
                className="btn btn-home-secondary m-r-40 btn-md m-t-30 "
              >
                Partnership
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Banner3;
