/* eslint-disable */
import React, {useEffect, useState} from "react";
import { Row, Col, Container, Card, CardBody } from "reactstrap";
import axios from "axios";
import Link from "next/link";
import Image from "next/image";
import Fundraiser from "../../basic/fundraiser";
import img1 from "../../../assets/images/portfolio/img7.jpg";
import img2 from "../../../assets/images/portfolio/img8.jpg";
import img3 from "../../../assets/images/portfolio/img9.jpg";

const CharityRaisers = (props) => {
  
  const capitalizeFirstLetter = (string) => string.charAt(0).toUpperCase() + string.slice(1)

  useEffect(async () => {
    const nonprofits = await fetch(`https://partners.every.org/v0.2/browse/${props.title}?apiKey=72a0e0f6c64e2d13ee4108a39acfa99a`, { headers: {'Access-Control-Allow-Origin': '*'}, mode: "no-cors"});
    console.log(nonprofits)
    // const json = await nonprofits.json();
    // console.log(json)
  }, []);

  return (
    <div>
      <div className="spacer">
        <Container>
          <Row>
            <Col md="12">
              <h3 className="midtitle">{capitalizeFirstLetter(props.title)} Fundraisers</h3>
            </Col>
          </Row>
          <Row className="m-t-20">
            <Col md="4">
              <Fundraiser imgSrc={img1} buttonShow={true} title="Lorem ipsum worrrr" description="Lorem Ipsum Rorem" />
            </Col>
            <Col md="4">
              <Fundraiser imgSrc={img2} buttonShow={true} />
            </Col>
            <Col md="4">
              <Fundraiser imgSrc={img3} buttonShow={true} />
            </Col>
          </Row>
        </Container>
        <Container>
          <Row className="align-right">
            <Col md="12">
              <Link href="#"><a href="#"><h5>See More <i className="fa fa-arrow-right"></i></h5></a></Link>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default CharityRaisers;
