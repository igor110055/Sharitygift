import React from "react";
import { Row, Col, Container, Card, CardBody } from "reactstrap";
import Link from "next/link";
import ReactSlider from "react-slider";
import Image from "next/image";
import PropTypes from 'prop-types';  

const Fundraiser = (props) => {
    
  return (
    <div>
        <Card className="card-shadow">
            <a href="#" className="img-ho top-fundraiser">
                <span className="donee-location"><i className="fa fa-briefcase "></i><label>{props.ein}</label></span>
                <Image
                    className="card-img-top"
                    src={props.imgSrc}
                    alt="wrappixel kit"
                    width={459}
                    height={459}
                />
                
            </a>
            <CardBody>
                <h5 className="font-medium m-b-0">
                    <p>{props.title}</p>
                </h5>
                <p className="m-b-0 font-14">{props.description}</p>
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
                {props.buttonShow?<Row>
                    <Col md={12} style={{textAlign: "right"}}>
                        <Link href={{
                            pathname: `/donation/[title]`,
                            query: {
                                imgSrc: props.imgSrc,
                                description: props.description,
                                title: props.title.replace(' ', '-'),
                            },
                        }}>
                            <a
                                className="btn btn-sm btn-home-primary"
                            >
                                Donate
                            </a>
                        </Link>
                    </Col>
                </Row>:""}
                
            </CardBody>
        </Card>
    </div>
  );
};
Fundraiser.propTypes = {
    imgSrc: PropTypes.object.isRequired,
};
export default Fundraiser;
