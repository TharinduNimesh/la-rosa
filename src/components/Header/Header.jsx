import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header class="header-area header-transparent">
        <div class="container container-2">
          <div class="row align-items-center">
            <div class="col-xxl-2 col-xl-1 col-lg-1 col-md-3 col-2">
              <div class="lv-header-bar-1">
                <a href="#0">
                  <span class="lv-header-bar-line lv-header-bar-line-1"></span>
                  <span class="lv-header-bar-line lv-header-bar-line-2"></span>
                  <span class="lv-header-bar-line lv-header-bar-line-3"></span>
                </a>
              </div>
            </div>
            <div class="col-xxl-8 col-xl-10 col-lg-10  col-md-6 col-8">
              <div class="pl-20 pr-20 lv-header-nav-middle">
                <div class="row align-items-center">
                  <div class="col-xxl-5 col-xl-5 col-lg-5 d-none d-lg-block">
                    <div class="lv-header-nav lv-header-nav-1 lv-header-left">
                      <nav id="mobile-menu">
                        <ul>
                          <li class="active">
                            <Link to="/">
                              Home
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="44"
                                height="5"
                                viewBox="0 0 44 5"
                              >
                                <path
                                  data-name="Path 49"
                                  d="M-2222,971.5a2.5,2.5,0,0,1,2.5-2.5,2.5,2.5,0,0,1,2.5,2.5,2.5,2.5,0,0,1-2.5,2.5A2.5,2.5,0,0,1-2222,971.5Zm7,.5v-1h17v1Zm-27,0v-1h18v1Z"
                                  transform="translate(2242 -969)"
                                  fill="#fff"
                                />
                              </svg>
                            </Link>
                          </li>
                          <li>
                            <Link to="/about">
                              About
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="44"
                                height="5"
                                viewBox="0 0 44 5"
                              >
                                <path
                                  data-name="Path 49"
                                  d="M-2222,971.5a2.5,2.5,0,0,1,2.5-2.5,2.5,2.5,0,0,1,2.5,2.5,2.5,2.5,0,0,1-2.5,2.5A2.5,2.5,0,0,1-2222,971.5Zm7,.5v-1h17v1Zm-27,0v-1h18v1Z"
                                  transform="translate(2242 -969)"
                                  fill="#fff"
                                />
                              </svg>
                            </Link>
                          </li>
                          <li>
                            <Link to="/service">
                              Service
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="44"
                                height="5"
                                viewBox="0 0 44 5"
                              >
                                <path
                                  data-name="Path 49"
                                  d="M-2222,971.5a2.5,2.5,0,0,1,2.5-2.5,2.5,2.5,0,0,1,2.5,2.5,2.5,2.5,0,0,1-2.5,2.5A2.5,2.5,0,0,1-2222,971.5Zm7,.5v-1h17v1Zm-27,0v-1h18v1Z"
                                  transform="translate(2242 -969)"
                                  fill="#fff"
                                />
                              </svg>
                            </Link>
                          </li>
                          <li>
                            <a href="#0">
                              Pages
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="44"
                                height="5"
                                viewBox="0 0 44 5"
                              >
                                <path
                                  data-name="Path 49"
                                  d="M-2222,971.5a2.5,2.5,0,0,1,2.5-2.5,2.5,2.5,0,0,1,2.5,2.5,2.5,2.5,0,0,1-2.5,2.5A2.5,2.5,0,0,1-2222,971.5Zm7,.5v-1h17v1Zm-27,0v-1h18v1Z"
                                  transform="translate(2242 -969)"
                                  fill="#fff"
                                />
                              </svg>
                            </a>
                            <ul class="submenu">
                              <li>
                                <a href="team.html">Team</a>
                              </li>
                              <li>
                                <a href="team-details.html">Team Details</a>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                  <div class="col-xxl-2 col-xl-2 col-lg-2">
                    <div class="lv-header-logo text-center">
                      <div class="lv-header-logo-box">
                        <a href="index.html">
                          <img
                            src="../../../public/img/logo/logo.png"
                            alt="logo"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div class="col-xxl-5 col-xl-5 col-lg-5 d-none d-lg-block">
                    <div class="lv-header-nav lv-header-nav-1 lv-header-right">
                      <nav>
                        <ul>
                          <li>
                            <a href="shop.html">
                              Shop
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="44"
                                height="5"
                                viewBox="0 0 44 5"
                              >
                                <path
                                  data-name="Path 49"
                                  d="M-2222,971.5a2.5,2.5,0,0,1,2.5-2.5,2.5,2.5,0,0,1,2.5,2.5,2.5,2.5,0,0,1-2.5,2.5A2.5,2.5,0,0,1-2222,971.5Zm7,.5v-1h17v1Zm-27,0v-1h18v1Z"
                                  transform="translate(2242 -969)"
                                  fill="#fff"
                                />
                              </svg>
                            </a>
                            <ul class="submenu">
                              <li>
                                <a href="shop.html">Shop</a>
                              </li>
                              <li>
                                <a href="shop-details.html">Shop Details</a>
                              </li>
                              <li>
                                <a href="shop-right-sidebar.html">
                                  Shop Right Sidebar
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href="portfolio.html">
                              Portfolio
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="44"
                                height="5"
                                viewBox="0 0 44 5"
                              >
                                <path
                                  data-name="Path 49"
                                  d="M-2222,971.5a2.5,2.5,0,0,1,2.5-2.5,2.5,2.5,0,0,1,2.5,2.5,2.5,2.5,0,0,1-2.5,2.5A2.5,2.5,0,0,1-2222,971.5Zm7,.5v-1h17v1Zm-27,0v-1h18v1Z"
                                  transform="translate(2242 -969)"
                                  fill="#fff"
                                />
                              </svg>
                            </a>
                            <ul class="submenu">
                              <li>
                                <a href="portfolio.html">Portfolio Layout 01</a>
                              </li>
                              <li>
                                <a href="portfolio-2.html">
                                  Portfolio Layout 02
                                </a>
                              </li>
                              <li>
                                <a href="portfolio-3.html">
                                  Portfolio Layout 03
                                </a>
                              </li>
                              <li>
                                <a href="portfolio-details.html">
                                  Portfolio Details
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href="blog.html">
                              News
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="44"
                                height="5"
                                viewBox="0 0 44 5"
                              >
                                <path
                                  data-name="Path 49"
                                  d="M-2222,971.5a2.5,2.5,0,0,1,2.5-2.5,2.5,2.5,0,0,1,2.5,2.5,2.5,2.5,0,0,1-2.5,2.5A2.5,2.5,0,0,1-2222,971.5Zm7,.5v-1h17v1Zm-27,0v-1h18v1Z"
                                  transform="translate(2242 -969)"
                                  fill="#fff"
                                />
                              </svg>
                            </a>
                            <ul class="submenu">
                              <li>
                                <a href="blog.html">News</a>
                              </li>
                              <li>
                                <a href="blog-details.html">News Details</a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <Link to="/contact">
                              Contact
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="44"
                                height="5"
                                viewBox="0 0 44 5"
                              >
                                <path
                                  data-name="Path 49"
                                  d="M-2222,971.5a2.5,2.5,0,0,1,2.5-2.5,2.5,2.5,0,0,1,2.5,2.5,2.5,2.5,0,0,1-2.5,2.5A2.5,2.5,0,0,1-2222,971.5Zm7,.5v-1h17v1Zm-27,0v-1h18v1Z"
                                  transform="translate(2242 -969)"
                                  fill="#fff"
                                />
                              </svg>
                            </Link>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xxl-2 col-xl-1 col-lg-1 col-md-3 col-2">
              <div class="lv-header-right">
                <button class="lv-header-shopping-btn">
                  <i class="fal fa-shopping-bag"></i>
                  <span class="lv-shopping-count">0</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
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
              <img src="assets/img/logo/logo-black.png" alt="logo not found" />
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
                    data-background="assets/img/portfolio/s1.jpg"
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
    </>
  );
};

export default Header;
