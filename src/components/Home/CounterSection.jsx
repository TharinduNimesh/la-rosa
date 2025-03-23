import React from "react";

const CounterSection = () => {
  return (
    <div class="counter-area">
      <div class="container">
        <div class="row">
          <div class="col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-sm-6 mb-30 mb-xl-0">
            <div class="lv-counter-box">
              <h4 class="lv-counter-box-num odometer" data-count="365">
                365
              </h4>
              <span class="lv-counter-box-num-link d-inline-block">
                CEREMONIES
              </span>
            </div>
          </div>
          <div class="col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-sm-6 mb-30 mb-xl-0">
            <div class="lv-counter-box pl-20">
              <h4 class="lv-counter-box-num odometer" data-count="793">
                793
              </h4>
              <span class="lv-counter-box-num-link d-inline-block">
                Cup of coffee
              </span>
            </div>
          </div>
          <div class="col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-sm-6 mb-30 mb-xl-0">
            <div class="lv-counter-box pl-20">
              <h4 class="lv-counter-box-num odometer" data-count="87">
                87
              </h4>
              <span class="lv-counter-box-num-link d-inline-block">
                Sweet Couples
              </span>
            </div>
          </div>
          <div class="col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-sm-6 mb-30 mb-xl-0">
            <div class="lv-counter-box pl-20">
              <h4 class="lv-counter-box-num odometer" data-count="590">
                590
              </h4>
              <span class="lv-counter-box-num-link d-inline-block">
                BEST BOUQUETS
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CounterSection;
