import React, { useContext, useEffect, useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { ThemeContext } from "../../Context/theme";

import Container from "react-bootstrap/Container";
import logoLight from "../../Assets/logoLight.png";
import logoDark from "../../Assets/logoDark.png";

import { Link } from "react-router-dom";
import "./navbar.css";
import { useTranslation } from 'react-i18next';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const languages = [
  
  { value: 'en', text: "EN",logoo:"https://www.worldometers.info/img/flags/uk-flag.gif" },
  { value: 'ar', text: "عربي",logoo:"https://www.worldometers.info/img/flags/sa-flag.gif" }
  
]
function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);
  const [{ themename, toggeltheme }] = useContext(ThemeContext);

  const { t, i18n } = useTranslation(); 
    const [lang, setLang] = useState('en');
 
  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }
  useEffect(() => {
    const body = document.body;
    const toggle = document.querySelector(".toggle-inner");
    if (themename === "dark") {
      body.classList.add("dark-mode");
      toggle.classList.add("toggle-active");
    } else {
      body.classList.remove("dark-mode");
      toggle.classList.remove("toggle-active");
    }
    handlee();  
    // toast.success('good');
  }, [themename,lang]);

  window.addEventListener("scroll", scrollHandler);



    // This function put query that helps to
    // change the language
    const handleChange = e => {
        setLang(e.target.value);

        // i18n.languages[0]
        // i18n.changeLanguage('ar');


        let loc = "http://localhost:3000/";
        window.location.replace(loc + "?lng=" + e.target.value);

        // console.log('11111');
        setLang(i18n.language);

             // console.log(i18n.language);
        
    }
    const handlee=()=>{
      try {
        const searchy = window.location.search;
        
        const myLang=searchy.split('=')[1].toString();
        if(myLang==null)return;
        myLang.replace('?lng=','');
        setLang(myLang);
        // toast.error(myLang);
      } catch  {
        return
      }
     

    }
    // useEffect(() => {
      

    // }, [lang])
    

  return (

    
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
      <ToastContainer />

        <Navbar.Brand href="/" className="d-flex">
          <img
            src={themename === "light" ? logoDark : logoLight}
            className="img-fluid logo"
            alt="brand"
            style={{width: "48", height: "40"}}
          />
        </Navbar.Brand>

        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <div className="toggleButton">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </Navbar.Toggle>

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}>
                
                {t('home')}
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/about"
                onClick={() => updateExpanded(false)}
              >
                {t('about')} 
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/project"
                onClick={() => updateExpanded(false)}
              >
                                {t('projects')} 
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/resume"
                onClick={() => updateExpanded(false)}
              >
                                                {t('resume')} 
              </Nav.Link>
            </Nav.Item>


          </Nav>
         
       
          <Nav.Item>
            <div className="theme-switch">
              
            <select  value={lang} onChange={handleChange}>

            {languages.map(item => {
                    return (
                     
                      <option key={item.value}
                      // styles={`background-image:url(${item.logoo})`}
                       value={item.value}> {item.text}</option>
                     
                        );
               })}
             
            </select> 

            {/* <img alt='hi' src='https://www.worldometers.info/img/flags/sa-flag.gif' width='50px' height='50px'> </img> */}
            </div>
          </Nav.Item>

          


          <Nav.Item>
            <div className="theme-switch">
              <div id="toggle" onClick={toggeltheme}>
                <div className="toggle-inner" />
              </div>
            </div>
          </Nav.Item>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
