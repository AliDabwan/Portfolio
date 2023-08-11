import React  from "react";
import { Container, Row, Col } from "react-bootstrap";
import ScrollToTop from "../ScrollToTop/ScrollToTop";
import myImg from "../../Assets/Avatar.png";
import Button from "react-bootstrap/Button";

import Type from "./Type";
import "./home.css";
import { useTranslation } from 'react-i18next'
import {
  AiFillGithub,
  AiOutlineMail,
} from "react-icons/ai";
import { FaLinkedinIn,FaWhatsapp } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
function Home() {
  const { t} = useTranslation(); 
  // const handlegetLang=()=>{


  
  // }

  
//  useEffect(() => {
//     handlegetLang();
  
   
//   }, [])
  

  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 0  }} className="heading">
              {t('hi_there!')} {" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>{" "}
                {t(`i_m`)}
              </h1>

              <h1 className="heading-name">
                <strong className="main-name">{t('my_name')}</strong>
              </h1>

              <div style={{ padding: 5 }} className="type">
                <Type />
              </div>

              {/* <div style={{ paddingTop: 10 }} class="main-btn">
              <Button variant="primary" href="#projects" >View my work</Button>
              <Button variant="primary" href="#projects" >View my work</Button>
              </div> */}

              <div style={{ padding: 1 }} className="home-about-social">           
            <p data-aos="fade-left">Feel free to connect with me</p>
            <ul className="home-about-social-links" data-aos="fade-up">
              <li className="social-icons">
                <a
                  href="https://github.com/AliDabwan"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                  aria-label="github"
                >
                  <AiFillGithub />
                </a>
              </li>
              {/* <li className="social-icons">
                <a
                  href="https://twitter.com/devali"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                  aria-label="twitter"
                >
                  <AiOutlineTwitter />
                </a>
              </li> */}
              <li className="social-icons">
                <a
                  href="mailto:dev.alidabwan@outlook.sa"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                  aria-label="email"
                >
                  <AiOutlineMail />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="mailto:dev.alidabwan@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                  aria-label="email"
                >
                  <SiGmail />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/aliadabwan"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                  aria-label="linkedin"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://api.whatsapp.com/send?phone=967735550345"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                  aria-label="whatsApp"
                >
                  <FaWhatsapp />
                </a>
              </li>
          
            </ul>


              </div>



              {/* <div style={{ padding: 30 }} className="type">
              <a href="#projects" class="main-btn">View my work</a>
              </div> */}

            </Col>

            <Col md={5} style={{ paddingBottom:5 }}>
              <img
                src={myImg}
                alt="home pic"
                className="img-fluid"
                style={{ paddingTop: 5 }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      {/* <Home2 /> */}
      <ScrollToTop />
    </section>
  );
}

export default Home;
