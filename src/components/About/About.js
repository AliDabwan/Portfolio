import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";
import ScrollToTop from "../ScrollToTop/ScrollToTop";

import "./about.css";
import { useTranslation } from 'react-i18next'

function About() {
  const { t, i18n } = useTranslation(); 

  return (
    <Container fluid className="about-section">
      <Container>
        {/* <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1
              style={{ fontSize: "2.1em", paddingBottom: "20px" }}
              data-aos="fade-right"
            >
              <span className="primary-header">{t('who')}</span> {t('i_m')}
            </h1>
            <div data-aos="fade-up">
              <Aboutcard />
            </div>
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img
              src={laptopImg}
              alt="about"
              className="img-fluid"
              data-aos="fade-left"
            />
          </Col>
        </Row> */}
        <h1 data-aos="fade-right">
          <span className="primary-header">{t('skills')}</span> {t('iworkwith')}
        </h1>

        <div data-aos="fade-up">
          <Techstack />
        </div>

        <h1 data-aos="fade-right">
          <span className="primary-header">{t('tools')}</span> {t('iused')}
        </h1>
        <div data-aos="fade-up">
          <Toolstack data-aos="fade-up" />
        </div>

        {/* <Github /> */}
      </Container>
      <ScrollToTop />
    </Container>
  );
}

export default About;
