import React from 'react'
import {
  Container,
  Row,
  Col,
} from "react-bootstrap";

import SolutionImage from '../../assets/img/solution.png';

export default function index() {
  return (
    <Container className="solution-section">
      <Row>
        <Col className="d-flex justify-content-start position-relative">
          <div className="solution-image">
            <img src={SolutionImage} alt="" />
          </div>

          <div className="solution-carousel position-absolute d-flex align-items-center justify-content-center flex-column gap-4 px-4">
            <div className="carousle-item d-flex gap-3 flex-column">
              <i className="fa-thin fa-brain-circuit"></i>
              <p>Lorem ipsum dol sit amet, consec adipiscing.</p>
            </div>

            <div className="carousel-control d-flex gap-2 justify-content-start w-100">
              <i className="fa-regular fa-hyphen active"></i>
              <i className="fa-regular fa-hyphen"></i>
            </div>
          </div>
        </Col>
        <Col className="d-flex flex-column justify-content-center gap-4 solution-description">
          <h2>We are the solution for IT problems</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie faucibus cras donec consequat urna. Mauris malesuada viverra nibh convallis consectetur adipiscing vitae.</p>
          <div>
            <a href="" className="btn btn-primary">More About</a>
          </div>
        </Col>
      </Row>
      </Container>
  )
}
