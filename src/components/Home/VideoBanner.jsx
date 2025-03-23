import React from "react";

const VideoBanner = () => {
  return (
    <>
      <div
        class="wide-section-title-area wide-section-space pt-110 pb-335"
        data-bg-color="#F8F6F4"
      >
        <div class="container">
          <div class="row">
            <div class="col-xxl-12">
              <div class="lv-wide-section-title-box">
                <div class="lv-section-title-wrap text-center">
                  <h2 class="lv-section-title">
                    We determined to live together <br />
                    in every single moment
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="weidding-video-banner pb-120 weidding-video-banner-space fix">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-xxl-12 col-xl-11">
              <div
                class="lv-weiding-video-banner-box p-rel bg-default lv-weiding-video-banner-height"
                data-background="assets/img/bg/weiding-bg.jpg"
              >
                <div class="lv-weiding-video-banner-pos">
                  <a
                    href="https://www.youtube.com/watch?v=Ea8b8s4QIPM"
                    class="lv-weiding-video-banner-link popup-video p-rel"
                  >
                    <i class="fas fa-play"></i>
                    <svg class="eltdf-svg-circle">
                      <circle cx="50%" cy="50%" r="45%"></circle>
                    </svg>
                  </a>
                </div>
                <div class="lv-weiding-video-banner-path">
                  <img src="assets/img/path/flower-1.png" alt="flower image" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoBanner;
