import React from 'react'
import {
  Container,
  Row,
  Col,
} from "react-bootstrap";

export default function index() {
  return (
    <Container className="services-section">
        <Row className="container display-grid px-5 py-4 services-inner-section align-items-center
        justify-content-center gap-5">
          <Col className="d-flex flex-column gap-2 service-heading">
            <h2>Our Services For Technology You Needs</h2>
            <div className="width-100">
              <a href="" className="btn btn-primary">Load More</a>
            </div>
          </Col>
          <Col >
            <Row>
              <Col lg={6} className="d-flex gap-1 flex-column service-item">
                <div className="service-icon-box d-flex align-items-center justify-content-center"><i className="fa-thin fa-shield-virus"></i></div>
                <h3>Cyber Security</h3>
                <p>Lorem ipsum dolor sit amet consectetur</p>
              </Col>
              <Col lg={6} className="d-flex gap-1 flex-column service-item">
                <div className="service-icon-box d-flex align-items-center justify-content-center"><i className="fa-thin fa-laptop"></i></div>
                <h3>IT Consultant</h3>
                <p>Lorem ipsum dolor sit amet consectetur</p>
              </Col>
              <Col lg={6} className="d-flex gap-1 flex-column service-item">
                <div className="service-icon-box d-flex align-items-center justify-content-center"><i className="fa-thin fa-laptop"></i></div>
                <h3>IT Consultant</h3>
                <p>Lorem ipsum dolor sit amet consectetur</p>
              </Col>
              <Col lg={6} className="d-flex gap-1 flex-column service-item">
                <div className="service-icon-box d-flex align-items-center justify-content-center"><i className="fa-thin fa-shield-virus"></i></div>
                <h3>Cyber Security</h3>
                <p>Lorem ipsum dolor sit amet consectetur</p>
              </Col>
            </Row>

          </Col>
        </Row>
      </Container>
  )
}
