import React, {useState, useEffect} from "react";
import { Row, Col, Container, Card, CardBody } from "reactstrap";
import Link from "next/link";
import ReactSlider from "react-slider";
import Image from "next/image";
import PropTypes from 'prop-types';  

const Fundraiser = (props) => {
    const [description, setDescription] = useState("")
    const truncate = ( str, n, useWordBoundary ) => {
        if (str.length <= n) { return str; }
        const subString = str.substr(0, n-1);
        return ((useWordBoundary?subString.substr(0, subString.lastIndexOf(" ")):subString) + "...");
    }
    useEffect(()=> {
        if(props.description)
            setDescription(props.description)
    }, [])
  return (
    <div>
        <Card className="card-shadow">
            <a href="#" className={props.imgSrc?"img-ho top-fundraiser":"img-ho top-fundraiser no-image"}>
                <span className="donee-location"><i className="fa fa-map-marker "></i><label style={{display: "inline", fontSize: 15}}>{props.locationAddress?props.locationAddress:"Worldwide"}</label></span>
                {props.imgSrc?<Image
                    className="card-img-top"
                    src={props.imgSrc}
                    alt="wrappixel kit"
                    width={459}
                    height={211}
                />:<div style={{display: "inlineBlock", maxWidth: "100%", overflow: "hidden", position: "relative", boxSizing: "border-box", margin: 0}}><div style={{boxSizing: "border-box", display: "block", maxWidth: "100%"}}><img alt="" aria-hidden="true" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDU5IiBoZWlnaHQ9IjIxMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4=" style={{maxWidth: "100%", display: "block", margin: 0, border: "none", padding: 0, visibility: "visible"}} data-xblocker="passed" /></div><noscript></noscript></div>}
                
            </a>
            <CardBody>
                <h5 className="font-medium m-b-0">
                    <p>{props.title}</p>
                </h5>
                <p className="m-b-0 font-14">{props.buttonShow && description!=""?truncate(description, 350, true):description}</p>
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
                    <Col md={6} sm={6} xs={6} style={{paddingTop: 6}}>
                        <a className="social-donate" target="_blank" rel="noreferrer" href={"https://facebook.com/"+props.facebookUrl} >
                            <i className="fa fa-facebook" style={{fontSize: 16}}></i>
                        </a>&nbsp;
                        <a className="social-heart" href="#" title={"Supporters: "+props.numSupport} >
                            <i className="fa fa-heart" style={{fontSize: 16}}></i>
                        </a>
                    </Col>
                    <Col md={6} sm={6} xs={6} style={{textAlign: "right"}}>
                        <Link href={{
                            pathname: `/donation/[title]`,
                            query: {
                                imgSrc: props.imgSrc,
                                description: props.description,
                                title: props.title.replace(' ', '-'),
                                locationAddress: props.locationAddress,
                                facebookUrl: props.facebookUrl,
                                numSupport: props.numSupport,
                                backImg: props.backImg
                            },
                        }}>
                            <a
                                className="btn btn-sm btn-home-primary"
                            >
                                Donate
                            </a>
                        </Link>
                    </Col>
                </Row>:<Row>
                    <Col md={6} sm={6} xs={6} style={{paddingTop: 6}}>
                        <a className="social-donate" target="_blank" rel="noreferrer" href={"https://facebook.com/"+props.facebookUrl} >
                            <i className="fa fa-facebook" style={{fontSize: 16}}></i>
                        </a>&nbsp;
                        <a className="social-heart" href="#" title={"Supporters: "+props.numSupport} >
                            <i className="fa fa-heart" style={{fontSize: 16}}></i>
                        </a>
                    </Col>
                </Row>}
            </CardBody>
        </Card>
    </div>
  );
};
Fundraiser.propTypes = {
    imgSrc: PropTypes.object.isRequired,
};
export default Fundraiser;
