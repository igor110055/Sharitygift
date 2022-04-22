import React from "react";
import { Container, Row, Col, Button } from "reactstrap";

const DonateBanner = (props) => {
  return (
    <div className="donate-banner" style={{backgroundImage: `url(${props.imgSrc})`, backgroundSize: "cover", height: 530, marginTop: -150}}>
      <Container className="py-5 mt-4">
          
      </Container>
    </div>
  );
};

export default DonateBanner;
