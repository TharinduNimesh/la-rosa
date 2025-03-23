import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Sidebar } from "./Sidebar";

const Header = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <>
      <header class="header-area header-transparent">
        <div class="container container-2">
          <div class="row align-items-center">
            <div class="col-xxl-2 col-xl-1 col-lg-1 col-md-3 col-2">
              <div class="lv-header-bar-1">
                <button onClick={() => setShowSidebar(true)}>
                  <p>Button</p>
                </button>
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
      {showSidebar && <Sidebar onClose={() => setShowSidebar(false)} />}
    </>
  );
};

export default Header;
