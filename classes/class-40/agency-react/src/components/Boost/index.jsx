import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export default function index() {
  return (
    <Container fluid className="boost-business">
        <Row className="boost-business-inner container px-5 py-5 d-flex justify-content-space-between align-items-center gap-5">
          <Col md={9}>
            <h2>
              Let’s Boost Your Business With The Latest Technolgy
            </h2>
          </Col>
          <Col>
            <a href="" className="btn btn-primary">Get In Touch</a>
          </Col>
        </Row>
      </Container>
  )
}
