import React from "react";
import { Link } from "react-router-dom";

const ServicesSection = () => {
  return (
    <div class="srvice-area pb-120">
      <div class="lv-service-area">
        <div class="container">
          <div class="row">
            <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-6 mb-30 mb-lg-0">
              <div class="lv-service-box text-center">
                <div class="lv-service-box-icon">
                  <i class="flaticon flaticon-bride"></i>
                </div>
                <div class="lv-service-box-content">
                  <h5 class="lv-service-box-content-title">
                    <a href="service.html">Wedding Vision</a>
                  </h5>
                  <p>
                    The problem is that you’re not an artist, and every time you
                    try to describe your idea translation.{" "}
                  </p>
                </div>
              </div>
            </div>
            <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-6 mb-30 mb-lg-0">
              <div class="lv-service-box text-center">
                <div class="lv-service-box-icon">
                  <i class="flaticon flaticon-wedding-arch"></i>
                </div>
                <div class="lv-service-box-content">
                  <h5 class="lv-service-box-content-title">
                    <a href="service.html">Decoration Plan</a>
                  </h5>
                  <p>
                    Where to find a dream wedding planner how to find wedding
                    inspiration you’ll actually want.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
              <div class="lv-service-box text-center no-after">
                <div class="lv-service-box-icon">
                  <i class="flaticon flaticon-photo-size"></i>
                </div>
                <div class="lv-service-box-content">
                  <h5 class="lv-service-box-content-title">
                    <a href="service.html">Photography</a>
                  </h5>
                  <p>
                    The problem is that you’re not an artist, and every time you
                    try to describe your idea translation.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
