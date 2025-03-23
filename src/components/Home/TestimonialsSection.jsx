import React from "react";

const TestimonialsSection = () => {
  const getBgStyle = (imgUrl) => ({
    backgroundImage: `url(${imgUrl})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  });

  return (
    // <div
    //   className="testimonial-area pb-115 testimonial-bg-settings pt-125 testimonial-area-spacing"
    //   style={getBgStyle('/img/bg/testimonial-bg.png')}
    // >
    <div
      class="testimonial-area pb-115 testimonial-bg-settings pt-125 testimonial-area-spacing"
      data-background="assets/img/bg/testimonial-bg.png"
    >
      <div class="container p-rel">
        <div class="testimonial-shape-path-image-wrap">
          <div class="testimonial-shape-path-image">
            <img src="assets/img/bg/testimonial-bg-1.png" alt="img not found" />
          </div>
        </div>
        <div class="row">
          <div class="col-xxl-12">
            <div class="lv-section-title-wrap text-center pb-65">
              <h2 class="lv-section-title">Testimonials</h2>
              <p class="mb-0">
                Couple's happiness is the best reward for us & these fill our
                hearts of joy.
              </p>
            </div>
          </div>
        </div>
        <div class="row justify-content-center">
          <div class="col-xxl-8">
            <div class="lv-testimonial-slide-box-wrap p-rel">
              <div
                class="testimonial-active swiper-container mb-30 mb-md-0"
                id="active-testimonial-grub"
              >
                <div class="swiper-wrapper">
                  <div class="swiper-slide">
                    <div class="lv-testimonial-box">
                      <div class="lv-testimonial-img text-center">
                        <img
                          src="assets/img/testimonial/testimonial-1.png"
                          alt=""
                        />
                      </div>
                      <div class="lv-testimonial-content mb-25">
                        <p>
                          My Partner and I got married a few weeks ago. Were
                          fantastic from the very first moment we met, until the
                          very end and your team worked so nothing was too much
                          trouble. The incredible site it was mind blowing and
                          everything we anted. So a massive thank you so much
                          cause we're very happy.
                        </p>
                        <div class="lv-testimonial-bg-img-pos">
                          <img
                            src="assets/img/path/testimonial-path-1.png"
                            alt=""
                          />
                        </div>
                      </div>
                      <div class="lv-testimonial-author-box text-center">
                        <h5 class="lv-testimonial-author-name">Salina Gomez</h5>
                        <span class="lv-testimonial-author-date">
                          14/02/2022
                        </span>
                      </div>
                    </div>
                  </div>
                  <div class="swiper-slide">
                    <div class="lv-testimonial-box">
                      <div class="lv-testimonial-img text-center">
                        <img src="assets/img/team/team-3.jpg" alt="" />
                      </div>
                      <div class="lv-testimonial-content mb-25">
                        <p>
                          My Partner and I got married a few weeks ago. Were
                          fantastic from the very first moment we met, until the
                          very end and your team worked so nothing was too much
                          trouble. The incredible site it was mind blowing and
                          everything we anted. So a massive thank you so much
                          cause we're very happy.
                        </p>
                        <div class="lv-testimonial-bg-img-pos">
                          <img
                            src="assets/img/path/testimonial-path-1.png"
                            alt=""
                          />
                        </div>
                      </div>
                      <div class="lv-testimonial-author-box text-center">
                        <h5 class="lv-testimonial-author-name">MR. Max John</h5>
                        <span class="lv-testimonial-author-date">
                          14/02/2022
                        </span>
                      </div>
                    </div>
                  </div>
                  <div class="swiper-slide">
                    <div class="lv-testimonial-box">
                      <div class="lv-testimonial-img text-center">
                        <img src="assets/img/team/team-8.jpg" alt="" />
                      </div>
                      <div class="lv-testimonial-content mb-25">
                        <p>
                          My Partner and I got married a few weeks ago. Were
                          fantastic from the very first moment we met, until the
                          very end and your team worked so nothing was too much
                          trouble. The incredible site it was mind blowing and
                          everything we anted. So a massive thank you so much
                          cause we're very happy.
                        </p>
                        <div class="lv-testimonial-bg-img-pos">
                          <img
                            src="assets/img/path/testimonial-path-1.png"
                            alt=""
                          />
                        </div>
                      </div>
                      <div class="lv-testimonial-author-box text-center">
                        <h5 class="lv-testimonial-author-name">Salina Gomez</h5>
                        <span class="lv-testimonial-author-date">
                          14/02/2022
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="lv-testimonial-pagination-nav-wrap lv-common-pagination text-center">
                <div class="swiper-button-prev-2 lv-common-pagination-prev-nav">
                  <img
                    src="assets/img/path/testimonial-arrow-prev.png"
                    alt=""
                  />
                </div>
                <div class="testimonial-paginations-2 lv-common-pagination-dots"></div>
                <div class="swiper-button-next-2 lv-common-pagination-next-nav">
                  <img
                    src="assets/img/path/testimonial-arrow-next.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
