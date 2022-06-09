import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

import CompanyImage from '../../../assets/img/about.jpg';

export default function index() {
  return (
    <Container className="about-company flex-column">
        <Row className="about-us-heading">
          <h2>WHO WE ARE</h2>
          <h3>Best & Creative Agency for your Company</h3>
        </Row>
        <Row className="company-description">
          <Col md={6} className="about-image">
            <Image src={CompanyImage} alt="" />
          </Col>

          <Col md={6} className="about-description d-flex flex-column gap-3 justify-content-center">
            <h2>ABOUT SREATIVE</h2>
            <p>
              Interactive digital experiences are continually becoming more amazing and more complex to produce. Our team is specially designed to create successful, custom, innovative digital products from the initial concept through full product launch.
            </p>
            <p>
              Strategists, researchers, product managers, UX/UI designers, technologists, web and mobile developers all working together, dedicated to your brand and your product. Talk To Our Team.
            </p>
            <div className="about-link d-flex gap-3">
              <a href="" className="btn btn-secondary">Register</a>
              <a href="" className="btn btn-light">Learn More</a>
            </div>
          </Col>
        </Row>
      </Container>
  )
}
