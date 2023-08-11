import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiPostgresql,
  DiDotnet,
  DiWebplatform,
  
} from "react-icons/di";
import {
  SiRedux,
  SiMui,
  SiSqlite,
  SiCsharp,
  SiDotnet,
  SiMicrosoftsqlserver,
  SiXaml,
  SiXamarin,
  
} from "react-icons/si";
import {
  BiLogoHeroku,
  
  
} from "react-icons/bi";
import { FaCss3, FaHtml5 } from "react-icons/fa";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
       <Col xs={4} md={2} className="tech-icons">
        <SiCsharp />
        <h5 data-aos="fade-right"> C#</h5>

      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiDotnet />
        <h5 data-aos="fade-right"> .NET</h5>

      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiDotnet />
        <h5 data-aos="fade-right" > Asp.net Core</h5>

      </Col>
      
     
      <Col xs={4} md={2} className="tech-icons">
        <SiXaml />
        <h5 data-aos="fade-right"> Xaml</h5>

      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiXamarin />
        <h5 data-aos="fade-right">Xamrin</h5>

      </Col>
     
      
      
      <Col xs={4} md={2} className="tech-icons">
        <FaHtml5 />
        <h5 data-aos="fade-right"> HTML</h5>

      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaCss3 />
        <h5 data-aos="fade-right"> CSS</h5>

      </Col>
      
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
        <h5 data-aos="fade-right"> JS</h5>
        
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
        <h5 data-aos="fade-right"> React</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiRedux />
        <h5 data-aos="fade-right"> Redux</h5>

      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMui />
        <h5 data-aos="fade-right">MUI</h5>

      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMicrosoftsqlserver />
        <h5 data-aos="fade-right">SQLServer</h5>

      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPostgresql />
        <h5 data-aos="fade-right"> PostgreSQL</h5>

      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSqlite />
        <h5 data-aos="fade-right"> SQLite</h5>

      </Col>
     
      

     
    </Row>
  );
}

export default Techstack;
