import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  
  
  SiGithub,
  SiHeroku,
} from "react-icons/si";
import {
  DiGit,
  
} from "react-icons/di";
import { FaStripe } from "react-icons/fa";
function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
     
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
        <h5 data-aos="fade-right"> VS Code</h5>

      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
        <h5 data-aos="fade-right"> Postman</h5>

      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiHeroku />
        <h5 data-aos="fade-right"> Heroku</h5>

      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGithub />
        <h5 data-aos="fade-right"> GitHub</h5>

      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
        <h5 data-aos="fade-right"> Git</h5>

      </Col>
      
      <Col xs={4} md={2} className="tech-icons">
        <FaStripe />
        <h5 data-aos="fade-right"> Stripe</h5>

      </Col>
    </Row>
  );
}

export default Toolstack;
