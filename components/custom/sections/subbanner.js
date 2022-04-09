/* eslint-disable */
import React, { useState } from "react";
import {
  Container,
  Navbar,
  Nav,
  NavItem,
  NavLink,
  NavbarToggler,
  Collapse,
  Row,
  Col
} from "reactstrap";

const SubBanner = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <div id="section">
      <div className="header1 po-relative bg-danger" style={{height: 78}}>
        <Container>
            <Row>
                <Col md={12}>
                    <h2 className="text-white m-t-20"><b>{props.title}</b></h2>
                </Col>
            </Row>
        </Container>
      </div>
    </div>
  );
};

export default SubBanner;
