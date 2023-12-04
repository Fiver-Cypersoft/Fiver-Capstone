import React from "react";
import CarouselSlider from "./Carousel-Slider/CarouselSlider";
import SliderContent from "./Slider-content/SliderContent";
import Trusted from "./Trusted/Trusted";
import SubcategoryCarousel from "./Subcategory-carousel/SubcategoryCarousel";
import SellingProposition from "./Selling-proposition/SellingProposition";
import Testimonial from "./Testimonial/Testimonial";
import CategoriesHome from "./Categories-Home/CategoriesHome";

export default function Home() {
  return (
    <>
      <CarouselSlider />
      <SliderContent />
      <Trusted />
      <SubcategoryCarousel />
      <SellingProposition />
      <Testimonial />
      <CategoriesHome />
    </>
  );
}
