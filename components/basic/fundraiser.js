import React from "react";
import { Row, Col, Container, Card, CardBody } from "reactstrap";
import ReactSlider from "react-slider";
import Image from "next/image";
import PropTypes from 'prop-types';  

const Fundraiser = (props) => {
    
  return (
    <div>
        <Card className="card-shadow">
            <a href="#" className="img-ho top-fundraiser">
                <span className="donee-location"><i className="fa fa-map-marker"></i><label>Jackson Height, NY</label></span>
                <Image
                    className="card-img-top"
                    src={props.imgSrc}
                    alt="wrappixel kit"
                    width={459}
                    height={328}
                />
                
            </a>
            <CardBody>
                <h5 className="font-medium m-b-0">
                    <p>Lorem ispum doler sit amet</p>
                </h5>
                <p className="m-b-0 font-14">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <Row>
                    <Col md={9} sm={9} xs={9}>
                        <ReactSlider
                            className="horizontal-slider"
                            thumbClassName="example-thumb"
                            trackClassName="example-track"
                            defaultValue={80}
                            // renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
                        />
                    </Col>
                    <Col md={3} sm={3} xs={3} className="align-right">
                        <label className="m-t-12"><b>80%</b></label>
                    </Col>
                </Row>
                <Row>
                    <Col lg={4} md={6} sm={6} xs={6}>
                        <span className="font-16"><b>Goals</b></span><br />
                        <p className="font-18 text-primary"><b>$3,000</b></p>
                    </Col>
                    <Col lg={4} md={6} sm={6} xs={6}>
                        <span className="font-16"><b>Raised</b></span><br />
                        <p className="font-18 text-secondary"><b>$2,100</b></p>
                    </Col>
                </Row>
            </CardBody>
        </Card>
    </div>
  );
};
Fundraiser.propTypes = {
    imgSrc: PropTypes.object.isRequired,
};
export default Fundraiser;