import React from "react";

const BrandsSection = () => {
  const brands = [
    "../../../public/img/brand/brand-1.png",
    "../../../public/img/brand/brand-2.png",
    "../../../public/img/brand/brand-3.png",
    "../../../public/img/brand/brand-4.png",
    "../../../public/img/brand/brand-5.png",
  ];

  return (
    <div class="brand-area pt-65 pb-55" data-bg-color="#F9F9F9">
      <div class="container">
        <div class="lv-brand-flex-wrap">
          {brands.map((brand, index) => (
            <div class="lv-brand-flex-single" key={index}>
              <img src={brand} alt={`Brand ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrandsSection;
