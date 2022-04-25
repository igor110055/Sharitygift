/* eslint-disable */
import React from "react";
import Image from "next/image";
import { Container, Row, Col } from "reactstrap";
import Link from "next/link";

import logo from "../../assets/images/logos/newshari.png";

const Footer = () => {
  return (
    <div className="footer4 m-t-20 b-t">
      <Container className="m-t-10">
        <Row>
          <Col lg={12} className="text-center" style={{display: "flex", justifyContent: "center"}}>
              {/* <Image src={logo} alt="sharity" width={80} height={80} /> */}
              <p className="text-black m-b-0 p-t-30 p-l-35" style={{whiteSpace: "normal", lineBreak: "anywhere"}}>
                <Link href="/#"><a style={{whiteSpace: "nowrap"}} className="text-black p-r-20">About</a></Link>
                <Link href="/donors"><a style={{whiteSpace: "nowrap"}} className="text-black p-r-20">Donor</a></Link>
                <Link href="/#"><a style={{whiteSpace: "nowrap"}} className="text-black p-r-20">Partner</a></Link>
                <Link href="/#"><a style={{whiteSpace: "nowrap"}} className="text-black p-r-20">Terms</a></Link>
                <Link href="/#"><a style={{whiteSpace: "nowrap"}} className="text-black p-r-20">Policy</a></Link>
                <Link href="/#"><a style={{whiteSpace: "nowrap"}} className="text-black p-r-20">FAQ</a></Link>
              </p>
          </Col>
        </Row>
        <div className="f4-bottom-bar m-b-10">
          {/* <Row className="justify-content-center m-b-10">
            <Col md="6" className="text-center">
              <div className="font-25">
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
          </Row> */}
          <Row className="justify-content-center m-b-10">
            <Col md="6" className="text-center">
              <div className="font-14">
                <div className="m-t-5 m-b-5 copyright">
                  <Link href="#">
                    <a className="">Terms of Use | </a>
                  </Link>
                  {/* <Link href="#">
                    <a className="">Legal Disclaimer | </a>
                  </Link> */}
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
                <div className="m-t-5 m-b-5 copyright m-l-10">
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
