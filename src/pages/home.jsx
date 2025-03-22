import React, { useState, useEffect } from "react";
import Layout from "../components/Layout/Layout";

export function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const renderBackgroundStyle = (imageUrl) => ({
    backgroundImage: `url(${imageUrl})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  });

  return (
    <Layout>
      <div class="lv-header-sidebar-area">
        <div class="lv-header-sidebar-wrapper">
          <div class="lv-header-sidebar-action text-end pb-35">
            <a href="#0">
              <span class="lv-header-sidebar-close-text">Close</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
              >
                <path
                  id="close"
                  d="M4.216,23.784a.714.714,0,0,0,1.011,0l8.779-8.778,8.782,8.778A.715.715,0,0,0,23.8,22.774L15.017,14,23.8,5.214A.715.715,0,0,0,22.785,4.2l-8.779,8.782L5.223,4.207A.714.714,0,0,0,4.216,5.214L13,14,4.216,22.777a.714.714,0,0,0,0,1.007Z"
                  transform="translate(-4.008 -3.994)"
                  fill="#777"
                />
              </svg>
            </a>
          </div>
          <div class="lv-header-sidebar-logo pb-50">
            <a href="index.html">
              <img
                src="../../public/img/logo/logo-black.png"
                alt="logo not found"
              />
            </a>
          </div>
          <div class="mobile-menu"></div>
          <div class="lv-footer-touch-widget-box lv-header-sidebar-touch-widget text-center">
            <h4 class="lv-footer-title">Get in touch</h4>
            <div class="lv-footer-touch-widget-links pb-20">
              <a href="https://envato.bdevstech.com/cdn-cgi/l/email-protection#452c2b232a292a332029202005203d24283529206b262a28">
                <span
                  class="__cf_email__"
                  data-cfemail="6a03040c0506051c0f060f0f2a0f120b071a060f44090507"
                >
                  [email&#160;protected]
                </span>
              </a>
              <a href="tel:+88587985598">(+88) 587 - 985 -598</a>
              <span>Magla Street, New York, USA</span>
            </div>
          </div>
          <div class="lv-header-sidebar-devider text-center pb-30">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="125"
              height="5"
              viewBox="0 0 125 5"
            >
              <g transform="translate(-111 -398)">
                <circle
                  data-name="Ellipse 105"
                  cx="2.5"
                  cy="2.5"
                  r="2.5"
                  transform="translate(171 398)"
                  fill="#777"
                />
                <rect
                  data-name="Rectangle 467"
                  width="50"
                  height="1"
                  transform="translate(111 400)"
                  fill="#777"
                />
                <rect
                  data-name="Rectangle 468"
                  width="50"
                  height="1"
                  transform="translate(186 400)"
                  fill="#777"
                />
              </g>
            </svg>
          </div>
          <div class="lv-header-sidebar-official-gallery text-center pb-15">
            <h4 class="lv-footer-title">official Gallery</h4>
            <div class="row g-10  pt-20">
              <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-6">
                <a href="portfolio-details.html">
                  <div
                    class="lv-header-sidebar-official-gallery-item mb-10 bg-default"
                    backgroundImage="assets/img/portfolio/s1.jpg"
                  ></div>
                </a>
              </div>
              <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-6">
                <a href="portfolio-details.html">
                  <div
                    class="lv-header-sidebar-official-gallery-item mb-10 bg-default"
                    data-background="assets/img/portfolio/s2.jpg"
                  ></div>
                </a>
              </div>
              <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-6">
                <a href="portfolio-details.html">
                  <div
                    class="lv-header-sidebar-official-gallery-item mb-10 bg-default"
                    data-background="assets/img/portfolio/s3.jpg"
                  ></div>
                </a>
              </div>
              <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-6">
                <a href="portfolio-details.html">
                  <div
                    class="lv-header-sidebar-official-gallery-item mb-10 bg-default"
                    data-background="assets/img/portfolio/s4.jpg"
                  ></div>
                </a>
              </div>
              <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-6">
                <a href="portfolio-details.html">
                  <div
                    class="lv-header-sidebar-official-gallery-item mb-10 bg-default"
                    data-background="assets/img/portfolio/s5.jpg"
                  ></div>
                </a>
              </div>
              <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-6">
                <a href="portfolio-details.html">
                  <div
                    class="lv-header-sidebar-official-gallery-item mb-10 bg-default"
                    data-background="assets/img/portfolio/s6.jpg"
                  ></div>
                </a>
              </div>
            </div>
          </div>
          <div class="lv-header-sidebar-devider text-center pb-30">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="125"
              height="5"
              viewBox="0 0 125 5"
            >
              <g transform="translate(-111 -398)">
                <circle
                  data-name="Ellipse 105"
                  cx="2.5"
                  cy="2.5"
                  r="2.5"
                  transform="translate(171 398)"
                  fill="#777"
                />
                <rect
                  data-name="Rectangle 467"
                  width="50"
                  height="1"
                  transform="translate(111 400)"
                  fill="#777"
                />
                <rect
                  data-name="Rectangle 468"
                  width="50"
                  height="1"
                  transform="translate(186 400)"
                  fill="#777"
                />
              </g>
            </svg>
          </div>
          <div class="footer-widget lv-header-sidebar-widget text-center">
            <h4 class="lv-footer-title">Follow Us</h4>
            <div class="lv-footer-social-link">
              <a href="#">Facebook</a>
              <a href="#">Twitter</a>
              <a href="#">Instagram</a>
            </div>
          </div>
        </div>
      </div>
      <div class="overlay"></div>
      <main>
        <div class="slider-area p-rel" id="slider">
          <div class="lv-slider-active swiper-container">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <div
                  class="lv-single-slider lv-slider-height bg-default d-flex align-items-center bg-img"
                  data-imgPosition="50% 50%"
                  data-parallax="scroll"
                  data-background="../../public/img/slider/slider-1.jpg"
                >
                  <div class="container">
                    <div class="lv-single-slider-content text-center pt-125">
                      <h2
                        class="lv-single-slider-title"
                        data-animation="fadeInUp"
                      >
                        Born to Shine
                      </h2>
                      <p
                        class="lv-single-slider-desc"
                        data-animation="fadeInUp"
                        data-delay=".2s"
                      >
                        If you are dreaming about getting married ... you are in
                        the right place!
                      </p>
                      <div
                        class="lv-single-slider-link"
                        data-delay=".3s"
                        data-animation="fadeInUp"
                      >
                        <a href="contact.html" class="lv-transparent-btn">
                          <span class="lv-transparent-horizontal-line"></span>
                          <span class="lv-transparent-vertical-line"></span>
                          <span class="lv-transparent-btn-text">Book Now</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="swiper-slide">
                <div
                  class="lv-single-slider lv-slider-height bg-default d-flex align-items-center bg-img"
                  data-imgPosition="50% 50%"
                  data-background="../../public/img/slider/slider-2.jpg"
                >
                  <div class="container">
                    <div class="lv-single-slider-content text-center pt-125">
                      <h2
                        class="lv-single-slider-title"
                        data-animation="fadeInUp"
                      >
                        Wedding Planning <br />
                        For Everyone
                      </h2>
                      <p
                        class="lv-single-slider-desc"
                        data-animation="fadeInUp"
                        data-delay=".2s"
                      >
                        If you are dreaming about getting married ... you are in
                        the right place!
                      </p>
                      <div
                        class="lv-single-slider-link"
                        data-delay=".3s"
                        data-animation="fadeInUp"
                      >
                        <a href="contact.html" class="lv-transparent-btn">
                          <span class="lv-transparent-horizontal-line"></span>
                          <span class="lv-transparent-vertical-line"></span>
                          <span class="lv-transparent-btn-text">Book Now</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="swiper-slide">
                <div
                  class="lv-single-slider lv-slider-height bg-default d-flex align-items-center bg-img"
                  data-imgPosition="50% 50%"
                  data-background="assets/img/slider/slider-3.jpg"
                >
                  <div class="container">
                    <div class="lv-single-slider-content text-center pt-125">
                      <h2
                        class="lv-single-slider-title"
                        data-animation="fadeInUp"
                      >
                        Wedding New <br />
                        For Everyone
                      </h2>
                      <p
                        class="lv-single-slider-desc"
                        data-animation="fadeInUp"
                        data-delay=".2s"
                      >
                        If you are dreaming about getting married ... you are in
                        the right place!
                      </p>
                      <div
                        class="lv-single-slider-link"
                        data-delay=".3s"
                        data-animation="fadeInUp"
                      >
                        <a href="contact.html" class="lv-transparent-btn">
                          <span class="lv-transparent-horizontal-line"></span>
                          <span class="lv-transparent-vertical-line"></span>
                          <span class="lv-transparent-btn-text">Book Now</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="lv-slider-pagination">
            <div class="swiper-button-prev">
              <img src="../../public/img/path/navigation-prev.png" alt="" />
            </div>
            <div class="slider-paginations"></div>
            <div class="swiper-button-next">
              <img src="../../public/img/path/navigation-next.png" alt="" />
            </div>
          </div>
          <div class="lv-slider-lang lv-slider-lang-pos">
            <a href="#">FB</a>
            <a href="#">TW</a>
            <a href="#">IN</a>
          </div>
        </div>
        <div class="about-area pt-110 z-4 pb-60 pb-xl-0 about-area-space-1 about-area-fix">
          <div class="container">
            <div class="row">
              <div class="col-xxl-6 col-xl-6 col-lg-6 pb-50 pb-lg-0">
                <div class="lv-about-img-left pl-15 p-rel">
                  <div class="lv-about-pata-img-wrap">
                    <div class="lv-about-pata-parent">
                      <div class="lv-about-pata-rotate">
                        <img
                          class="askew"
                          src="../../public/img/path/pata.png"
                          alt=""
                        />
                      </div>
                    </div>
                    <div class="lv-about-pata-parent">
                      <div class="lv-about-pata-rotate">
                        <img
                          class="askew"
                          src="../../public/img/path/pata.png"
                          alt=""
                        />
                      </div>
                    </div>
                    <div class="lv-about-pata-parent">
                      <div class="lv-about-pata-rotate">
                        <img
                          class="askew"
                          src="../../public/img/path/pata.png"
                          alt=""
                        />
                      </div>
                    </div>
                    <div class="lv-about-pata-parent">
                      <div class="lv-about-pata-rotate">
                        <img
                          class="askew"
                          src="../../public/img/path/pata.png"
                          alt=""
                        />
                      </div>
                    </div>
                    <div class="lv-about-pata-parent">
                      <div class="lv-about-pata-rotate">
                        <img
                          class="askew"
                          src="../../public/img/path/pata.png"
                          alt=""
                        />
                      </div>
                    </div>
                    <div class="lv-about-pata-parent">
                      <div class="lv-about-pata-rotate">
                        <img
                          class="askew"
                          src="../../public/img/path/pata.png"
                          alt=""
                        />
                      </div>
                    </div>
                    <div class="lv-about-pata-parent">
                      <div class="lv-about-pata-rotate">
                        <img
                          class="askew"
                          src="../../public/img/path/pata.png"
                          alt=""
                        />
                      </div>
                    </div>
                    <div class="lv-about-pata-parent">
                      <div class="lv-about-pata-rotate">
                        <img
                          class="askew"
                          src="../../public/img/path/pata.png"
                          alt=""
                        />
                      </div>
                    </div>
                    <div class="lv-about-pata-parent">
                      <div class="lv-about-pata-rotate">
                        <img
                          class="askew"
                          src="../../public/img/path/pata.png"
                          alt=""
                        />
                      </div>
                    </div>
                    <div class="lv-about-pata-parent">
                      <div class="lv-about-pata-rotate">
                        <img
                          class="askew"
                          src="../../public/img/path/pata.png"
                          alt=""
                        />
                      </div>
                    </div>
                    <div class="lv-about-pata-parent">
                      <div class="lv-about-pata-rotate">
                        <img
                          class="askew"
                          src="../../public/img/path/pata.png"
                          alt=""
                        />
                      </div>
                    </div>
                    <div class="lv-about-pata-parent">
                      <div class="lv-about-pata-rotate">
                        <img
                          class="askew"
                          src="../../public/img/path/pata.png"
                          alt=""
                        />
                      </div>
                    </div>
                    <div class="lv-about-pata-parent">
                      <div class="lv-about-pata-rotate">
                        <img
                          class="askew"
                          src="../../public/img/path/pata.png"
                          alt=""
                        />
                      </div>
                    </div>
                    <div class="lv-about-pata-parent">
                      <div class="lv-about-pata-rotate">
                        <img
                          class="askew"
                          src="../../public/img/path/pata.png"
                          alt=""
                        />
                      </div>
                    </div>
                    <div class="lv-about-pata-parent">
                      <div class="lv-about-pata-rotate">
                        <img
                          class="askew"
                          src="../../public/img/path/pata.png"
                          alt=""
                        />
                      </div>
                    </div>
                    <div class="lv-about-pata-parent">
                      <div class="lv-about-pata-rotate">
                        <img
                          class="askew"
                          src="../../public/img/path/pata.png"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                  <img src="../../public/img/about/about-1.png" alt="about image" />
                  <div class="lv-about-love-flower">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      width="686.686"
                      height="667.148"
                      viewBox="0 0 686.686 667.148"
                    >
                      <defs>
                        <linearGradient
                          id="linear-gradient"
                          x1="-1244.902"
                          y1="-170.194"
                          x2="-1252.096"
                          y2="-231.803"
                          gradientUnits="objectBoundingBox"
                        >
                          <stop offset="0" stop-color="#b6905d" />
                          <stop offset="0.187" stop-color="#916f40" />
                          <stop offset="0.379" stop-color="#c69b60" />
                          <stop offset="0.542" stop-color="#edbc78" />
                          <stop offset="0.627" stop-color="#fcc982" />
                          <stop offset="0.707" stop-color="#eaba77" />
                          <stop offset="0.863" stop-color="#bd945b" />
                          <stop offset="1" stop-color="#916f40" />
                        </linearGradient>
                        <linearGradient
                          id="linear-gradient-2"
                          x1="-1232.213"
                          y1="-172.504"
                          x2="-1239.408"
                          y2="-234.063"
                          xlink:href="#linear-gradient"
                        />
                        <linearGradient
                          id="linear-gradient-3"
                          x1="-1231.629"
                          y1="-168.001"
                          x2="-1238.83"
                          y2="-229.611"
                          xlink:href="#linear-gradient"
                        />
                        <linearGradient
                          id="linear-gradient-4"
                          x1="-971.251"
                          y1="-128.887"
                          x2="-976.93"
                          y2="-177.472"
                          xlink:href="#linear-gradient"
                        />
                        <linearGradient
                          id="linear-gradient-5"
                          x1="-979.112"
                          y1="-131.232"
                          x2="-984.789"
                          y2="-179.813"
                          xlink:href="#linear-gradient"
                        />
                        <linearGradient
                          id="linear-gradient-6"
                          x1="-1362.684"
                          y1="-188.421"
                          x2="-1370.539"
                          y2="-255.625"
                          xlink:href="#linear-gradient"
                        />
                        <linearGradient
                          id="linear-gradient-7"
                          x1="-1353.854"
                          y1="-190.692"
                          x2="-1361.716"
                          y2="-257.898"
                          xlink:href="#linear-gradient"
                        />
                        <linearGradient
                          id="linear-gradient-8"
                          x1="-1336.121"
                          y1="-183.078"
                          x2="-1343.98"
                          y2="-250.294"
                          xlink:href="#linear-gradient"
                        />
                        <linearGradient
                          id="linear-gradient-9"
                          x1="-1360.891"
                          y1="-177.883"
                          x2="-1368.749"
                          y2="-245.149"
                          xlink:href="#linear-gradient"
                        />
                        <linearGradient
                          id="linear-gradient-10"
                          x1="-1363.083"
                          y1="-184.121"
                          x2="-1370.94"
                          y2="-251.398"
                          xlink:href="#linear-gradient"
                        />
                      </defs>
                      <g
                        id="Love"
                        transform="matrix(0.966, 0.259, -0.259, 0.966, 152.548, -825.11)"
                      >
                        <path
                          id="Path_230"
                          data-name="Path 230"
                          d="M800.385,177.286c-117.256-9.149-171.809,98.1-166.288,161.951a1.615,1.615,0,0,1-2.788,1.227c-15.754-16.744-85.539-82.109-177.17-36.124C349.684,356.76,337.627,507.854,466.1,607.328c64.426,49.883,181.914,74.06,181.914,74.06s-70.641-35.2-93.417-54.373c-98.073-82.543-83.709-201.257.316-239.22,73.708-33.3,126.615,20.471,138.494,34.174a1.274,1.274,0,0,0,2.238-.878C693.349,370.583,739.8,287.8,831.936,298.78c69.4,8.275,108.021,65.964,110.434,142.78.479-2.593.936-5.183,1.345-7.761C965.4,297.06,911.942,185.992,800.385,177.286Z"
                          transform="translate(-172.461 655.583)"
                          fill="#dfb68d"
                        />
                        <g
                          id="Flower"
                          transform="matrix(0.978, -0.208, 0.208, 0.978, 171.293, 808.319)"
                        >
                          <path
                            id="Path_92"
                            data-name="Path 92"
                            d="M3.555,81.469c2.415-.25,6.375-1.47,6.808-4.827a5.04,5.04,0,0,0,.013-.524c4.234-1.878,8.852-2.874,13.108-4.933a24.619,24.619,0,0,0,3.666-2.218c-2.243,2-4.612,3.9-6.786,6.1a66.12,66.12,0,0,0-6.705,7.932c-3.2-4.172-12.353,4.946-10.088,9.4a3.718,3.718,0,0,0,5.813,1.13c2.478-1.953,6.131-5.919,4.883-9.4-.019-.059-.053-.094-.075-.15a75.63,75.63,0,0,1,11.2-12.185C30.027,67.8,33.11,64.785,36,59.343a52.519,52.519,0,0,0,6.6-22.949,62.544,62.544,0,0,1,2.515,9.089c2.836,15.033,1,27.249-4.24,42.31-3.894-1.4-8.5,5.935-5.211,9.23,1.707,1.707,4.091,1.616,5.258.122,1.491-1.916,3.357-5.616,1.236-8.256a4.482,4.482,0,0,0-.321-.321A86.35,86.35,0,0,0,47.909,61.9,58,58,0,0,0,51.987,74.96c2.549,5.4,5.2,10.234,7.027,15.57-4.319,1.045-3.173,12.6,1.419,13.707a3.72,3.72,0,0,0,4.634-3.688c.122-3.151-.524-8.506-3.978-9.816-.621-.237-.662-.318-1.155-.278-1.089-3.844-3.763-8.986-5.947-13.517-3.641-7.557-4.166-15.863-6.162-23.888-.162-2.219-.418-4.456-.805-6.715a87.786,87.786,0,0,0-4.509-16.5c-1-2.649-2.022-5.579-3.27-8.384,1.61,1.888,3.192,3.8,4.715,5.776A183.19,183.19,0,0,1,61.881,55.43c9.055,17.651,14.887,32.6,18.525,56.089-4.206.6-2.593,11.32,1.651,12.166a3.319,3.319,0,0,0,4-3.448c0-2.814-.761-7.567-3.888-8.618a4.064,4.064,0,0,0-.818-.162c-2.041-19.5-8.328-37.106-16.587-53.949,5.1,4.2,12.238,6.705,17.127,10.272,8.112,5.913,14.153,15.564,19.127,22.993-.948.839-.97,1.978-.4,3.267,1,2.271,3.3,5.832,6.2,5.566,5.566-.512-.075-10.684-4.2-9.769a1.922,1.922,0,0,0-.883.349C97,82.973,94.235,77.2,85.8,69.35c-3.754-3.5-8.119-5.71-12.574-8.159A41.043,41.043,0,0,1,61.6,51.324,205.944,205.944,0,0,0,22.432.205C21.752-.447,20.569.6,21.2,1.329c4.293,4.989,8.814,9.76,13.22,14.637,2.1,5.847,4.73,11.389,6.961,17.108a50.179,50.179,0,0,1-1.744,13.957A41.07,41.07,0,0,1,26.8,67.243,25.808,25.808,0,0,1,19.624,71.8c-3.145,1.292-6.506,1.881-9.461,3.286C8.123,70.857.095,72.938,0,77.6-.049,80.011,1.667,81.665,3.555,81.469Z"
                            transform="matrix(0.951, -0.309, 0.309, 0.951, 279.795, 186.236)"
                            fill="#c79b6f"
                          />
                          <g
                            id="Group_75"
                            data-name="Group 75"
                            transform="translate(0)"
                          >
                            <path
                              id="Path_128"
                              data-name="Path 128"
                              d="M1153.267,493.044a47.133,47.133,0,0,1-9.7-5.735c-5.268-4.142-7.45-9.691-11.913-14.393-4.1-4.329-10.006-5.793-14.417-9.7-4.848-4.3-7.479-10.6-12.345-15.023-3.034-2.795-7.69-3.833-10.082-5.84-1.576-1.272-2.614-4.253-4.055-5.852a27.258,27.258,0,0,0-18.786-9.031c-9.994-.671-21.061,2.205-30.828,4.212-10.3,2.106-20.63,4.6-30.408,8.617a67.328,67.328,0,0,0-9.206,4.784l-1.336.857A77.551,77.551,0,0,0,987.482,456.4c5.093-20.356,1.949-46.411-20.175-53.284-4.381-1.359-3.226-.893-6.248-4.708-4.189-5.269-11.651-7.824-17.713-9.982-8.506-3.028-17.818-5.292-22.158-14.043a31.026,31.026,0,0,1-3.086-14.154c.029-1.68-1.861-2.369-3.2-2.03-15.729,4.043-23.646,16.027-32.543,28.354-1.417,1.96-1.535,2.048-2.672,2.8-2.917,1.931-6.138,2.771-8.967,5.064-5.531,4.486-9.44,10.758-12.234,17.24-5.07,11.773-9.953,26.68-10.513,39.294a40.014,40.014,0,0,0,2.94,16.995l-.023.029s-.94,5.175,3.762,11.441a77.888,77.888,0,0,0,10.087,12.1,82.771,82.771,0,0,0-31.1-8c-9.825-.519-22.421-.718-30.251,6.242-2.83,2.561-4.457,5.922-6.9,8.746-3.921,4.486-8.2,5.286-13.46,7.4-6.662,2.684-12,7.147-15.087,13.751-2.176,4.644-1.989,9.481-3.4,14.183-.706,2.386-2.509,4.306-3.979,6.558-6.05,9.486-6.208,17.526-6.312,28.29-.123,13.95-3.885,27.549,6.534,39.317a2.309,2.309,0,0,0,3.915-.315c5.6-10.041,16.394-6,25.595-7.479a37.408,37.408,0,0,0,13.64-5.122,47.566,47.566,0,0,0-1.873,10.326c-.6,8.7,4.732,14.51,5.052,22.713.4,11.015-2.193,21.009.485,32.082,2.065,8.8,6.412,16.511,14.825,20.472a2.224,2.224,0,0,0,2.905-1.044,32.642,32.642,0,0,1,8.833-9.656c7.893-5.572,15.869-3.1,24.614-1.639,5.572.969,11.2,1.6,16.732.163,3.8-1,6.8-3.845,10.012-4.644,7.042-1.715,14.241-.409,21.417-3.32a28.1,28.1,0,0,0,15.4-14.4c4.854,9.7,12.526,17.736,23.122,21.388,5.962,2.065,12.322,1.92,17.549,5.659,2.369,1.686,4.265,3.8,6.756,5.28,6,3.565,13.336,4.341,20.186,4.131,8-.286,15.694-3.652,23.564-2.147,8.565,1.593,19.947,4.6,23.617,13.448a2.419,2.419,0,0,0,3.536,1.114c7.17-4.171,13.045-11.412,16.26-18.932,3.267-7.6,1.966-15.857,4.8-23.413,2.789-7.6,6.96-13.891,8.518-22.03a103.551,103.551,0,0,0,1.371-23.2c-.105-2.462-.327-4.942-.508-7.415-.035-.671-.111-.922-.181-.974,2.176-6.336,6.458-11.739,7.8-18.693,2.783-14.492-3.2-26.237-12.386-35.892,6,2.7,12.5,4.23,18.751,2.491,5.636-1.575,10.2-5.671,15.729-7.736a73.553,73.553,0,0,0,16.82-9.23c4.072-2.923,8.127-6.394,10.339-10.992,1.435-2.929.963-5.968,1.878-8.868,2.322-7.608,18.466-6.767,24.114-13.617A2.264,2.264,0,0,0,1153.267,493.044Z"
                              transform="translate(-753.499 -358.12)"
                              fill="#faf6f3"
                            />
                            <g
                              id="Group_73"
                              data-name="Group 73"
                              transform="translate(18.52 33.806)"
                            >
                              <path
                                id="Path_129"
                                data-name="Path 129"
                                d="M881.875,391.78c-45.589-21.143-115.617.963-125.2,52.316"
                                transform="translate(-756.673 -267.733)"
                                fill="none"
                                stroke="#707070"
                                stroke-miterlimit="10"
                                stroke-width="0.664"
                              />
                              <path
                                id="Path_130"
                                data-name="Path 130"
                                d="M868.164,392.761A88.624,88.624,0,0,0,762.46,424.4"
                                transform="translate(-728.697 -255.196)"
                                fill="none"
                                stroke="#707070"
                                stroke-miterlimit="10"
                                stroke-width="0.664"
                              />
                              <path
                                id="Path_131"
                                data-name="Path 131"
                                d="M857.994,512.019C844.779,478.145,809,404.378,788.759,388.87"
                                transform="translate(-601.562 -243.271)"
                                fill="none"
                                stroke="#707070"
                                stroke-miterlimit="10"
                                stroke-width="0.664"
                              />
                              <path
                                id="Path_132"
                                data-name="Path 132"
                                d="M809.43,507.4c-13.209-33.873-30.041-98.575-20.922-117.938"
                                transform="translate(-615.314 -240.434)"
                                fill="none"
                                stroke="#707070"
                                stroke-miterlimit="10"
                                stroke-width="0.664"
                              />
                              <path
                                id="Path_133"
                                data-name="Path 133"
                                d="M939.918,397.6C906.08,370.283,817.242,361.59,790.9,420.072"
                                transform="translate(-591.207 -303.312)"
                                fill="none"
                                stroke="#707070"
                                stroke-miterlimit="10"
                                stroke-width="0.664"
                              />
                              <path
                                id="Path_134"
                                data-name="Path 134"
                                d="M776.174,365.6c-2.141,25.519,9.86,96.591,53.383,137.868"
                                transform="translate(-663.544 -355.749)"
                                fill="none"
                                stroke="#707070"
                                stroke-miterlimit="10"
                                stroke-width="0.664"
                              />
                              <path
                                id="Path_135"
                                data-name="Path 135"
                                d="M783,363.914c-2.141,25.519-10.5,90.885,34.247,149.9"
                                transform="translate(-639.195 -363.914)"
                                fill="none"
                                stroke="#707070"
                                stroke-miterlimit="10"
                                stroke-width="0.664"
                              />
                              <path
                                id="Path_136"
                                data-name="Path 136"
                                d="M787.757,369.149c-5.648,22.456-1.214,68.511,18.955,115.3"
                                transform="translate(-617.339 -338.607)"
                                fill="none"
                                stroke="#707070"
                                stroke-miterlimit="10"
                                stroke-width="0.664"
                              />
                              <path
                                id="Path_137"
                                data-name="Path 137"
                                d="M928.456,407.882c-36.744-20.595-95.273-50.664-137.2.671"
                                transform="translate(-589.482 -285.188)"
                                fill="none"
                                stroke="#707070"
                                stroke-miterlimit="10"
                                stroke-width="0.664"
                              />
                              <path
                                id="Path_138"
                                data-name="Path 138"
                                d="M861.48,388.978c-33.832-1.219-86.294,52.275-95.873,103.627"
                                transform="translate(-713.484 -242.848)"
                                fill="none"
                                stroke="#707070"
                                stroke-miterlimit="10"
                                stroke-width="0.664"
                              />
                            </g>
                            <path
                              id="Path_139"
                              data-name="Path 139"
                              d="M1153.267,493.044a47.133,47.133,0,0,1-9.7-5.735c-5.268-4.142-7.45-9.691-11.913-14.393-4.1-4.329-10.006-5.793-14.417-9.7-4.848-4.3-7.479-10.6-12.345-15.023-3.034-2.795-7.69-3.833-10.082-5.84-1.576-1.272-2.614-4.253-4.055-5.852a27.258,27.258,0,0,0-18.786-9.031c-9.994-.671-21.061,2.205-30.828,4.212-10.3,2.106-20.63,4.6-30.408,8.617a67.328,67.328,0,0,0-9.206,4.784l-1.336.857A77.551,77.551,0,0,0,987.482,456.4c5.093-20.356,1.949-46.411-20.175-53.284-4.381-1.359-3.226-.893-6.248-4.708-4.189-5.269-11.651-7.824-17.713-9.982-8.506-3.028-17.818-5.292-22.158-14.043a31.026,31.026,0,0,1-3.086-14.154c.029-1.68-1.861-2.369-3.2-2.03-15.729,4.043-23.646,16.027-32.543,28.354-1.417,1.96-1.535,2.048-2.672,2.8-2.917,1.931-6.138,2.771-8.967,5.064-5.531,4.486-9.44,10.758-12.234,17.24-5.07,11.773-9.953,26.68-10.513,39.294a40.014,40.014,0,0,0,2.94,16.995l-.023.029s-.94,5.175,3.762,11.441a77.888,77.888,0,0,0,10.087,12.1,82.771,82.771,0,0,0-31.1-8c-9.825-.519-22.421-.718-30.251,6.242-2.83,2.561-4.457,5.922-6.9,8.746-3.921,4.486-8.2,5.286-13.46,7.4-6.662,2.684-12,7.147-15.087,13.751-2.176,4.644-1.989,9.481-3.4,14.183-.706,2.386-2.509,4.306-3.979,6.558-6.05,9.486-6.208,17.526-6.312,28.29-.123,13.95-3.885,27.549,6.534,39.317a2.309,2.309,0,0,0,3.915-.315c5.6-10.041,16.394-6,25.595-7.479a37.408,37.408,0,0,0,13.64-5.122,47.566,47.566,0,0,0-1.873,10.326c-.6,8.7,4.732,14.51,5.052,22.713.4,11.015-2.193,21.009.485,32.082,2.065,8.8,6.412,16.511,14.825,20.472a2.224,2.224,0,0,0,2.905-1.044,32.642,32.642,0,0,1,8.833-9.656c7.893-5.572,15.869-3.1,24.614-1.639,5.572.969,11.2,1.6,16.732.163,3.8-1,6.8-3.845,10.012-4.644,7.042-1.715,14.241-.409,21.417-3.32a28.1,28.1,0,0,0,15.4-14.4c4.854,9.7,12.526,17.736,23.122,21.388,5.962,2.065,12.322,1.92,17.549,5.659,2.369,1.686,4.265,3.8,6.756,5.28,6,3.565,13.336,4.341,20.186,4.131,8-.286,15.694-3.652,23.564-2.147,8.565,1.593,19.947,4.6,23.617,13.448a2.419,2.419,0,0,0,3.536,1.114c7.17-4.171,13.045-11.412,16.26-18.932,3.267-7.6,1.966-15.857,4.8-23.413,2.789-7.6,6.96-13.891,8.518-22.03a103.551,103.551,0,0,0,1.371-23.2c-.105-2.462-.327-4.942-.508-7.415-.035-.671-.111-.922-.181-.974,2.176-6.336,6.458-11.739,7.8-18.693,2.783-14.492-3.2-26.237-12.386-35.892,6,2.7,12.5,4.23,18.751,2.491,5.636-1.575,10.2-5.671,15.729-7.736a73.553,73.553,0,0,0,16.82-9.23c4.072-2.923,8.127-6.394,10.339-10.992,1.435-2.929.963-5.968,1.878-8.868,2.322-7.608,18.466-6.767,24.114-13.617A2.264,2.264,0,0,0,1153.267,493.044Zm-289.05-10.157s-7.281-9.516-9.335-13.466a39.292,39.292,0,0,1-3-21.9c1.5-10.963,5.9-24.574,10.741-34.889,3.267-6.972,7.969-13.617,14.883-17.322,3.606-1.937,5.654-2.095,8-5.017,8.728-10.881,14.276-21.861,27.928-26.657.49,6.943,3,14.294,7.818,19.189,10.578,10.746,27.865,8.728,38.162,20.536,5.035,5.776,13.138,5.671,18.477,12.648,10.764,14.072,8.955,34.381,1.651,49.457a2.188,2.188,0,0,0-.158.6c-10.8,15.227-15.688,34.136-6.733,51.026a27.211,27.211,0,0,0-4.1,4.37A72.921,72.921,0,0,1,957.908,497.7a35.157,35.157,0,0,1,4.376-6.132s3.378-4.306.391-6.937c-1.12-.986-3.926.193-6.727,3.9-7.73-35.944,2.316-71.3,2.106-71.218-14.936,29.924-4.877,66.312-3.559,73.394-3.361,5.729-6.144,15.42-4.837,29.935-3.88-14.632-7.94-35.239-5.116-49.959,3.419-17.993-11.441-3.1-7.52,26.738-8.115-21.231-13.921-68.441-6.465-88.534.088-.262-.274-.444-.4-.193-8.128,13.366-2.5,56.8.472,71.236a130.015,130.015,0,0,0,4.749,17c-6.138-10.875-14.352-21.569-21.528-17.794-2.065,1.1-2.958,2.205-2.987,3.407-7.643-24.183-12.619-59.445-10.881-77.881a.231.231,0,1,0-.455-.082c-6.266,21.966,3.646,75.495,15.84,95.3a22.76,22.76,0,0,0-11.377.222s-3.443,2.719,2.053,5.408c1.949.939,9,2.456,17.047,5.8,2.713,3.716,5.554,7.34,8.471,10.782a10.272,10.272,0,0,0-1.464.286c-1.073.274-3.868,1.581-3.127,4.428.4,1.727,5.351,1.091,11.529,3.273,2.626,2.876,5.239,5.63,7.754,8.25-4.592-.082-9.382-.992-13.7-.828A240.877,240.877,0,0,1,897.9,498.551c-10.788-15.175-30.28-50.623-30.221-69.62.006-.274-.385-.268-.426-.041-3.325,16.832,17.841,53.92,26.8,67.233,10.222,15.268,22.712,29.066,36.148,41.575a14.124,14.124,0,0,0-3.745,1.126C918.236,531.6,878.318,497.8,864.217,482.887Zm91.667,48.132A29.058,29.058,0,0,1,961.5,518.93s2.491-2.223.216-3.781c-1.657-1.085-6.825,4.434-8.372,12.538-.414-.548-.817-1.132-1.225-1.721-.327-6-.006-16.453,4.632-26A77.879,77.879,0,0,0,967.5,522.933c-2.754,3.909-5.257,8.174-8.991,11.394C957.605,533.259,956.747,532.121,955.884,531.019Zm1.266,4.323c-.315.216-.606.519-.963.729a5.668,5.668,0,0,1-.863.432,26.358,26.358,0,0,1,.2-3.267C956.065,533.924,956.566,534.642,957.15,535.342Zm-4.236-3.366c-.1-.292-.222-.712-.321-1.044-.029-.041-.111-.688-.245-1.692a6.222,6.222,0,0,1,.642.822C952.955,530.686,952.914,531.345,952.914,531.976Zm-19.148-9.848c-2.526-3.01-4.947-6.126-7.246-9.3,7.964,3.8,16.423,9.469,21.75,18.308.822,1.523,1.657,3.016,2.6,4.562C947.319,530.727,940.785,522.933,933.766,522.127Zm16.552,15.951c-.607.088-1.255.164-1.89.2a.556.556,0,0,0-.134-.338c-2.036-2.018-4.02-4.113-6-6.2A27.851,27.851,0,0,1,950.318,538.078ZM918.44,500.739a84.587,84.587,0,0,1-6.949-16.289c3.186,5.344,18.506,13.028,29.171,28.932.759,2.345,1.617,4.778,2.626,7.246C938.831,514.823,929.6,504.531,918.44,500.739ZM789.9,595.7c-5.624.869-11.219-1.05-16.826.339a20.139,20.139,0,0,0-10.484,6.832c-5.472-8.034-5.9-18.46-4.813-27.946.991-9.148-.3-18.074,3.786-26.744,1.733-3.7,4.936-6.622,6.634-10.128,2.013-4.16,1.488-9.726,3.174-14.259,4.545-12.048,14.113-11.412,23.442-17.281,3.547-2.229,5.426-5.624,7.935-8.833,5.42-6.885,10.951-8.757,19.743-9.487a82.263,82.263,0,0,1,43.582,8.372,92.242,92.242,0,0,1,9.311,5.268,104.288,104.288,0,0,0-18.3-3.67c-19.446-2.147-40.723,2.573-54.206,17.684-.146.169.117.455.3.327,16.844-13.477,35.256-18.874,56.784-15.84a102.748,102.748,0,0,1,20.665,4.965c2.3,1.838,15.781,12.147,19.988,15.63-13.622-5.816-30.373-6.966-44.363-5.758-27.812,2.316-54.282,18.1-68.488,42.4a.211.211,0,0,0,.356.222c18.459-22.823,40.005-38.792,70.162-41.038,15.28-1.126,34.993.595,48.359,9.154,4.014,3.25,8.045,6.418,12.223,9.417-17.444-7.526-39.293-10.3-56.884-4.878a47.315,47.315,0,0,0-13.243,6.849c-4.72,3.238-9.358,4.288-14.341,6.809-12.549,6.5-12.637,18.29-16.879,30.151-1.779,5.07-6.505,7.911-9.6,12.153A34.219,34.219,0,0,1,789.9,595.7Zm129.811,44.579c-3.2,12.445-14.452,17.648-26.388,18.792-2.561.245-5.5-.251-8.022.2-4.586.782-8.162,4.422-13.115,5.257-12.339,2.094-24.626-6.313-36.534-.56a33.861,33.861,0,0,0-12.876,11.791c-9.329-5.665-11.61-17.608-12.065-27.882-.356-7.818,2.345-16.219.706-23.879-1.628-7.532-5.513-12.135-4.428-20.513.741-5.852,2.386-11.021,5.8-15.519.928-.974,1.814-1.955,2.62-2.946a.168.168,0,0,0,.064-.111c2.445-2.427,4.586-4.241,5.986-7.649,2.322-5.641,2.118-11.9,4.609-17.619a23.452,23.452,0,0,1,14.125-13.419c8.6-3.4,15.216-9.918,24.189-12.537,13.01-3.821,26.9-2.958,40.291.023-9.959.91-19.959,5.041-28.459,9.4-21.265,10.945-39.684,30.041-50.221,51.5a.208.208,0,0,0,.35.221c13.238-19.4,27.374-37.03,48.162-48.809,10.438-5.939,24.375-11.832,36.907-10.624,2.917.84,5.787,1.715,8.605,2.66-12.491,1.395-25.373,15.157-33.063,22.853-20.343,20.4-37.718,47-46.475,74.491-.082.222.291.332.408.117,11.815-25.011,24.469-48.576,43.272-69.17,8.063-8.891,25.472-28.518,39.568-26.592a1.242,1.242,0,0,0,.583-.175l.549.222a9.213,9.213,0,0,0-1.727,1.493,1.814,1.814,0,0,0-.449.747c-.344.373-.688.741-.991,1.12-9.808,5.268-16.937,23.1-20.951,31.347-9.306,19.008-18.214,41.674-18.862,63.044,0,.233.391.227.432,0,4.235-20.326,9.643-39.731,18.354-58.692a158.29,158.29,0,0,1,12.806-23.576c1.231-1.779,2.666-4.043,4.34-6.138-3.074,6.132-15.641,33.331-7.9,54.019,2.421,6.418,5.006,12.555,6.062,19.119.776,4.825,1.266,9.515,2.62,14.206.367,1.214.776,2.427,1.231,3.611C919.77,640.171,919.729,640.2,919.712,640.276ZM1073,560.978c3.88,9.836,1.738,20.781-2.73,30.046-1.7,3.506-3.7,5.659-3.874,9.411-.677,13.961,1.651,27.176-4.172,40.6-2.4,5.467-5.531,10.134-6.569,16.085-1.172,6.674-.863,12.789-3.932,19.084a37.573,37.573,0,0,1-11.535,13.494c-3.8-6.2-10.479-9.5-17.409-11.657-9.119-2.876-13.734-2.608-22.946-1.05-10.84,1.814-22.462,2.345-31.336-4.93-9.737-7.946-22.473-6.278-32.362-14.247a36.107,36.107,0,0,1-11.82-17.532,1.859,1.859,0,0,0-.263-.712c-2.06-6.435-3.016-13.337-4.638-20.443-1.12-5.117-4.562-9.994-5.934-15.239a65.213,65.213,0,0,1-.928-27.246,83.312,83.312,0,0,1,4.189-15.292c6.056-14.76,10.671-17.864,12.042-18.477,2.363-.875,5.653-.787,9.019-.455-8.162,6.587-9.789,19.912-10.472,29.544a127.97,127.97,0,0,0,11.8,62.385c.145.263.484.128.414-.123-5.624-17.823-10.414-35.49-10.659-54.3-.134-11,.385-30.589,11.429-37.246,3.425.426,6.733.869,8.944.6a24.156,24.156,0,0,0,3.069-.665c-3.95,16.6,6.027,38.832,11.505,53.359,7.147,18.967,14.947,40.215,26.744,56.954.129.175.473.006.4-.2-8.058-17.24-16.465-34.235-23.4-51.977a279.535,279.535,0,0,1-10.922-32.479c-1.989-7.911-4.7-18.127-2.3-26.347a27.975,27.975,0,0,0,7.048-4.154c.461-.391.852-.794,1.313-1.178,23.716,2.252,41.073,25.034,53.436,43.249,10.21,15.11,17.368,32.269,27.736,47.175.152.222.5.047.385-.169-8.781-18.669-18.769-37.164-30.8-53.908-11.844-16.511-27.923-34.848-49.061-37.852A66.876,66.876,0,0,0,971,527.3c20.454-1.05,38.255,6.7,53.2,20.624,13.372,12.415,22.421,27.87,33.9,41.8.2.233.473.006.362-.251-18.413-32.38-46.481-64.894-86.241-63.955,1.272-2.013,2.526-4.382,4.195-5.536,9.592-6.68,26.488-4.8,36.966-2.036,12.812,3.349,24.825,9.813,35.466,17.526C1057.755,541.923,1068.881,550.47,1073,560.978Zm54.573-56.651c-3.436,3.547-1.441,9.93-3.979,14.346-6.132,10.618-19.037,14.066-29.188,19.072-7.048,3.483-10.654,8.18-19.358,6.721-4.7-.77-9.341-2.754-13.792-4.9a136.251,136.251,0,0,0-15.28-11.464c-11.184-7.339-23.64-13.3-36.837-15.8-7.952-1.523-19.265-2.27-28.273.5,26.1-20.845,62.811-7.188,90.524,4.049.222.082.478-.228.262-.344-26.19-17.7-70.238-24.772-95.2-1.943-.432-.869-.869-1.692-1.231-2.55,22.229-45.554,79.8-30.793,120.6-26.388.274.012.344-.373.076-.42-40.11-10.14-98.762-17.66-121.5,24.655a32.574,32.574,0,0,1-1.657-7.777c11.569-49.3,74.87-47.269,114.152-43.185.268.053.338-.332.076-.414-38.325-9.346-98.855-4.971-114.228,37.736.968-12.736,7.969-25.513,15.788-34.8,16.889-20,45.623-24.825,70.261-28.115,12.269-1.669,22.783-1.5,30.636,9.253.98,1.318,1.271,2.514,2.491,3.6,2.543,2.27,7.03,3.121,9.877,5.647,3.53,3.116,5.583,6.99,8.431,10.618a31.567,31.567,0,0,0,8.74,7.8c4.084,2.433,7.969,3.763,11.015,7.818,1.558,2.054,2.544,4.434,4.183,6.464a42.046,42.046,0,0,0,14.259,11.2C1142.258,500.377,1132.853,498.866,1127.573,504.327Z"
                              transform="translate(-753.499 -358.12)"
                              fill="#c79b6f"
                            />
                            <g
                              id="Group_74"
                              data-name="Group 74"
                              transform="translate(148.524 116.65)"
                            >
                              <path
                                id="Path_140"
                                data-name="Path 140"
                                d="M787.733,386.483a2.422,2.422,0,1,0,2.818-1.949A2.425,2.425,0,0,0,787.733,386.483Z"
                                transform="translate(-736.712 -347.264)"
                                fill="url(#linear-gradient)"
                              />
                              <path
                                id="Path_141"
                                data-name="Path 141"
                                d="M782.113,387.959a2.422,2.422,0,1,0,2.812-1.949A2.424,2.424,0,0,0,782.113,387.959Z"
                                transform="translate(-763.886 -340.129)"
                                fill="url(#linear-gradient-2)"
                              />
                              <path
                                id="Path_142"
                                data-name="Path 142"
                                d="M782,383.954a2.419,2.419,0,1,0,2.812-1.949A2.419,2.419,0,0,0,782,383.954Z"
                                transform="translate(-764.452 -359.49)"
                                fill="url(#linear-gradient-3)"
                              />
                              <path
                                id="Path_143"
                                data-name="Path 143"
                                d="M782.46,380.636a3.069,3.069,0,1,0,3.565-2.474A3.064,3.064,0,0,0,782.46,380.636Z"
                                transform="translate(-762.256 -378.114)"
                                fill="url(#linear-gradient-4)"
                              />
                              <path
                                id="Path_144"
                                data-name="Path 144"
                                d="M786.377,383.636a3.069,3.069,0,1,0,3.565-2.474A3.064,3.064,0,0,0,786.377,383.636Z"
                                transform="translate(-743.32 -363.611)"
                                fill="url(#linear-gradient-5)"
                              />
                              <path
                                id="Path_145"
                                data-name="Path 145"
                                d="M788.727,388.6a2.217,2.217,0,1,0,2.573-1.791A2.208,2.208,0,0,0,788.727,388.6Z"
                                transform="translate(-731.901 -336.234)"
                                fill="url(#linear-gradient-6)"
                              />
                              <path
                                id="Path_146"
                                data-name="Path 146"
                                d="M784.624,389.912a2.214,2.214,0,1,0,2.573-1.791A2.208,2.208,0,0,0,784.624,389.912Z"
                                transform="translate(-751.736 -329.906)"
                                fill="url(#linear-gradient-7)"
                              />
                              <path
                                id="Path_147"
                                data-name="Path 147"
                                d="M778.991,383.271a2.218,2.218,0,1,0,2.579-1.785A2.219,2.219,0,0,0,778.991,383.271Z"
                                transform="translate(-778.956 -361.981)"
                                fill="url(#linear-gradient-8)"
                              />
                              <path
                                id="Path_148"
                                data-name="Path 148"
                                d="M789.057,380.214a2.217,2.217,0,1,0,2.578-1.785A2.216,2.216,0,0,0,789.057,380.214Z"
                                transform="translate(-730.294 -376.77)"
                                fill="url(#linear-gradient-9)"
                              />
                              <path
                                id="Path_149"
                                data-name="Path 149"
                                d="M789.351,385.151a2.217,2.217,0,1,0,2.579-1.785A2.212,2.212,0,0,0,789.351,385.151Z"
                                transform="translate(-728.879 -352.903)"
                                fill="url(#linear-gradient-10)"
                              />
                            </g>
                          </g>
                        </g>
                      </g>
                    </svg>
                  </div>
                  <div class="lv-about-love-quote">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="118.649"
                      height="77.001"
                      viewBox="0 0 118.649 77.001"
                    >
                      <g
                        id="love_sticker"
                        data-name="love STicker"
                        transform="translate(-338 -1100)"
                      >
                        <path
                          id="Union_1"
                          data-name="Union 1"
                          d="M-2225,1045.5a16.5,16.5,0,0,1-16.5-16.5V986a16.5,16.5,0,0,1,16.5-16.5h74a16.5,16.5,0,0,1,16.5,16.5v13.056l9.945,14.6-9.945-2.959V1029a16.5,16.5,0,0,1-16.5,16.5Z"
                          transform="translate(2580 131)"
                          fill="#fff"
                          stroke="#dfb68d"
                          stroke-width="1"
                        />
                        <text
                          id="love_you_so_much_"
                          data-name="love You
                                 So Much!"
                          transform="translate(360 1133)"
                          fill="#dfb68d"
                          font-size="18"
                          font-family="SegoeUI, Segoe UI"
                        >
                          <tspan x="0" y="0">
                            Love
                          </tspan>
                          <tspan y="0" xml:space="preserve" fill="#111">
                            {" "}
                            You
                          </tspan>
                          <tspan fill="#111">
                            <tspan x="0" y="18">
                              So Much!
                            </tspan>
                          </tspan>
                        </text>
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
              <div class="col-xxl-6 col-xl-6 col-lg-6">
                <div class="lv-about-content-right">
                  <div class="lv-about-content-wrap">
                    <h3 class="lv-section-title mb-10">
                      We inspire you to bring wedding to real life
                    </h3>
                    <p class="lv-about-content mb-35">
                      We know this is one of the most important days of your
                      life, and you need to hire a wedding planner whom you can
                      trust respect. Most importantly, you need to hire a
                      company that allows you to enjoy every minute of your
                      wedding planning company be that company for you!
                    </p>
                  </div>
                  <div class="lv-about-blue-point-wrap mb-40">
                    <div class="row">
                      <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
                        <div class="lv-about-blue-point-left">
                          <h4 class="lv-about-blue-point-title">
                            <span>18+</span> Years
                            <br /> Real Experiences
                          </h4>
                        </div>
                      </div>
                      <div class="col-xxl-8 col-xl-8 col-lg-8 col-md-8">
                        <div class="lv-about-blue-point-right pl-35">
                          <div class="lv-about-play-btn">
                            <a
                              href="https://www.youtube.com/watch?v=G-rzE-9zHj8"
                              class="lv-about-play-btn-link popup-video"
                            >
                              <i class="fas fa-play"></i>
                              <svg class="eltdf-svg-circle">
                                <circle cx="50%" cy="50%" r="45%"></circle>
                              </svg>
                            </a>
                          </div>
                          <p class="lv-about-play-btn-label">
                            Watch How <br />
                            We arrange wedding celebration
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="lv-about-action">
                    <a href="about.html" class="lv-theme-btn">
                      <span class="lv-theme-horizontal-line"></span>
                      <span class="lv-theme-vertical-line"></span>
                      <span>Read More</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
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
                    <img
                      src="assets/img/path/flower-1.png"
                      alt="flower image"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
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
                        The problem is that you’re not an artist, and every time
                        you try to describe your idea translation.{" "}
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
                        Where to find a dream wedding planner how to find
                        wedding inspiration you’ll actually want.
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
                        The problem is that you’re not an artist, and every time
                        you try to describe your idea translation.{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="featured-gallery-area p-rel pt-120 pb-40">
          <div class="lv-featured-gallery-shape-img-group">
            <img src="../../public/img/bg/gallery-bg-2.png" alt="" />
          </div>
          <div class="lv-featured-gallery-overlay-pos">
            <div
              class="lv-featured-gallery-overlay lv-featured-gallery-overlay-height"
              data-bg-color="#F9F9F9"
            >
              <div class="img-1">
                <img src="../../public/img/bg/gallery-bg.png" alt="" />
              </div>
            </div>
          </div>
          <div class="container">
            <div class="gallery-grid row g-70">
              <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6 grid-item pb-65">
                <div class="lv-section-title-wrap">
                  <h2 class="lv-section-title">Featured Gallery</h2>
                  <p class="mb-0">
                    Some of the unforgettable weddings we planned all over the{" "}
                    <br />
                    world to see what we do best.
                  </p>
                </div>
              </div>
              <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6 grid-item">
                <div class="lv-single-featured-gallery pb-65">
                  <a href="portfolio-details.html">
                    <div
                      class="lv-single-featured-gallery-img lv-single-featured-gallery-img-3 bg-default"
                      data-background="../../public/img/gallery/gallery-3.jpg"
                    ></div>
                  </a>
                  <div class="lv-single-featured-gallery-content text-center pt-40">
                    <h5 class="lv-single-featured-gallery-subtitle">
                      Bethany & Sean
                    </h5>
                    <h4 class="lv-single-featured-gallery-title">
                      <a href="portfolio-details.html">Piemonte Countryside</a>
                    </h4>
                  </div>
                </div>
              </div>
              <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6 grid-item">
                <div class="lv-single-featured-gallery pb-65">
                  <a href="portfolio-details.html">
                    <div
                      class="lv-single-featured-gallery-img lv-single-featured-gallery-img-1 bg-default"
                      data-background="../../public/img/gallery/gallery-1.jpg"
                    ></div>
                  </a>
                  <div class="lv-single-featured-gallery-content text-center pt-40">
                    <h5 class="lv-single-featured-gallery-subtitle">
                      Anastasiya Manuel
                    </h5>
                    <h4 class="lv-single-featured-gallery-title">
                      <a href="portfolio-details.html">Lake Garda - Wedding</a>
                    </h4>
                  </div>
                </div>
              </div>
              <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6 grid-item">
                <div class="lv-single-featured-gallery pb-65">
                  <a href="portfolio-details.html">
                    <div
                      class="lv-single-featured-gallery-img lv-single-featured-gallery-img-4 bg-default"
                      data-background="../../public/img/gallery/gallery-4.jpg"
                    ></div>
                  </a>
                  <div class="lv-single-featured-gallery-content text-center pt-40">
                    <h5 class="lv-single-featured-gallery-subtitle">
                      Angela Charlie
                    </h5>
                    <h4 class="lv-single-featured-gallery-title">
                      <a href="portfolio-details.html">Wedding in Sicily</a>
                    </h4>
                  </div>
                </div>
              </div>
              <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6 grid-item">
                <div class="lv-single-featured-gallery pb-65">
                  <a href="portfolio-details.html">
                    <div
                      class="lv-single-featured-gallery-img lv-single-featured-gallery-img-2 bg-default"
                      data-background="../../public/img/gallery/gallery-2.jpg"
                    ></div>
                  </a>
                  <div class="lv-single-featured-gallery-content text-center pt-40">
                    <h5 class="lv-single-featured-gallery-subtitle">
                      Jelena Konrad
                    </h5>
                    <h4 class="lv-single-featured-gallery-title">
                      <a href="portfolio-details.html">Wedding Roman Riviera</a>
                    </h4>
                  </div>
                </div>
              </div>
              <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6 grid-item">
                <div class="lv-single-featured-gallery-explore-btn">
                  <a
                    href="portfolio-3.html"
                    class="lv-single-featured-gallery-explore-btn-link"
                  >
                    <span>Explore Gallery</span>
                    <svg class="explore-svg-cirlce">
                      <circle cx="50%" cy="50%" r="45%"></circle>
                    </svg>
                    <svg
                      class="explore-errow"
                      xmlns="http://www.w3.org/2000/svg"
                      width="50.555"
                      height="7.663"
                      viewBox="0 0 50.555 7.663"
                    >
                      <path
                        id="Path_245"
                        data-name="Path 245"
                        d="M-2215.664,976.5a.547.547,0,0,1,0-.775l2.4-2.4H-2261.5a.5.5,0,0,1-.5-.5.5.5,0,0,1,.5-.5h48.234l-2.4-2.4a.545.545,0,0,1-.161-.387.545.545,0,0,1,.161-.388h0a.549.549,0,0,1,.388-.16.548.548,0,0,1,.387.16l3.284,3.284a.547.547,0,0,1,.16.387.548.548,0,0,1-.16.388l-3.284,3.283a.545.545,0,0,1-.387.161A.546.546,0,0,1-2215.664,976.5Z"
                        transform="translate(2262 -969)"
                        fill="#111"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
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
        <div
          class="testimonial-area pb-115 testimonial-bg-settings pt-125 testimonial-area-spacing"
          data-background="../../public/img/bg/testimonial-bg.png"
        >
          <div class="container p-rel">
            <div class="testimonial-shape-path-image-wrap">
              <div class="testimonial-shape-path-image">
                <img
                  src="../../public/img/bg/testimonial-bg-1.png"
                  alt="img not found"
                />
              </div>
            </div>
            <div class="row">
              <div class="col-xxl-12">
                <div class="lv-section-title-wrap text-center pb-65">
                  <h2 class="lv-section-title">Testimonials</h2>
                  <p class="mb-0">
                    Couple's happiness is the best reward for us & these fill
                    our hearts of joy.
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
                              src="../../public/img/testimonial/testimonial-1.png"
                              alt=""
                            />
                          </div>
                          <div class="lv-testimonial-content mb-25">
                            <p>
                              My Partner and I got married a few weeks ago. Were
                              fantastic from the very first moment we met, until
                              the very end and your team worked so nothing was
                              too much trouble. The incredible site it was mind
                              blowing and everything we anted. So a massive
                              thank you so much cause we're very happy.
                            </p>
                            <div class="lv-testimonial-bg-img-pos">
                              <img
                                src="../../public/img/path/testimonial-path-1.png"
                                alt=""
                              />
                            </div>
                          </div>
                          <div class="lv-testimonial-author-box text-center">
                            <h5 class="lv-testimonial-author-name">
                              Salina Gomez
                            </h5>
                            <span class="lv-testimonial-author-date">
                              14/02/2022
                            </span>
                          </div>
                        </div>
                      </div>
                      <div class="swiper-slide">
                        <div class="lv-testimonial-box">
                          <div class="lv-testimonial-img text-center">
                            <img src="../../public/img/team/team-3.jpg" alt="" />
                          </div>
                          <div class="lv-testimonial-content mb-25">
                            <p>
                              My Partner and I got married a few weeks ago. Were
                              fantastic from the very first moment we met, until
                              the very end and your team worked so nothing was
                              too much trouble. The incredible site it was mind
                              blowing and everything we anted. So a massive
                              thank you so much cause we're very happy.
                            </p>
                            <div class="lv-testimonial-bg-img-pos">
                              <img
                                src="../../public/img/path/testimonial-path-1.png"
                                alt=""
                              />
                            </div>
                          </div>
                          <div class="lv-testimonial-author-box text-center">
                            <h5 class="lv-testimonial-author-name">
                              MR. Max John
                            </h5>
                            <span class="lv-testimonial-author-date">
                              14/02/2022
                            </span>
                          </div>
                        </div>
                      </div>
                      <div class="swiper-slide">
                        <div class="lv-testimonial-box">
                          <div class="lv-testimonial-img text-center">
                            <img src="../../public/img/team/team-8.jpg" alt="" />
                          </div>
                          <div class="lv-testimonial-content mb-25">
                            <p>
                              My Partner and I got married a few weeks ago. Were
                              fantastic from the very first moment we met, until
                              the very end and your team worked so nothing was
                              too much trouble. The incredible site it was mind
                              blowing and everything we anted. So a massive
                              thank you so much cause we're very happy.
                            </p>
                            <div class="lv-testimonial-bg-img-pos">
                              <img
                                src="../../public/img/path/testimonial-path-1.png"
                                alt=""
                              />
                            </div>
                          </div>
                          <div class="lv-testimonial-author-box text-center">
                            <h5 class="lv-testimonial-author-name">
                              Salina Gomez
                            </h5>
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
                        src="../../public/img/path/testimonial-arrow-prev.png"
                        alt=""
                      />
                    </div>
                    <div class="testimonial-paginations-2 lv-common-pagination-dots"></div>
                    <div class="swiper-button-next-2 lv-common-pagination-next-nav">
                      <img
                        src="../../public/img/path/testimonial-arrow-next.png"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
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
                    data-background="../../public/img/photography/photography-1.jpg"
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
                                data-background="../../public/img/photography/photography-2.jpg"
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
                                data-background="../../public/img/team/team-3.jpg"
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
                              data-background="../../public/img/team/team-5.jpg"
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
                          src="../../public/img/path/testimonial-arrow-prev.png"
                          alt=""
                        />
                      </div>
                      <div class="testimonial-paginations-photography lv-common-pagination-dots"></div>
                      <div class="swiper-button-next-photography lv-common-pagination-next-nav">
                        <img
                          src="../../public/img/path/testimonial-arrow-next.png"
                          alt=""
                        />
                      </div>
                    </div>
                    <div
                      class="lv-photography-swiper-gallery-single lv-photography-swiper-gallery-single-height bg-default"
                      data-background="../../public/img/gallery/gallery-carousel-1.jpg"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="cta-area bg-default pt-110 pb-115 lv-bg-opacity lv-opacity-5"
          data-background="../../public/img/bg/cta-bg.jpg"
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
        <div class="brand-area pt-65 pb-55" data-bg-color="#F9F9F9">
          <div class="container">
            <div class="lv-brand-flex-wrap">
              <div class="lv-brand-flex-single">
                <img src="../../public/img/brand/10.png" alt="" />
              </div>
              <div class="lv-brand-flex-single">
                <img src="../../public/img/brand/1.png" alt="" />
              </div>
              <div class="lv-brand-flex-single">
                <img src="../../public/img/brand/2.png" alt="" />
              </div>
              <div class="lv-brand-flex-single">
                <img src="../../public/img/brand/3.png" alt="" />
              </div>
              <div class="lv-brand-flex-single">
                <img src="../../public/img/brand/4.png" alt="" />
              </div>
              <div class="lv-brand-flex-single">
                <img src="../../public/img/brand/6.png" alt="" />
              </div>
              <div class="lv-brand-flex-single">
                <img src="../../public/img/brand/7.png" alt="" />
              </div>
              <div class="lv-brand-flex-single">
                <img src="../../public/img/brand/8.png" alt="" />
              </div>
              <div class="lv-brand-flex-single">
                <img src="../../public/img/brand/5.png" alt="" />
              </div>
              <div class="lv-brand-flex-single">
                <img src="../../public/img/brand/9.png" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div class="blog-area pt-115 p-rel pb-95">
          <div class="lv-blog-shape-wrap">
            <div class="lv-blog-shape-img-1">
              <img src="../../public/img/bg/blog-bg.png" alt="" />
            </div>
          </div>
          <div class="container">
            <div class="row">
              <div class="col-xxl-12">
                <div class="lv-section-title-wrap pb-65 text-center">
                  <h2 class="lv-section-title">Read Our Blog</h2>
                  <p class="mb-0">
                    {" "}
                    Coast to coast and beyond the over celebration sweet news
                  </p>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-6 mb-30 mb-lg-0">
                <div class="lv-blog-box">
                  <a href="blog-details.html">
                    <div class="fix">
                      <div
                        class="lv-blog-box-img bg-default"
                        data-background="../../public/img/blog/blog-1.jpg"
                      ></div>
                    </div>
                  </a>
                  <div class="lv-blog-box-content">
                    <div class="lv-blog-box-meta">
                      <span class="lv-blog-box-meta-date">25/02/2022</span>
                      <a href="portfolio-3.html" class="lv-blog-box-meta-cat">
                        Photography
                      </a>
                    </div>
                    <h5 class="lv-blog-box-title">
                      <a href="blog-details.html">
                        How you can create special design broad
                      </a>
                    </h5>
                    <a href="blog-details.html" class="lv-blog-box-read-btn">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-6 mb-30 mb-lg-0">
                <div class="lv-blog-box">
                  <a href="blog-details.html">
                    <div class="fix">
                      <div
                        class="lv-blog-box-img bg-default"
                        data-background="../../public/img/blog/blog-3.jpg"
                      ></div>
                    </div>
                  </a>
                  <div class="lv-blog-box-content">
                    <div class="lv-blog-box-meta">
                      <span class="lv-blog-box-meta-date">22/02/2022</span>
                      <a href="portfolio-3.html" class="lv-blog-box-meta-cat">
                        Wedding
                      </a>
                    </div>
                    <h5 class="lv-blog-box-title">
                      <a href="blog-details.html">
                        Special wedding moments Catches by Michel
                      </a>
                    </h5>
                    <a href="blog-details.html" class="lv-blog-box-read-btn">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-6 mb-30 mb-lg-0">
                <div class="lv-blog-box">
                  <a href="blog-details.html">
                    <div class="fix">
                      <div
                        class="lv-blog-box-img bg-default"
                        data-background="../../public/img/blog/blog-2.jpg"
                      ></div>
                    </div>
                  </a>
                  <div class="lv-blog-box-content">
                    <div class="lv-blog-box-meta">
                      <span class="lv-blog-box-meta-date">13/01/2022</span>
                      <a href="portfolio-3.html" class="lv-blog-box-meta-cat">
                        Party
                      </a>
                    </div>
                    <h5 class="lv-blog-box-title">
                      <a href="blog-details.html">
                        Life partner can create the moments day
                      </a>
                    </h5>
                    <a href="blog-details.html" class="lv-blog-box-read-btn">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="instagram-area pb-20">
          <div class="container-fluid pl-20 pr-20">
            <div class="row">
              <div class="col-xxl-2 col-xl-2 col-lg-4 col-md-4 col-sm-6 mb-30 mb-xl-0">
                <div
                  class="lv-instagram-img lv-instagram-img-height bg-default"
                  data-background="../../public/img/instagram/insta-1.jpg"
                >
                  <div class="lv-instagram-icon">
                    <a href="#">
                      <i class="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-xxl-2 col-xl-2 col-lg-4 col-md-4 col-sm-6 mb-30 mb-xl-0">
                <div
                  class="lv-instagram-img lv-instagram-img-height bg-default"
                  data-background="../../public/img/instagram/insta-2.jpg"
                >
                  <div class="lv-instagram-icon">
                    <a href="#">
                      <i class="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-xxl-2 col-xl-2 col-lg-4 col-md-4 col-sm-6 mb-30 mb-xl-0">
                <div
                  class="lv-instagram-img lv-instagram-img-height bg-default"
                  data-background="../../public/img/instagram/insta-3.jpg"
                >
                  <div class="lv-instagram-icon">
                    <a href="#">
                      <i class="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-xxl-2 col-xl-2 col-lg-4 col-md-4 col-sm-6 mb-30 mb-xl-0">
                <div
                  class="lv-instagram-img lv-instagram-img-height bg-default"
                  data-background="../../public/img/instagram/insta-4.jpg"
                >
                  <div class="lv-instagram-icon">
                    <a href="#">
                      <i class="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-xxl-2 col-xl-2 col-lg-4 col-md-4 col-sm-6 mb-30 mb-xl-0">
                <div
                  class="lv-instagram-img lv-instagram-img-height bg-default"
                  data-background="../../public/img/instagram/insta-5.jpg"
                >
                  <div class="lv-instagram-icon">
                    <a href="#">
                      <i class="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-xxl-2 col-xl-2 col-lg-4 col-md-4 col-sm-6 mb-30 mb-xl-0">
                <div
                  class="lv-instagram-img lv-instagram-img-height bg-default"
                  data-background="../../public/img/instagram/insta-6.jpg"
                >
                  <div class="lv-instagram-icon">
                    <a href="#">
                      <i class="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
