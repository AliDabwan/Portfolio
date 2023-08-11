import React from "react";
import { Container } from "react-bootstrap";



import "../Reviw/Review.css";
import { useTranslation } from 'react-i18next'
import 'bootstrap/dist/css/bootstrap.min.css';
import ReviewCards from "./ReviewCards";



export default function Review() {
  const { t, i18n } = useTranslation(); 

  return (
    <Container fluid className="project-section">

			<link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet"/>
<section class="container pt-3 mb-3">
    <h2 class="h3 block-title text-center">What we do<small>Whatever we do, we do with your end user in mind </small></h2>
    <div class="row pt-5 mt-30">

            <div class="col-lg-4 col-sm-6 mb-30 pb-5">
                  <ReviewCards
                  customerName={"أمير علي"}
                  date={"2019/02/26"}
                  location={"Türkiye , Istanbul"}
                  details={" أشكر الأستاذ علي على البرنامج وعلى الجهد المبذول ... وعلى سعة صدره وتحمله لكل الطلبات والتعديلات وفقك الله لكل خير"}
                  url={"https://mostaql.com/u/Ali_7Dabwan/reviews/555337"}
                  />
          </div>
        
          <div class="col-lg-4 col-sm-6 mb-30 pb-5">
                  <ReviewCards
                  customerName={"Samer Haitham"}
                  date={"2018/12/03"}
                  location={"Iraq , Baghdad"}
                  details={"شخص محترم جداً و محترف بالعمل ماشاءالله عليه و قد انجز العمل بشكل قياسي جداً و سوف اتعامل معه مرى اخرى ان شاءالله بارك الله فيك أخي الكريم"}
                  url={"https://mostaql.com/u/Ali_7Dabwan/reviews/847667"}
                  />
          </div>
          <div class="col-lg-4 col-sm-6 mb-30 pb-5">
                  <ReviewCards
                  customerName={"Khaled Alzead "}
                  date={"2018/02/07"}
                  location={"Saudi Arabia , Hail"}
                  details={"تعامل مميز و توقيت بالتسليم حسب الاتفاق"}
                  />
          </div>
       
    </div>
    
</section>
    </Container>
	);
}

