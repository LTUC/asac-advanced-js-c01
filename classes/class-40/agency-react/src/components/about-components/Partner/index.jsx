import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap';

import img1 from '../../../assets/img/logos/lg1.png';
import img2 from '../../../assets/img/logos/lg2.jpg';
import img3 from '../../../assets/img/logos/lg3.jpg';
import img4 from '../../../assets/img/logos/lg4.jpg';
import img5 from '../../../assets/img/logos/lg5.jpg';
import img6 from '../../../assets/img/logos/lg6.jpg';
import img7 from '../../../assets/img/logos/lg7.jpg';

export default function index() {
  return (
    <Container className="logo-carousel">
        <Container className="Marquee container">
          <Row className="Marquee-content">
            <Col className="Marquee-tag">
              <Image src={img1} alt="" />
            </Col>
            <Col className="Marquee-tag">
              <Image src={img2} alt="" />
            </Col>
            <Col className="Marquee-tag">
              <Image src={img3} alt="" />
            </Col>
            <Col className="Marquee-tag">
              <Image src={img4} alt="" />
            </Col>
            <Col className="Marquee-tag">
              <Image src={img5} alt="" />
            </Col>
            <Col className="Marquee-tag">
              <Image src={img6} alt="" />
            </Col>
            <Col className="Marquee-tag">
              <Image src={img7} alt="" />
            </Col>
          </Row>
        </Container>
      </Container>
  )
}
