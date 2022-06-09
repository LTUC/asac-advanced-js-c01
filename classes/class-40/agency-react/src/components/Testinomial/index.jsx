import React from 'react'
import { Container, Col, Row } from 'react-bootstrap';

export default function index() {
  return (
    <Container className="testimonials-section">
        <Row className="inner-testimonials container">
          <h2>What People Say About Us</h2>
          <div className="testimonial-items-container py-5 px-1 d-flex gap-3">
            <Col className="testimonial-item d-flex align-items-center py-3 px-4 gap-3">
              <div className="rounded-circle testinomial-image"><img src="" alt="" /></div>
              <div className="testimonial-content d-flex gap-2 flex-column">
                <p>Lorem ipsum dolor sit amet, ino consectetur adipiscing elitoe. Molestie faucibus.</p>
                <h3>Dani Moreno / <span>Businessman</span></h3>
              </div>
            </Col>
  
            <Col className="testimonial-item d-flex align-items-center py-3 px-4 gap-3">
              <div className="rounded-circle testinomial-image"><img src="" alt="" /></div>
              <div className="testimonial-content d-flex gap-2 flex-column">
                <p>Lorem ipsum dolor sit amet, ino consectetur adipiscing elitoe. Molestie faucibus.</p>
                <h3>Dani Moreno / <span>Businessman</span></h3>
              </div>
            </Col>
  
            <Col className="testimonial-item d-flex align-items-center py-3 px-4 gap-3">
              <div className="rounded-circle testinomial-image"><img src="" alt="" /></div>
              <div className="testimonial-content d-flex gap-2 flex-column">
                <p>Lorem ipsum dolor sit amet, ino consectetur adipiscing elitoe. Molestie faucibus.</p>
                <h3>Dani Moreno / <span>Businessman</span></h3>
              </div>
            </Col>
  
            <Col className="testimonial-item d-flex align-items-center py-3 px-4 gap-3">
              <div className="rounded-circle testinomial-image"><img src="" alt="" /></div>
              <div className="testimonial-content d-flex gap-2 flex-column">
                <p>Lorem ipsum dolor sit amet, ino consectetur adipiscing elitoe. Molestie faucibus.</p>
                <h3>Dani Moreno / <span>Businessman</span></h3>
              </div>
            </Col>
  
            <Col className="testimonial-item d-flex align-items-center py-3 px-4 gap-3">
              <div className="rounded-circle testinomial-image"><img src="" alt="" /></div>
              <div className="testimonial-content d-flex gap-2 flex-column">
                <p>Lorem ipsum dolor sit amet, ino consectetur adipiscing elitoe. Molestie faucibus.</p>
                <h3>Dani Moreno / <span>Businessman</span></h3>
              </div>
            </Col>

          </div>
        </Row>
      </Container>
  )
}
