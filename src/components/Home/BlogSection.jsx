import React from "react";
import { Link } from "react-router-dom";

const BlogSection = () => {
  return (
    <div class="blog-area pt-115 p-rel pb-95">
      <div class="lv-blog-shape-wrap">
        <div class="lv-blog-shape-img-1">
          <img src="assets/img/bg/blog-bg.png" alt="" />
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
                    data-background="assets/img/blog/blog-1.jpg"
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
                    data-background="assets/img/blog/blog-3.jpg"
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
                    data-background="assets/img/blog/blog-2.jpg"
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
  );
};

export default BlogSection;
