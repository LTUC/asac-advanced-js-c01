import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap';

export default function index() {
  return (
    <Container className="latest-news">
        <Row className="inner-latest-news display-grid gap-4 align-items-center container">
          <Col className="news-carousel">
            
            <div className="news-carousel-item px-5 py-5 d-flex justify-content-center flex-column gap-5 ">
              <h3>Great Technology Solution</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est ullamcorper mattis lacus eu, ornare imperdiet men sana in condimentum. Viverra id tortor enim posuere nullam. Vitae tincidunt bibendum quis at viverra etiam enim dictum teb. Sit non accumsan tempus, eu suspendisse quis.</p>
              <div className="news-author d-flex gap-3 align-items-center">
                <div className="author-image rounded-circle">
                  <Image src="" rounded />
                </div>
                <div className="author-name">
                  <h4>Randi Saputra</h4>
                  <p>IT Consultant</p>
                </div>
              </div>
            </div>

          </Col>

          <Col className=" p-5 d-flex flex-column gap-5 news-container">
            <h2>Get The Latest News Here</h2>
            <Row className="news-items-container d-flex gap-4 flex-column">
              <Col className="news-item d-flex gap-3">
                <div className="news-image">
                  <Image src="" />
                </div>

                <div className="news-content d-flex flex-column gap-1 justify-content-center">
                  <div className="d-flex gap-2 publish-info">
                    <p>09 April 2021</p>
                    <p>by Admin</p>
                  </div>
                  <p>Lorem ipsum dolor sit amet, consecte adipiscing elit. Est ullamcorper</p>
                </div>
              </Col>

              <Col className="news-item d-flex gap-3">
                <div className="news-image">
                  <Image src="" />
                </div>

                <div className="news-content d-flex flex-column gap-1 justify-content-center">
                  <div className="d-flex gap-2 publish-info">
                    <p>09 April 2021</p>
                    <p>by Admin</p>
                  </div>
                  <p>Lorem ipsum dolor sit amet, consecte adipiscing elit. Est ullamcorper</p>
                </div>
              </Col>

            </Row>
          </Col>
        </Row>
      </Container>
  )
}
