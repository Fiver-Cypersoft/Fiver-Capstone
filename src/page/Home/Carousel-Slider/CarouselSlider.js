import React from "react";
import Slider from "react-slick";
import "./CarouselSlider.scss";

const imgArr = [
  {
    img: "https://demo5.cybersoft.edu.vn/img/1.png",
  },
  {
    img: "https://demo5.cybersoft.edu.vn/img/2.png",
  },
  {
    img: "https://demo5.cybersoft.edu.vn/img/3.png",
  },
  {
    img: "https://demo5.cybersoft.edu.vn/img/4.png",
  },
  {
    img: "https://demo5.cybersoft.edu.vn/img/5.png",
  },
];

export default function CarouselSlider() {
  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 5000,
    arrows: false,
    // cssEase: "linear",
  };
  return (
    <Slider autoplay {...settings}>
      {imgArr.map(({ img }, index) => {
        return (
          <div key={index}>
            <img
              src={img}
              alt=""
              className="min-h-[680px] object-cover object-fit"
            />
          </div>
        );
      })}
    </Slider>
  );
}
