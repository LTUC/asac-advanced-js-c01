import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';

import ProtfolioImage from '../../assets/img/planning.jpg'

export default function index() {
  return (
    <Container className="portfolio-section">
        <Row className="inner-portfolio justify-content-start gap-5 d-grid">
          <Col className="portfolio-header d-flex justify-content-center gap-4 flex-column padding-x3 order-2">
            <h2>See Our Works or Portfolio</h2>
            <div><a href="" className="btn btn-primary">More About</a></div>
          </Col>

          <Col className="portfolio-item p-3 d-flex flex-column gap-1 order-1">
            <div className="protfolio-image"><img src={ProtfolioImage} alt="" /></div>
            <h3>Brand Software Solution</h3>
            <p>Lorem ipsum dolor sit amet consectetu adipiscing elit. Molestie faucibus</p>
          </Col>

          <Col className="portfolio-item p-3 d-flex flex-column gap-1 order-3">
            <div className="protfolio-image"><img src={ProtfolioImage} alt="" /></div>
            <h3>Brand Software Solution</h3>
            <p>Lorem ipsum dolor sit amet consectetu adipiscing elit. Molestie faucibus</p>
          </Col>

          <Col className="portfolio-item p-3 d-flex flex-column gap-1 order-4">
            <div className="protfolio-image"><img src={ProtfolioImage} alt="" /></div>
            <h3>Brand Software Solution</h3>
            <p>Lorem ipsum dolor sit amet consectetu adipiscing elit. Molestie faucibus</p>
          </Col>
        </Row>
      </Container>
  )
}
