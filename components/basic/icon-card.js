import React from "react";
import { Container, Row, Col } from "reactstrap";
import Image from "next/image";
import img1 from "../../assets/images/logos/icon-donate.png";
import img2 from "../../assets/images/logos/icon-charity.png";
import img3 from "../../assets/images/logos/icon-token.png";
import img4 from "../../assets/images/logos/icon-holder.png";

const IconCard = () => {
  return (
    <div className="m-r-20 m-t-40" >
      <Container>
        <Row>
          <Col lg="3" sm="6" xs="6" className="m-b-30 align-center" >
            <Image
              src={img1}
              width={40}
              height={40}
              alt="icon-donate"
              className="img-responsive img-rounded"
            />
            <p className="m-t-15 m-b-0"></p>
            <h5 className="subcontent">Donate</h5>
          </Col>
          <Col lg="3" sm="6" xs="6"  className="m-b-30 align-center">
            <Image
              src={img2}
              width={40}
              height={40}
              alt="icon-charity"
              className="img-responsive img-rounded"
            />
            <p className="m-t-15 m-b-0"></p>
            <h5 className="subcontent">Charity</h5>
          </Col>
          <Col lg="3" sm="6" xs="6"  className="m-b-30 align-center">
            <Image
              src={img3}
              width={40}
              height={40}
              alt="icon-token"
              className="img-responsive img-rounded"
            />
            <p className="m-t-15 m-b-0"></p>
            <h5 className="subcontent">Token</h5>
          </Col>
          <Col lg="3" sm="6" xs="6"  className="m-b-30 align-center">
            <Image
              src={img4}
              width={40}
              height={40}
              alt="icon-holder"
              className="img-responsive img-rounded"
            />
            <p className="m-t-15 m-b-0"></p>
            <h5 className="subcontent">Holder</h5>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default IconCard;
