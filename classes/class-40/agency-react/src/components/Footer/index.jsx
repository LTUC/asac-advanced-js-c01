import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap';

import logo from "../../assets/img/logo.png";

export default function index() {
  return (
    <footer>
      <Container>
        <Row className="d-flex gap-5">
          <Col className="d-flex gap-2 flex-column">
            <div className="footer-logo">
              <Image src={logo} />
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo amet posuere porta vitae mi accumsan. Ultricies </p>
          </Col>
          <Col className="d-flex gap-3 flex-column">
            <h3>Services</h3>
            <a href="">Cyber Security</a>
            <a href="">IT Consulltant</a>
            <a href="">Strategy & Research</a>
          </Col>
          <Col className="d-flex gap-3 flex-column">
            <h3>Contact</h3>
            <p>Office: 4042 Imperial Road, UK City</p>
            <p>Telp: (0411) 425 277 / 425 276</p>
            <p>Email: inbox@ITsolutions.com</p>
          </Col>
        </Row>
        <div className="bottom-footer mt-4">
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
        </div>
      </Container>
    </footer>
  )
}
