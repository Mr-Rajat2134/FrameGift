import React from "react";
import "./Ourpromiseyou.css";
import happiness from '../images/happiness.png'
import trusted from '../images/trusted.png'
import crop from '../images/corp.png'
import { Parallax } from "react-parallax";
import Poster from '../images/Poster5.webp'


const Ourpromiseyou = () => {
  return (
    <div id="Ourpromiseyou">
       
      <div className="Ourpromiseyou_Text">
        <h1>Our promise to you!</h1>
      </div>

      <div class="Ourpromiseyou_Cards">
        <div class="Ourpromiseyou_Card">
          <div class="Ourpromiseyou_IMG">
            <img src={crop} alt="Your Image" />
          </div>
          <div class="Ourpromiseyou_CardText">
            <h1>Personalized Your Way</h1>
            <p>
              Each Zoomin product is crafted to be personalized for you and by
              you. At Zoomin, you will love to personalize 100+ products, your
              way!
            </p>
          </div>
        </div>
        <div class="Ourpromiseyou_Card">
          <div class="Ourpromiseyou_IMG">
            <img src={trusted} alt="Your Image" />
          </div>
          <div class="Ourpromiseyou_CardText">
            <h1>100% Happiness Guarantee</h1>
            <p>
            We strive to give you 100% Happiness. Our hardworking team ensures the highest quality available, the fastest delivery times possible and at the fairest prices.
            </p>
          </div>
        </div>
        <div class="Ourpromiseyou_Card">
          <div class="Ourpromiseyou_IMG">
            <img src={happiness} alt="Your Image" />
          </div>
          <div class="Ourpromiseyou_CardText">
            <h1>Trusted Quality</h1>
            <p>
            We have invested in a state-of-the-art Print & Production Centre so that no matter which corner of India you order from, the quality is always the best.
            </p>
          </div>
        </div>
      </div>
   
    </div>
  );
};

export default Ourpromiseyou;
