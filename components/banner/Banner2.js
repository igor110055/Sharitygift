import React from "react";
import Link from "next/link";
import { Container, Row, Col } from "reactstrap";
import Image from "next/image";
import bannerimg from "../../assets/images/landingpage/banner-img.jpg";

const Banner2 = () => {
  return (
    <div className="static-slider-head banner2 m-b-30">
      <Container>
        <Row className="">
          <Col lg="12" md="12" className="align-self-center">
            <h1 className="text-homeprimary m-t-0 font-weight-bold">
            The Presence of Crypto Giving
            </h1>
          </Col>
          <Col lg="6" md="6" className="align-self-center p-b-10 p-t-10">
            <div className="home-banner-1">
              <h4 className="subtitle font-light description-homeprimary">
                Donate to your favorite charities, organization, and non profits quickly, safely and efficiently.
                <br />Gain favorable tax breaks, while contributing with crypto.
              </h4>
              <Link href="/explorer">
                <a
                  className="btn btn-home-primary-light m-r-40 btn-md m-t-30 "
                >
                  Donate Crypto
                </a>
              </Link>
              {/* <Link href="/#coming">
                <a className="btn btn-md m-t-30 btn-home-link p-r-0 p-l-0">
                  <i className="fa fal fa-play-circle m-r-10 font-40" /> <span className="m-t-10">Watch How It Works</span>
                </a>
              </Link> */}
            </div>
          </Col>
          <br></br>
          <Col lg="6" md="6" className="align-self-center">
            {/* <Image src={bannerimg} alt="sharity banner" /> */}
            <div className="home-banner-2">
              <h4 className="subtitle font-light description-homeprimary">
                Our team welcomes charities of all sizes to partner with us so that we can help raise funds with cryptocurrency, and expose your cause to a larger demographic.
              </h4>
              <p className="m-t-0"></p>
              <Link href="/partnership">
                <a
                  className="btn btn-home-secondary-light m-r-40 btn-md m-t-20 "
                >
                  Accept Crypto
                </a>
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Banner2;
