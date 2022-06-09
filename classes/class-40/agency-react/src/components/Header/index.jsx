import React from "react";
import {
  Container,
  Navbar,
  NavLink,
  NavItem,
  NavbarBrand,
  Row,
  Col,
  Nav
} from "react-bootstrap";
import logo from "../../assets/img/logo.png";

export default function index() {
  return (
    <header class="d-flex">
      <Container className="">
        <Row className="position-relative d-none d-sm-none d-md-flex align-items-center mx-0 py-3">
          <Col className="contact-info d-flex justify-content-start gap-4">
            <p className="d-flex gap-3 align-items-center">
              <i className="fa-solid fa-envelope"></i>
              info@waleedafifi.me
            </p>

            <p className="d-flex gap-3 align-items-center">
              <i className="fa-solid fa-phone"></i>
              +970599950093
            </p>
          </Col>
          <Col className="social-language d-lg-flex justify-content-end gap-4">
            <div className="social-icon d-flex gap-2">
              <a href="">
                <i className="fa-brands fa-facebook-square"></i>
              </a>

              <a href="">
                <i className="fa-brands fa-twitter-square"></i>
              </a>

              <a href="">
                <i className="fa-brands fa-instagram-square"></i>
              </a>
            </div>

            <select name="" id="">
              <option value="">English</option>
              <option value="">Arabic</option>
            </select>
          </Col>
        </Row>
        {/* <section class="top-header display-grid flex-space-bwetween align-content-start">
      </section> */}

        <Navbar
          color="light"
          light
          // expand="xs"
          className="bg-white"
          style={{ height: 80 }}
        >
          <>
            <Row className="align-items-center w-100 mx-0">
              <Col className="d-flex justify-content-lg-start justify-content-sm-center justify-content-xs-center">
                <NavbarBrand
                  className="d-inline-block p-0"
                  href="/"
                  style={{ width: 100 }}
                >
                  <img
                    src={logo}
                    alt="logo"
                    className="position-relative img-fluid"
                  />
                </NavbarBrand>
              </Col>
              <Col className=" d-flex justify-content-lg-end justify-content-md-center">
                <Nav className="mrx-auto gap-3 text-capitalize" navbar>
                  <NavItem className="d-flex align-items-center">
                    <NavLink className="font-weight-bold" href="/">
                      Home
                    </NavLink>
                  </NavItem>

                  <NavItem className="d-flex align-items-center">
                    <NavLink className="font-weight-bold" href="/about">
                      about
                    </NavLink>
                  </NavItem>

                  <NavItem className="d-flex align-items-center">
                    <NavLink className="font-weight-bold" href="/">
                      services
                    </NavLink>
                  </NavItem>

                  <NavItem className="d-flex align-items-center">
                    <NavLink className="font-weight-bold" href="/">
                      porofolio
                    </NavLink>
                  </NavItem>

                  <NavItem className="d-flex align-items-center">
                    <NavLink className="font-weight-bold" href="/">
                      testinomy
                    </NavLink>
                  </NavItem>

                  <NavItem className="d-flex align-items-center">
                    <NavLink className="font-weight-bold" href="/">
                      news
                    </NavLink>
                  </NavItem>

                  <NavItem className="d-flex align-items-center">
                    <NavLink className="font-weight-bold" href="/">
                      contact
                    </NavLink>
                  </NavItem>
                </Nav>
              </Col>
            </Row>
          </>
        </Navbar>
      </Container>
    </header>
  );
}
