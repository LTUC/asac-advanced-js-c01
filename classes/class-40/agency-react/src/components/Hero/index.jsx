import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import GradientSVG from "../ProgressBar";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";

import "react-circular-progressbar/dist/styles.css";

import HeroImage from "../../assets/img/hero.jpg";

function index() {
  const percentage = 66;

  return (
    <Container fluid className="hero-container position-relative">
      <Container>
        <Row className="inner-hero-section gap-5">
          <Col className="slogan-col d-flex flex-column justify-content-center gap-4">
            <h1 className="slogan">Advance Innovation For IT Solutions.</h1>
            <p className="hero-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabi
              sed metus id et viverra augue.
            </p>
            <div className="d-flex align-items-center gap-3 margin-top-3">
              <a className="btn btn-primary" href="">
                Get In Touch
              </a>
              <a href="">
                Our Services <i className="fa-solid fa-arrow-down-long"></i>
              </a>
            </div>
          </Col>
          <Col className="d-flex justify-content-end position-relative">
            <div className="hero-image">
              <img src={HeroImage} alt="" />
            </div>

            <div className="measure-container w-100 d-flex justify-content-start">
              <div className="hero-measure d-flex align-items-center gap-4 justify-content-center">
                <div className="measure circle-75">

                  <GradientSVG />
                  <CircularProgressbar
                    value={percentage}
                    text={`${percentage}%`}
                    styles={buildStyles({
                      rotation: 0.25,
                      strokeWidth: 1,
                      strokeLinecap: "butt",
                      textSize: "16px",
                      pathTransitionDuration: 0.5,
                      pathColor: `rgba(62, 152, 199, ${percentage / 100})`,
                      textColor: "#f88",
                      trailColor: "#d6d6d6",
                    })}
                  />
                </div>

                <div className="d-flex gap-1 flex-column">
                  <h2>Business Growth</h2>
                  <p>Level is high</p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default index;
