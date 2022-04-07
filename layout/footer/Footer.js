/* eslint-disable */
import React from "react";
import Image from "next/image";
import { Container, Row, Col } from "reactstrap";
import Link from "next/link";

import logo from "../../assets/images/logos/newshari.png";

const Footer = () => {
  return (
    <div className="footer4 m-t-20 b-t">
      <Container className="m-t-40">
        <Row>
          <Col lg="4" md="12" className="m-b-30">
            <Image src={logo} alt="wrapkit" width={90} height={90} />
            <p className="text-black">OurStudio is a digital agency UI / UX Design and Website Development located in Ohio, United States of America</p>
          </Col>
          <Col lg="2" md="4" className="m-b-30 m-t-30">
            <h5 className="m-b-20 boldcontent"><b>Fundraiser For</b></h5>
            <p>
              <Link href="#"><a className="link">Our Story</a></Link>
            </p>
            <p>
              <Link href="#"><a className="link">Vision and mission</a></Link>
            </p>
            <p>
              <Link href="#"><a className="link">Management</a></Link>
            </p>
            <p>
              <Link href="#"><a className="link">Donation</a></Link>
            </p>
            <p>
              <Link href="#"><a className="link">Blog</a></Link>
            </p>
            <p>
              <Link href="#"><a className="link">Contact us</a></Link>
            </p>
          </Col>
          <Col lg="2" md="4" className="m-b-30 m-t-30">
            <h5 className="m-b-20 boldcontent"><b>Learn More</b></h5>
            <p>
              <Link href="#"><a className="link">Service</a></Link>
            </p>
            <p>
              <Link href="#"><a className="link">Financial Reports</a></Link>
            </p>
            <p>
              <Link href="#"><a className="link">Term and Condition</a></Link>
            </p>
            <p>
              <Link href="#"><a className="link">FAQs</a></Link>
            </p>
            <p>
              <Link href="#"><a className="link">Partners</a></Link>
            </p>
            <p>
              <Link href="#"><a className="link">Privacy</a></Link>
            </p>
          </Col>
          <Col lg="2" md="4" className="m-t-30">
            <h5 className="m-b-20 boldcontent"><b>Resources</b></h5>
            <p>
              <Link href="#"><a className="link">Service</a></Link>
            </p>
            <p>
              <Link href="#"><a className="link">Financial Reports</a></Link>
            </p>
            <p>
              <Link href="#"><a className="link">Term and Condition</a></Link>
            </p>
            <p>
              <Link href="#"><a className="link">FAQs</a></Link>
            </p>
            <p>
              <Link href="#"><a className="link">Partners</a></Link>
            </p>
            <p>
              <Link href="#"><a className="link">Privacy</a></Link>
            </p>
          </Col>
        </Row>
        <div className="f4-bottom-bar m-b-10">
          <Row className="justify-content-center m-b-10">
            <Col md="6" className="text-center">
              <div className="font-14" style={{fontSize: 25}}>
                <div className="round-social light">
                  <Link href="#">
                    <a className="link">
                      <i className="fa fa-facebook"></i>
                    </a>
                  </Link>
                  <Link href="#">
                    <a className="link">
                      <i className="fa fa-instagram"></i>
                    </a>
                  </Link>
                  <Link href="#">
                    <a className="link">
                      <i className="fa fa-linkedin"></i>
                    </a>
                  </Link>
                  <Link href="#">
                    <a className="link">
                      <i className="fa fa-whatsapp"></i>
                    </a>
                  </Link>
                  <Link href="#">
                    <a className="link">
                      <i className="fa fa-envelope"></i>
                    </a>
                  </Link>
                </div>
              </div>
            </Col>
          </Row>
          <Row className="justify-content-center m-b-10">
            <Col md="6" className="text-center">
              <div className="font-14">
                <div className="m-t-5 m-b-5 copyright">
                  <Link href="#">
                    <a className="">Terms of Use | </a>
                  </Link>
                  <Link href="#">
                    <a className="">Legal Disclaimer | </a>
                  </Link>
                  <Link href="#">
                    <a className="">Privacy Policy </a>
                  </Link>
                </div>
              </div>
            </Col>
            
          </Row>
          <Row className="justify-content-center m-b-20">
            <Col md="6" className="text-center">
              <div className="font-14">
                <div className="m-t-5 m-b-5 copyright">
                  All Rights Reserved by{" "}
                  <Link href="#">
                    <a className="link p-10 p-l-0">Sharity</a>
                  </Link>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};
export default Footer;
