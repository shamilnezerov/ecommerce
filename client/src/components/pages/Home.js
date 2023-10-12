import React from "react";
import CarouselImage from "../elements/CarouselImage";
import CountdownClock from "../elements/Countdownclock";
import Submenucatalog from "../elements/Submenucatalog";
import "../../assets/scss/Home.scss";
import ConsultationRequest from "../elements/ConsultationRequest";
import Discount from "../elements/Discount";
import Swiper from "../elements/Swiper";
import Partners from "../elements/Partners";
import Shop from "./Shop";

const Home = () => {
  return (
    <div>
      <div className=" pb-5 bt-5 mt-5 mb-5 container ">
        <div className="row d-flex justify-content-between">
          <div className="col-lg-3 col-md-12 col-xs-12 subres">
            <Submenucatalog />
          </div>
          <div className="col-lg-6 col-md-12 col-xs-12 carouselresp mb-5">
            <CarouselImage />
          </div>
          <div
            className="mt-20
          "
          >
            <Discount />
          </div>
          <div>
            <Swiper />
          </div>
          <div>
            <Shop />
          </div>
          <div>
          <Partners />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
