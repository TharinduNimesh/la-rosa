import React from "react";
import { Link } from "react-router-dom";

const CtaSection = () => {
  return (
    <div
      class="cta-area bg-default pt-110 pb-115 lv-bg-opacity lv-opacity-5"
      data-background="assets/img/bg/cta-bg.jpg"
    >
      <div class="container">
        <div class="lv-section-title-wrap text-center">
          <h2 class="lv-section-title text-white mb-45">
            Enjoy Your Special Wedding <br />
            Sweet Moments
          </h2>
          <a href="contact.html" class="lv-transparent-btn">
            <span class="lv-transparent-horizontal-line"></span>
            <span class="lv-transparent-vertical-line"></span>
            <span class="lv-transparent-btn-text">Book Now</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default CtaSection;
