import React from "react";
import Link from "next/link";
import { Container, Row, Col } from "reactstrap";
import Image from "next/image";
import fromphoneimg from "../../assets/images/landingpage/donate-from-phone.png";
import IconCard from "../basic/icon-card";

const Banner4 = () => {
  return (
    <div className="static-slider-head banner2 m-t-100">
      <Container className="m-b-20">
        <Row className="">
          <Col lg="6" md="6" className="align-self-center">
            <h5 className="subtitle text-black">
                Available now
            </h5>
            <h3 className="midtitle">
                Easy Donate from your phone
            </h3>
            <h5 className="subcontent font-light">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </h5>
            <p className="p-t-30"></p>
            <a
              href="#"
              className="btn btn-appstore m-r-20 btn-md m-b-10"
            >
            </a>
            <a
              href="#"
              className="btn btn-googleplay m-r-20 btn-md m-b-10"
            >
            </a>
          </Col>
          <Col lg="6" md="6">
            <Image
              src={fromphoneimg}
              alt="donate from phone"
              className="img-responsive img-thumbnail"
            />
          </Col>
        </Row>
      </Container>
        <Container>
            <Row className="justify-content-center m-b-30 m-t-60">
                <Col md="7" className="text-center">
                    <h3 className="text-black font-bold">Ready to start fundraising?</h3>
                </Col>
            </Row>
        </Container>
        <Container>
            <Row className="justify-content-center m-b-30 m-t-10">
                <Col md="7" className="text-center">
                    <a
                        href="#"
                        className="btn btn-light m-r-20 btn-md m-b-10"
                    >
                        Start a sharity
                    </a>
                </Col>
            </Row>
        </Container>
    </div>
  );
};

export default Banner4;
