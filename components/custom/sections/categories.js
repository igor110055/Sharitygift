import React from "react";
import { Container, Row, Col } from "reactstrap";
import Image from "next/image";
import img1 from "../../../assets/images/categories/Medical.jpg";
import img2 from "../../../assets/images/categories/Memorial.jpg";
import img3 from "../../../assets/images/categories/Emergency.jpg";
import img4 from "../../../assets/images/categories/Nonprofit.jpg";
import img5 from "../../../assets/images/categories/Education.jpg";
import img6 from "../../../assets/images/categories/Animals.jpg";
import img7 from "../../../assets/images/categories/Environment.jpg";
import img8 from "../../../assets/images/categories/Business.jpg";
import img9 from "../../../assets/images/categories/Community.jpg";
import img10 from "../../../assets/images/categories/Charitytoken.jpg";
import img11 from "../../../assets/images/categories/Creative.jpg";
import img12 from "../../../assets/images/categories/Event.jpg";
import img13 from "../../../assets/images/categories/Faith.jpg";
import img14 from "../../../assets/images/categories/Family.jpg";
import img15 from "../../../assets/images/categories/Sports.jpg";
import img16 from "../../../assets/images/categories/Travel.jpg";
import img17 from "../../../assets/images/categories/Volunteer.jpg";
import img18 from "../../../assets/images/categories/Wishes.jpg";

const Categories = () => {
  return (

    <div className="m-r-20 m-t-20 m-b-40" >
        <Container>
            <Row className="justify-content-center m-b-30">
                <Col md="7" className="text-center">
                    <h2 className="text-black font-bold">Browse by category</h2>
                </Col>
            </Row>
        </Container>
      <Container>
        <Row>
            <Col lg="2" md="3" sm="6" xs="12" className="align-center p-5" >
                <Image
                    src={img1}
                    width={120}
                    height={120}
                    alt="icon-globe"
                    className="img-responsive img-rounded"
                />
                <p className="m-t-15 m-b-0"></p>
                <h6><b>Medical</b></h6>
            </Col>
            <Col lg="2" md="3" sm="6" xs="12" className="align-center p-5" >
                <Image
                    src={img2}
                    width={120}
                    height={120}
                    alt="icon-globe"
                    className="img-responsive img-rounded"
                />
                <p className="m-t-15 m-b-0"></p>
                <h6><b>Memorial</b></h6>
            </Col>
            <Col lg="2" md="3" sm="6" xs="12" className="align-center p-5" >
                <Image
                    src={img3}
                    width={120}
                    height={120}
                    alt="icon-globe"
                    className="img-responsive img-rounded"
                />
                <p className="m-t-15 m-b-0"></p>
                <h6><b>Emergency</b></h6>
            </Col>
            <Col lg="2" md="3" sm="6" xs="12" className="align-center p-5" >
                <Image
                    src={img4}
                    width={120}
                    height={120}
                    alt="icon-globe"
                    className="img-responsive img-rounded"
                />
                <p className="m-t-15 m-b-0"></p>
                <h6><b>Non profit</b></h6>
            </Col>
            <Col lg="2" md="3" sm="6" xs="12" className="align-center p-5" >
                <Image
                    src={img5}
                    width={120}
                    height={120}
                    alt="icon-globe"
                    className="img-responsive img-rounded"
                />
                <p className="m-t-15 m-b-0"></p>
                <h6><b>Education</b></h6>
            </Col>
            <Col lg="2" md="3" sm="6" xs="12" className="align-center p-5" >
                <Image
                    src={img6}
                    width={120}
                    height={120}
                    alt="icon-globe"
                    className="img-responsive img-rounded"
                />
                <p className="m-t-15 m-b-0"></p>
                <h6><b>Animals</b></h6>
            </Col>
            <Col lg="2" md="3" sm="6" xs="12" className="align-center p-5" >
                <Image
                    src={img7}
                    width={120}
                    height={120}
                    alt="icon-globe"
                    className="img-responsive img-rounded"
                />
                <p className="m-t-15 m-b-0"></p>
                <h6><b>Environment</b></h6>
            </Col>
            <Col lg="2" md="3" sm="6" xs="12" className="align-center p-5" >
                <Image
                    src={img8}
                    width={120}
                    height={120}
                    alt="icon-globe"
                    className="img-responsive img-rounded"
                />
                <p className="m-t-15 m-b-0"></p>
                <h6><b>Business</b></h6>
            </Col>
            <Col lg="2" md="3" sm="6" xs="12" className="align-center p-5" >
                <Image
                    src={img9}
                    width={120}
                    height={120}
                    alt="icon-globe"
                    className="img-responsive img-rounded"
                />
                <p className="m-t-15 m-b-0"></p>
                <h6><b>Community</b></h6>
            </Col>
            <Col lg="2" md="3" sm="6" xs="12" className="align-center p-5" >
                <Image
                    src={img10}
                    width={120}
                    height={120}
                    alt="icon-globe"
                    className="img-responsive img-rounded"
                />
                <p className="m-t-15 m-b-0"></p>
                <h6><b>Charity token</b></h6>
            </Col>
            <Col lg="2" md="3" sm="6" xs="12" className="align-center p-5" >
                <Image
                    src={img11}
                    width={120}
                    height={120}
                    alt="icon-globe"
                    className="img-responsive img-rounded"
                />
                <p className="m-t-15 m-b-0"></p>
                <h6><b>Creative</b></h6>
            </Col>
            <Col lg="2" md="3" sm="6" xs="12" className="align-center p-5" >
                <Image
                    src={img12}
                    width={120}
                    height={120}
                    alt="icon-globe"
                    className="img-responsive img-rounded"
                />
                <p className="m-t-15 m-b-0"></p>
                <h6><b>Event</b></h6>
            </Col>
            <Col lg="2" md="3" sm="6" xs="12" className="align-center p-5" >
                <Image
                    src={img13}
                    width={120}
                    height={120}
                    alt="icon-globe"
                    className="img-responsive img-rounded"
                />
                <p className="m-t-15 m-b-0"></p>
                <h6><b>Faith</b></h6>
            </Col>
            <Col lg="2" md="3" sm="6" xs="12" className="align-center p-5" >
                <Image
                    src={img14}
                    width={120}
                    height={120}
                    alt="icon-globe"
                    className="img-responsive img-rounded"
                />
                <p className="m-t-15 m-b-0"></p>
                <h6><b>Family</b></h6>
            </Col>
            <Col lg="2" md="3" sm="6" xs="12" className="align-center p-5" >
                <Image
                    src={img15}
                    width={120}
                    height={120}
                    alt="icon-globe"
                    className="img-responsive img-rounded"
                />
                <p className="m-t-15 m-b-0"></p>
                <h6><b>Sports</b></h6>
            </Col>
            <Col lg="2" md="3" sm="6" xs="12" className="align-center p-5" >
                <Image
                    src={img16}
                    width={120}
                    height={120}
                    alt="icon-globe"
                    className="img-responsive img-rounded"
                />
                <p className="m-t-15 m-b-0"></p>
                <h6><b>Travel</b></h6>
            </Col>
            <Col lg="2" md="3" sm="6" xs="12" className="align-center p-5" >
                <Image
                    src={img17}
                    width={120}
                    height={120}
                    alt="icon-globe"
                    className="img-responsive img-rounded"
                />
                <p className="m-t-15 m-b-0"></p>
                <h6><b>Volunteer</b></h6>
            </Col>
            <Col lg="2" md="3" sm="6" xs="12" className="align-center p-5" >
                <Image
                    src={img18}
                    width={120}
                    height={120}
                    alt="icon-globe"
                    className="img-responsive img-rounded"
                />
                <p className="m-t-15 m-b-0"></p>
                <h6><b>Wishes</b></h6>
            </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Categories;
