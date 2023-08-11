import React from "react";
import Card from "react-bootstrap/Card";
import { Container, Row, Col } from "react-bootstrap";

import { AiOutlineArrowRight } from "react-icons/ai";
import { useTranslation } from 'react-i18next'

function AboutCard() {
  const { t, i18n } = useTranslation(); 

  return (
    <Row style={{ justifyContent: "center", padding: "10px" }}>
    <Col className="coll"
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
        <blockquote className="blockquote mb-0" data-aos="zoom-in">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="primary-header">{t('my_name')}</span> from Darbhanga, Bihar, India. I am a computer science graduate and a passionate programmer.
            <br />
            <br />
            In addition to coding, here are some other things I enjoy doing!
          </p>
          {/* <ul>
            <li className="about-activity">
              <AiOutlineArrowRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <AiOutlineArrowRight /> Reading Books
            </li>
            <li className="about-activity">
              <AiOutlineArrowRight /> Playing Games
            </li>
            <li className="about-activity">
              <AiOutlineArrowRight /> Traveling
            </li>
          </ul> */}
        </blockquote>
      </Col>
    </Row>
  );
}

export default AboutCard;
