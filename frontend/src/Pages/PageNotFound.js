import React from "react";
import "./PageNotFound.css";

const PageNotFound = () => {
  return (
    <>
      <body class="bg-purple">
        <div class="stars">
          <div class="custom-navbar">
            <div class="brand-logo">
              <img
                src="https://w7.pngwing.com/pngs/773/90/png-transparent-iphone-groupon-deal-of-the-day-customer-service-cd-electronics-company-text.png"
                width="80px"
                alt="logo"
              />
            </div>
          </div>
          <div class="central-body">
            <img
              class="image-404"
              src="http://salehriaz.com/404Page/img/404.svg"
              width="300px"
              alt="404"
            />
            <a href="/" class="btn-go-home" target="_blank">
              GO BACK HOME
            </a>
          </div>
          <div class="objects">
            <img
              class="object_rocket"
              src="http://salehriaz.com/404Page/img/rocket.svg"
              width="40px"
              alt="rocket"
            />
            <div class="earth-moon">
              <img
                class="object_earth"
                src="http://salehriaz.com/404Page/img/earth.svg"
                width="100px"
                alt="earth"
              />
              <img
                class="object_moon"
                src="http://salehriaz.com/404Page/img/moon.svg"
                width="80px"
                alt="moon"
              />
            </div>
            <div class="box_astronaut">
              <img
                class="object_astronaut"
                src="http://salehriaz.com/404Page/img/astronaut.svg"
                width="140px"
                alt="astronaut"
              />
            </div>
          </div>
          <div class="glowing_stars">
            <div class="star"></div>
            <div class="star"></div>
            <div class="star"></div>
            <div class="star"></div>
            <div class="star"></div>
          </div>
        </div>
      </body>
    </>
  );
};

export default PageNotFound;
