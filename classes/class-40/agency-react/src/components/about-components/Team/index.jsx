import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap';

import Avatar from '../../../assets/img/team.jpg';

export default function index() {
  return (
    <Container className="team-member">
        <h2>Our lovely team</h2>
        <Row className="inner-team-member gap-5">
          <Col className="card d-flex gap-2 direction-column">
            <Image className="card-img-top" src={Avatar} alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">Waleed A. Afifi</h5>
              <p className="card-text">Software Developer</p>
              <div className="card-social-icon d-flex gap-3 justify-content-center">
                <a href=""><i className="fa-brands fa-facebook-f"></i></a>
                <a href=""><i className="fa-brands fa-twitter"></i></a>
                <a href=""><i className="fa-brands fa-youtube"></i></a>
                <a href=""><i className="fa-brands fa-linkedin-in"></i></a>
              </div>
            </div>
          </Col>
  
          <Col className="card d-flex gap-2 direction-column">
            <Image className="card-img-top" src={Avatar} alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">Waleed A. Afifi</h5>
              <p className="card-text">Software Developer</p>
              <div className="card-social-icon d-flex gap-3 justify-content-center">
                <a href=""><i className="fa-brands fa-facebook-f"></i></a>
                <a href=""><i className="fa-brands fa-twitter"></i></a>
                <a href=""><i className="fa-brands fa-youtube"></i></a>
                <a href=""><i className="fa-brands fa-linkedin-in"></i></a>
              </div>
            </div>
          </Col>
  
          <Col className="card d-flex gap-2 direction-column">
            <Image className="card-img-top" src={Avatar} alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">Waleed A. Afifi</h5>
              <p className="card-text">Software Developer</p>
              <div className="card-social-icon d-flex gap-3 justify-content-center">
                <a href=""><i className="fa-brands fa-facebook-f"></i></a>
                <a href=""><i className="fa-brands fa-twitter"></i></a>
                <a href=""><i className="fa-brands fa-youtube"></i></a>
                <a href=""><i className="fa-brands fa-linkedin-in"></i></a>
              </div>
            </div>
          </Col>
  
          <Col className="card d-flex gap-2 direction-column">
            <Image className="card-img-top" src={Avatar} alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">Waleed A. Afifi</h5>
              <p className="card-text">Software Developer</p>
              <div className="card-social-icon d-flex gap-3 justify-content-center">
                <a href=""><i className="fa-brands fa-facebook-f"></i></a>
                <a href=""><i className="fa-brands fa-twitter"></i></a>
                <a href=""><i className="fa-brands fa-youtube"></i></a>
                <a href=""><i className="fa-brands fa-linkedin-in"></i></a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
  )
}
