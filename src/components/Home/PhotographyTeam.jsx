import React from "react";
import { Link } from "react-router-dom";

const PhotographyTeam = () => {
  const getBgStyle = (imgUrl) => ({
    backgroundImage: `url(${imgUrl})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  });

  return (
    <div class="photography-area pb-120">
      <div class="container">
        <div class="lv-photography-wrap-1">
          <div class="row">
            <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-6 mb-30 mb-md-0">
              <div class="lv-section-title-wrap pb-65">
                <h2 class="lv-section-title mb-10">Photography Team</h2>
                <p class="mb-0">
                  Every wedding is followed by our team of wedding planners.
                </p>
              </div>
              <div
                class="lv-photography-img-1-1 bg-default lv-photography-img"
                data-background="assets/img/photography/photography-1.jpg"
              ></div>
            </div>
            <div class="col-xl-4 col-lg-4 col-md-12  mb-30 mb-lg-0 mb-30 mb-md-0">
              <div class="lv-photography-member-social-active swiper-container">
                <div class="swiper-wrapper">
                  <div class="swiper-slide">
                    <div class="lv-photography-member-social-share">
                      <a href="team-details.html">
                        <div class="fix">
                          <div
                            class="lv-photography-img-1-2 bg-default lv-photography-img"
                            data-background="assets/img/photography/photography-2.jpg"
                          ></div>
                        </div>
                      </a>
                      <div class="lv-photography-member-content text-center">
                        <a
                          href="team.html"
                          class="lv-photography-member-designation-link"
                        >
                          Photographer
                        </a>
                        <h5 class="lv-photography-member-name">
                          <a href="team.html">Queen Sara Jaclin </a>
                        </h5>
                        <div class="lv-photography-member-social-links">
                          <a href="#">FB</a>
                          <a href="#">TW</a>
                          <a href="#">IN</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="swiper-slide">
                    <div class="lv-photography-member-social-share">
                      <a href="team-details.html">
                        <div class="fix">
                          <div
                            class="lv-photography-img-1-2 bg-default lv-photography-img"
                            data-background="assets/img/team/team-3.jpg"
                          ></div>
                        </div>
                      </a>
                    </div>
                    <div class="lv-photography-member-content text-center">
                      <a
                        href="team.html"
                        class="lv-photography-member-designation-link"
                      >
                        Photographer
                      </a>
                      <h5 class="lv-photography-member-name">
                        <a href="team.html">Queen Sara Jaclin </a>
                      </h5>
                      <div class="lv-photography-member-social-links">
                        <a href="#">FB</a>
                        <a href="#">TW</a>
                        <a href="#">IN</a>
                      </div>
                    </div>
                  </div>
                  <div class="swiper-slide">
                    <div class="lv-photography-member-social-share">
                      <div class="fix">
                        <div
                          class="lv-photography-img-1-2 bg-default lv-photography-img"
                          data-background="assets/img/team/team-5.jpg"
                        ></div>
                      </div>
                      <div class="lv-photography-member-content text-center">
                        <a
                          href="team.html"
                          class="lv-photography-member-designation-link"
                        >
                          Photographer
                        </a>
                        <h5 class="lv-photography-member-name">
                          <a href="team.html">Queen Sara Jaclin </a>
                        </h5>
                        <div class="lv-photography-member-social-links">
                          <a href="#">FB</a>
                          <a href="#">TW</a>
                          <a href="#">IN</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-6 mb-30 mb-md-0">
              <div class="lv-photography-gallery-swiper-carousel pt-145">
                <div class="lv-testimonial-pagination-nav-wrap lv-common-pagination pb-60">
                  <div class="swiper-button-prev-photography lv-common-pagination-prev-nav">
                    <img
                      src="assets/img/path/testimonial-arrow-prev.png"
                      alt=""
                    />
                  </div>
                  <div class="testimonial-paginations-photography lv-common-pagination-dots"></div>
                  <div class="swiper-button-next-photography lv-common-pagination-next-nav">
                    <img
                      src="assets/img/path/testimonial-arrow-next.png"
                      alt=""
                    />
                  </div>
                </div>
                <div
                  class="lv-photography-swiper-gallery-single lv-photography-swiper-gallery-single-height bg-default"
                  data-background="assets/img/gallery/gallery-carousel-1.jpg"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotographyTeam;
