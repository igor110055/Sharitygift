import React from "react";
import Link from "next/link";
import { Container, Row, Col } from "reactstrap";

import ReactPlayer from 'react-player/lazy';

const Banner3 = () => {
  return (
    <div className="static-slider-head banner2">
      <Container>
        <Row className="">
          <Col lg="6" md="6" className="align-self-center m-b-20">
            <h1 className="text-homesecondary m-t-0 font-weight-bold m-b-10">
              Sharity&apos;s Gift
            </h1>
            <h5 className="subcontent font-light" style={{lineHeight: 2}}>
                Here at <b className="boldcontent">Sharity&apos;s Gift</b>, our mission is to make <b className="boldcontent">crypto giving simple.</b> We are creating a future where the gift of crypto donations becomes standard. Our platform provides <b className="boldcontent">convenience</b> for the crypto donor, and a <b className="boldcontent">secure solution</b> for the charity, non-profit, or organization to accept crypto donations <b className="boldcontent">safely.</b>
            </h5>
            
            
          </Col>
          <Col lg="6" md="6" className="m-b-40">
            
            <div className="">
              <ReactPlayer
                        className='react-player'
                        url='https://youtu.be/OrC-oNtz-T8'
                        volume={1}
                        muted={true}
                        playing={true}
                        width="100%"
                        height={310}
                        loop={true}
                        controls={true}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Banner3;
