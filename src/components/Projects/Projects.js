import React from "react";
import { Container } from "react-bootstrap";
import ScrollToTop from "../ScrollToTop/ScrollToTop";
import ProjectCard from "./ProjectCards";

import Ecart from "../../Assets/Projects/ecart.png";
import { Grid } from "@mui/material";



import "./project.css";
import { useTranslation } from 'react-i18next'

function Projects() {
  const { t, i18n } = useTranslation(); 

  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          WEB APP PROJECTS
             
        </h1>
        <p>Here are a sample of the most important projects that I have developed.</p>
        <Grid container spacing={{ xs: 2, md: 3 }}
         columns={{ xs: 4, sm: 8, md: 12 }}>
        <Grid item xs={12} sm={4} md={3} lg={4} >
          <ProjectCard
            imgPath={Ecart}
            title="Souqy Web App"
            description="A web application as a fully functional eCommerce website  
            that displays products and contains a shopping cart with online payment integration.
            that uses React.js + MUI and CSS in the front end
             and Asp.net Core and webAPI  in backend and PostgreSQL as Database.
             I used stripe online payment integration and hosted in heroku.
             "
             Fulldescription="A web application as a fully functional eCommerce website  
             that displays products and contains a shopping cart with online payment integration.
             that uses React.js + MUI and CSS in the front end
              and Asp.net Core and webAPI  in backend and PostgreSQL as Database.
              I used stripe online payment integration and hosted in heroku.
              "
            ghLink="https://github.com/AliDabwan/SouqApp"
            demoLink="https://mysouqapp-e05157a9e634.herokuapp.com/"
            label="React & Redux + Asp.net Core"
          
          />

          </Grid>

          <Grid item xs={12} sm={4} md={3} lg={4} >
          <ProjectCard
            imgPath={Ecart}
            title="E Cart"
            description="This is a fully functional eCommerce website that uses React.js + MUI and CSS in the front end and NodeJs and express js in backend and MongoDb as Database."
            ghLink="https://github.com/AliDabwan/E-cart"
            demoLink="https://ecart.onrender.com/"
          />

          </Grid>
          <Grid item xs={12} sm={4} md={3} lg={4} >
          <ProjectCard
            imgPath={Ecart}
            title="E Cart"
            description="This is a fully functional eCommerce website that uses React.js + MUI and CSS in the front end and NodeJs and express js in backend and MongoDb as Database."
            ghLink="https://github.com/AliDabwan/E-cart"
            demoLink="https://ecart.onrender.com/"
          />

          </Grid>
          <Grid item xs={12} sm={4} md={3} lg={4} >
          <ProjectCard
            imgPath={Ecart}
            title="E Cart"
            description="This is a fully functional eCommerce website that uses React.js + MUI and CSS in the front end and NodeJs and express js in backend and MongoDb as Database."
            ghLink="https://github.com/AliDabwan/E-cart"
            demoLink="https://ecart.onrender.com/"
          />

          </Grid>
         </Grid>




         <h1 className="project-heading">
          Desktop App Projects
        </h1>
        <p>Here are a sample of the most important projects that I have developed.</p>
        <Grid container spacing={{ xs: 2, md: 3 }}
         columns={{ xs: 4, sm: 8, md: 12 }}>
        <Grid item xs={12} sm={4} md={3} lg={4} >
          <ProjectCard
            imgPath={Ecart}
            title="E Cart"
            description="This is a fully functional eCommerce website that uses React.js + MUI and CSS in the front end and NodeJs and express js in backend and MongoDb as Database."
            ghLink="https://github.com/AliDabwan/E-cart"
            demoLink="https://ecart.onrender.com/"
          />

          </Grid>

          <Grid item xs={12} sm={4} md={3} lg={4} >
          <ProjectCard
            imgPath={Ecart}
            title="E Cart"
            description="This is a fully functional eCommerce website that uses React.js + MUI and CSS in the front end and NodeJs and express js in backend and MongoDb as Database."
            ghLink="https://github.com/AliDabwan/E-cart"
            demoLink="https://ecart.onrender.com/"
          />

          </Grid>
          <Grid item xs={12} sm={4} md={3} lg={4} >
          <ProjectCard
            imgPath={Ecart}
            title="E Cart"
            description="This is a fully functional eCommerce website that uses React.js + MUI and CSS in the front end and NodeJs and express js in backend and MongoDb as Database."
            ghLink="https://github.com/AliDabwan/E-cart"
            demoLink="https://ecart.onrender.com/"
          />

          </Grid>
          <Grid item xs={12} sm={4} md={3} lg={4} >
          <ProjectCard
            imgPath={Ecart}
            title="E Cart"
            description="This is a fully functional eCommerce website that uses React.js + MUI and CSS in the front end and NodeJs and express js in backend and MongoDb as Database."
            ghLink="https://github.com/AliDabwan/E-cart"
            demoLink="https://ecart.onrender.com/"
          />

          </Grid>
         </Grid>
       








     

       
      </Container>
      <ScrollToTop />
    </Container>
  );
}

export default Projects;
