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
} from "reactstrap";

const Submenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <div id="section">
      <div className="header1 po-relative bg-danger">
        <Container>
          <Navbar className="navbar-expand-lg h2-nav sub-nav">
            <NavbarToggler onClick={toggle}>
              <span className="ti-menu text-white"></span>
            </NavbarToggler>
            <Collapse isOpen={isOpen} navbar id="header1">
              <Nav navbar className="mt-1 mt-lg-0">
                <NavItem className="m-l-0">
                  <NavLink href="#">Crypto Industry Partners</NavLink>
                </NavItem>
                <NavItem className="m-l-0">
                  <NavLink href="#">NFT Partners</NavLink>
                </NavItem>
                <NavItem className="m-l-0">
                  <NavLink href="#">Media Partners</NavLink>
                </NavItem>
                <NavItem className="m-l-0">
                  <NavLink href="#">Nonprofit Industry Partners</NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        </Container>
      </div>
    </div>
  );
};

export default Submenu;
