import React from "react";
import "../css/Home.css";
import MainHeader from "../includes/MainHeader";
import SubHeader from "../includes/SubHeader";
import Footer from "../includes/Footer";
import JUMBO from "../images/new_carousel_2.png";
import display from "../images/course-display-advertising-image.webp";
import influence from "../images/course-influencer-marketing-image.webp";
import seo from "../images/seo-course-image.webp";

const Home = () => {
  return (
    <div className="home-div">
      <MainHeader />
      <SubHeader />
      <div>
        <img src={JUMBO} className="jumboimg" />
      </div>
      <div className="trending-courses">
        <h1>Trending courses</h1>
      </div>

      <div id="myCarousel" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
          <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
          <li data-target="#myCarousel" data-slide-to="1"></li>
          <li data-target="#myCarousel" data-slide-to="2"></li>
        </ol>

        <div class="carousel-inner">
          <div class="item active">
            <div className="row carousel-data">
              <div className="col-lg-4 carousel-inner-data">
                <img src={display} alt="Los Angeles" className="car-img" />
                <h1 className="course-name">Display Marketing</h1>
              </div>
              <div className="col-lg-4 carousel-inner-data">
                <img src={seo} alt="Los Angeles" className="car-img" />
                <h1 className="course-name">Search Engine Optimisation</h1>
              </div>
              <div className="col-lg-4 carousel-inner-data">
                <img src={influence} alt="Los Angeles" className="car-img" />
                <h1 className="course-name">influencer Marketing</h1>
              </div>
            </div>
          </div>
          <div class="item ">
            <div className="row carousel-data">
              <div className="col-lg-4 carousel-inner-data">
                <img src={display} alt="Los Angeles" className="car-img" />
                <h1 className="course-name">Display Marketing</h1>
              </div>
              <div className="col-lg-4 carousel-inner-data">
                <img src={seo} alt="Los Angeles" className="car-img" />
                <h1 className="course-name">Search Engine Optimisation</h1>
              </div>
              <div className="col-lg-4 carousel-inner-data">
                <img src={influence} alt="Los Angeles" className="car-img" />
                <h1 className="course-name">influencer Marketing</h1>
              </div>
            </div>
          </div>
          <div class="item ">
            <div className="row carousel-data">
              <div className="col-lg-4 carousel-inner-data">
                <img src={display} alt="Los Angeles" className="car-img" />
                <h1 className="course-name">Display Marketing</h1>
              </div>
              <div className="col-lg-4 carousel-inner-data">
                <img src={seo} alt="Los Angeles" className="car-img" />
                <h1 className="course-name">Search Engine Optimisation</h1>
              </div>
              <div className="col-lg-4 carousel-inner-data">
                <img src={influence} alt="Los Angeles" className="car-img" />
                <h1 className="course-name">influencer Marketing</h1>
              </div>
            </div>
          </div>
        </div>

        <a class="left carousel-control" href="#myCarousel" data-slide="prev">
          <span class="glyphicon glyphicon-chevron-left"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="right carousel-control" href="#myCarousel" data-slide="next">
          <span class="glyphicon glyphicon-chevron-right"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
      <div className="trending-courses">
        <h1>Testimonials</h1>
      </div>
      <Footer />
    </div>
  );
};

export default Home;

