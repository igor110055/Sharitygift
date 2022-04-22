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
                <Fundraiser key={i} imgSrc={charity['nonprofit'].coverImageCloudinaryId ? "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_459,h_211/q_auto,f_auto,fl_progressive/"+charity['nonprofit'].coverImageCloudinaryId:""} buttonShow={true} title={charity['nonprofit'].name} description={charity['nonprofit'].description?charity['nonprofit'].description:""} locationAddress={charity['nonprofit'].locationAddress} facebookUrl={charity['nonprofit'].facebookHandle} numSupport={charity['nonprofit'].supporterInfo.numSupporters} />
              </Col>
              )
            }):props.charities.slice(0,9).map((charity, i) => {
              return (
              <Col md="4">
                <Fundraiser key={i} imgSrc={charity['nonprofit'].coverImageCloudinaryId ? "https://res.cloudinary.com/everydotorg/image/upload/c_lfill,w_459,h_211/q_auto,f_auto,fl_progressive/"+charity['nonprofit'].coverImageCloudinaryId:""} buttonShow={true} title={charity['nonprofit'].name} description={charity['nonprofit'].description?charity['nonprofit'].description:""} locationAddress={charity['nonprofit'].locationAddress} facebookUrl={charity['nonprofit'].facebookHandle} numSupport={charity['nonprofit'].supporterInfo.numSupporters} />
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
