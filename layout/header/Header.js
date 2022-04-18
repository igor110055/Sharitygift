import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useUser } from '@auth0/nextjs-auth0';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Container,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import logo from "../../assets/images/logos/newshari.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const toggle = () => setIsOpen(!isOpen);

  const { user, error, isLoading } = useUser();

  if (isLoading) return <div></div>;
  if (error) return <div>{error.message}</div>;
  return (
    <div className="topbar" id="top">
      <div className="header6">
        <Container className="po-relative">
          <Navbar className="navbar-expand-lg h6-nav-bar">
            <NavbarBrand href="/">
              <Image src={logo} alt="wrapkit" width={90} height={90} />
            </NavbarBrand>
            <NavbarToggler onClick={toggle}>
              <span className="ti-menu"></span>
            </NavbarToggler>
            <Collapse
              isOpen={isOpen}
              navbar
              className="hover-dropdown ml-auto"
              id="h6-info"
            >
              <Nav navbar className="ml-auto mr-auto">
                {/* <NavItem>
                  <Link href="/fundraisers">
                    <a
                      className={
                        router.pathname == "/fundraisers"
                          ? "text-danger nav-link"
                          : "nav-link"
                      }
                    >
                      EXPLORE
                    </a>
                  </Link>
                </NavItem> */}
                <NavItem>
                  <Link href="/#">
                    <a
                      className={
                        router.pathname == "/basic"
                          ? "text-danger nav-link"
                          : "nav-link"
                      }
                    >
                      HOW IT WORKS
                    </a>
                  </Link>
                </NavItem>
                <NavItem>
                  <Link href="/#">
                    <a
                      className={
                        router.pathname == "/basic"
                          ? "text-danger nav-link"
                          : "nav-link"
                      }
                    >
                      WHY DONATE?
                    </a>
                  </Link>
                </NavItem>
                <NavItem>
                  <Link href="/#">
                    <a
                      className={
                        router.pathname == "/basic"
                          ? "text-danger nav-link"
                          : "nav-link"
                      }
                    >
                      FAQ
                    </a>
                  </Link>
                </NavItem>
                {/* <NavItem>
                  <Link href="/partnership">
                    <a
                      className={
                        router.pathname == "/partnership"
                          ? "text-danger nav-link"
                          : "nav-link"
                      }
                    >
                      PARTNERSHIP
                    </a>
                  </Link>
                </NavItem> */}
                {/* <NavItem>
                  <Link href="/campaigns">
                    <a
                      className={
                        router.pathname == "/campaigns"
                          ? "text-danger nav-link"
                          : "nav-link"
                      }
                    >
                      CAMPAIGN
                    </a>
                  </Link>
                </NavItem>
                <NavItem>
                  <Link href="/donors">
                    <a
                      className={
                        router.pathname == "/donors"
                          ? "text-danger nav-link"
                          : "nav-link"
                      }
                    >
                      DONORS
                    </a>
                  </Link>
                </NavItem>
                <NavItem>
                  <Link href="/resources">
                    <a
                      className={
                        router.pathname == "/resources"
                          ? "text-danger nav-link"
                          : "nav-link"
                      }
                    >
                      RESOURCES
                    </a>
                  </Link>
                </NavItem> */}
              </Nav>
              <div className="act-buttons">
                { !user ? <NavLink
                    className="btn btn-link font-16"
                    sm="12"
                    xs="12"
                    href="/api/auth/login"
                  >
                    Sign In
                  </NavLink> : <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav style={{marginTop: 12}}>
                      {user.name.split('@')[0]} <i className="fa fa-angle-down m-l-5"></i>
                    </DropdownToggle>
                    <DropdownMenu className="b-none animated fadeInUp">
                      <DropdownItem onClick={() => {location.href = '/profile'}}>Profile</DropdownItem>
                      <DropdownItem onClick={() => {location.href = '/api/auth/logout'}}>Sign out</DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                }
                <NavLink
                  href="/explorer"
                  className="btn btn-home-primary font-16"
                >
                  Donate Crypto
                </NavLink>
                <NavLink
                  href="/partnership"
                  className="btn btn-home-secondary font-16"
                >
                  Become a Partner
                </NavLink>
              </div>
            </Collapse>
          </Navbar>
        </Container>
      </div>
    </div>
  );
};

export default Header;
