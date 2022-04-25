import React from "react";
import { Container, Row, Col } from "reactstrap";
import Image from "next/image";
import img1 from "../../assets/images/logos/icon-globe.png";
import img2 from "../../assets/images/logos/icon-gear.png";
import img3 from "../../assets/images/logos/icon-security.png";
import img5 from "../../assets/images/logos/icon-social.png";

const FundraiseCard = () => {
  return (

    <div className="m-r-20 m-t-40 m-b-40" >
        <Container>
            <Row className="justify-content-center m-b-30">
                <Col md="7" className="text-center">
                    <h1 className="text-black font-bold" style={{fontStyle: "italic", fontWeight: "200", letterSpacing: 3}}>&quot;Give today for a better tomorrow&quot;</h1>
                </Col>
            </Row>
        </Container>
      <Container>
        <Row>
            <Col lg="3" sm="6" xs="12" className="align-center p-4" >
                <Image
                src={img1}
                width={25}
                height={25}
                alt="icon-globe"
                className="img-responsive img-rounded"
                />
                <p className="m-t-15 m-b-0"></p>
                <h4 className="boldcontent">Worldwide leader</h4>
                <p className="m-t-15 m-b-0">
                    The beauty of crypto is that the currency is universal, it does not change based off of country. You can donate crypto all over the world in minutes!
                </p>
            </Col>
            <Col lg="3" sm="6" xs="12" className="align-center p-4" >
                <Image
                src={img2}
                width={25}
                height={25}
                alt="icon-setup"
                className="img-responsive img-rounded"
                />
                <p className="m-t-15 m-b-0"></p>
                <h4 className="boldcontent">Simple setup</h4>
                <p className="m-t-15 m-b-0">
                    Setting up an account is simple for both donor and organization. Please visit <a href="#"
                className="">How it works</a> to learn more.
                </p>
            </Col>
            <Col lg="3" sm="6" xs="12" className="align-center p-4" >
                <Image
                src={img3}
                width={25}
                height={25}
                alt="icon-secure"
                className="img-responsive img-rounded"
                />
                <p className="m-t-15 m-b-0"></p>
                <h4 className="boldcontent">Secure</h4>
                <p className="m-t-15 m-b-0">
                    With our advanced blockchain technology, every donation is safe and secure.
                </p>
            </Col>
            <Col lg="3" sm="6" xs="12" className="align-center p-4" >
                <Image
                src={img5}
                width={25}
                height={25}
                alt="icon-social"
                className="img-responsive img-rounded"
                />
                <p className="m-t-15 m-b-0"></p>
                <h4 className="boldcontent">Social Reach</h4>
                <p className="m-t-15 m-b-0">
                    Our mission is to bring awareness to your organization allowing it to be easily discovered by perspective donors all over the world.
                </p>
            </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FundraiseCard;
