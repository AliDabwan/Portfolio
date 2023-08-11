import React from "react";



import "../Reviw/Review.css";
import { useTranslation } from 'react-i18next'
import 'bootstrap/dist/css/bootstrap.min.css';
import { string } from "prop-types";


// const Props = {
//   customerName: String,
//   details:String,
//   location:String,
//   date:String,
//   url:string

// }
const sslocation =<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16"><path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/></svg>




export default function ReviewCards(Props) {
  const { t, i18n } = useTranslation(); 

  return (

	
            <a class="card"
             href={Props.url}
             target="_blank"
             rel="noreferrer"
             >
                <div class="box-shadow bg-white-circle mx-auto text-center" style={{/*width: 90px; height: 90px; margin-top: -45px;*/}}><i class="fa fa-user-circle-o fa-3x head-icon"></i></div>
                <div class="card-body text-center">
                    <h3 class="card-title">
                     {Props.customerName}
                      </h3>
                      <h5 class="card-title-sub">
                      {Props.date}  
                      {' '}                    
                        {Props.location}
                      {' '}
                      {' '}
                      {sslocation}

                      </h5>
                    <p class="card-text text-sm">
                                     {Props.details}
                      </p>
                    {/* <span class="text-sm text-uppercase font-weight-bold">
                    <i class="fe-icon-arrow-right"></i>
                    </span> */}
                </div>
            </a>
       

	);
}

