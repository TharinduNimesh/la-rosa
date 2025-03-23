import React from "react";
import Layout from "../components/Layout/Layout";
import HeroSlider from "../components/Home/HeroSlider";
import AboutSection from "../components/Home/AboutSection";
import VideoBanner from "../components/Home/VideoBanner";
import ServicesSection from "../components/Home/ServicesSection";
import GallerySection from "../components/Home/GallerySection";
import CounterSection from "../components/Home/CounterSection";
import TestimonialsSection from "../components/Home/TestimonialsSection";
import PhotographyTeam from "../components/Home/PhotographyTeam";
import CtaSection from "../components/Home/CtaSection";
import BrandsSection from "../components/Home/BrandsSection";
import BlogSection from "../components/Home/BlogSection";
import InstagramSection from "../components/Home/InstagramSection";

export function Home() {
  return (
    <Layout>
      <main>
        <HeroSlider />
        <AboutSection />
        <VideoBanner />
        <ServicesSection />
        <GallerySection />
        <CounterSection />
        <TestimonialsSection />
        <PhotographyTeam />
        <CtaSection />
        <BrandsSection />
        <BlogSection />
        <InstagramSection />
      </main>
    </Layout>
  );
}
