import React from "react";
import { Row, Col, Container, Card, CardBody } from "reactstrap";
import ReactSlider from "react-slider";
import Image from "next/image";
import PropTypes from 'prop-types';  

const PartnershipCard = (props) => {
    
  return (
    <div>
        <Card className="card-shadow">
            <a href="#" className="img-ho top-fundraiser">
                <Image
                    className="card-img-top"
                    src={props.imgSrc}
                    alt="wrappixel kit"
                    width={336}
                    height={188}
                />
                
            </a>
            <CardBody>
                <h5 className="font-medium m-b-0">
                    <p>Lorem ispum doler sit amet</p>
                </h5>
                <p className="m-b-0 font-14">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud..</p>
                
            </CardBody>
        </Card>
    </div>
  );
};
PartnershipCard.propTypes = {
    imgSrc: PropTypes.object.isRequired,
};
export default PartnershipCard;
