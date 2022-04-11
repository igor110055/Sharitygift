import React from "react";
import Link from "next/link";
import { Container, Row, Col } from "reactstrap";
import Image from "next/image";
import bannerimg from "../../assets/images/landingpage/banner-img.jpg";

const Banner2 = () => {
  return (
    <div className="static-slider-head banner2">
      <Container>
        <Row className="">
          <Col lg="6" md="6" className="align-self-center">
            <h1 className="title text-homeprimary m-t-0">
            The Presence of giving
            </h1>
            <div className="home-banner-1">
              <h4 className="subtitle font-light description-homeprimary">
                Donate to your favorite charities, organization, and non profits quickly, safely and efficiently.
                <br />Gain favorable tax breaks, while contributing with crypto.
              </h4>
              <a
                href="#"
                className="btn btn-home-primary m-r-40 btn-md m-t-30 "
              >
                Donate Crypto
              </a>
              <Link href="/#coming">
                <a className="btn btn-md m-t-30 btn-home-link p-r-0 p-l-0">
                  <i className="fa fal fa-play-circle m-r-10 font-40" /> <span className="m-t-10">Watch How It Works</span>
                </a>
              </Link>
            </div>
          </Col>
          <Col lg="6" md="6" className="m-b-40">
            <Image src={bannerimg} alt="sharity banner" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Banner2;
