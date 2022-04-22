/* eslint-disable */
import React, {useEffect, useState} from "react";
import { Row, Col, Container, Card, CardBody } from "reactstrap";
import Link from "next/link";
import Image from "next/image";
import Fundraiser from "../../basic/fundraiser";

const CharityRaisers = (props) => {
  const [showAll, setShowAll] = useState(false);
  const capitalizeFirstLetter = (string) => string.charAt(0).toUpperCase() + string.slice(1)
  const seeMore = (e) => {
    e.preventDefault();
    setShowAll(1-showAll);
  }
  return (
    <div>
      <div className="spacer p-b-0">
        <Container>
          <Row>
            <Col md="12">
              <h3 className="midtitle">{capitalizeFirstLetter(props.title)} Fundraisers</h3>
            </Col>
          </Row>
          <Row className="m-t-20">
            {!showAll && props.charities?props.charities.slice(0,3).map((charity, i) => {
              return (
              <Col md="4">
                <Fundraiser key={i} imgSrc={charity.logoUrl ? charity.logoUrl.replace(",w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive", ",w_459,h_459"):""} buttonShow={true} title={charity.name} description={charity.description?charity.description:""} />
              </Col>
              )
            }):props.charities.map((charity, i) => {
              return (
              <Col md="4">
                <Fundraiser key={i} imgSrc={charity.logoUrl ? charity.logoUrl.replace(",w_24,h_24,dpr_2/c_crop,ar_24:24/q_auto,f_auto,fl_progressive", ",w_459,h_459"):""} buttonShow={true} title={charity.name} description={charity.description?charity.description:""} />
              </Col>
              )
            })}
          </Row>
        </Container>
        <Container>
          <Row className="align-right">
            <Col md="12">
              <Link href="#"><a href="#"><h5 onClick={seeMore}>{!showAll?'See More':'See Less'} <i className="fa fa-arrow-right"></i></h5></a></Link>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};


export default CharityRaisers;
