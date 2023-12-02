import React, { Component } from "react";
import Slider from "react-slick";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        borderRadius: "50%",
        backgroundColor: "gray",
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        borderRadius: "50%",
        backgroundColor: "gray",
      }}
      onClick={onClick}
    />
  );
}
const imgSubcategoryCarouselArr = [
  {
    img: "https://demo5.cybersoft.edu.vn/img/crs1.png",
  },
  {
    img: "https://demo5.cybersoft.edu.vn/img/crs2.png",
  },
  {
    img: "https://demo5.cybersoft.edu.vn/img/crs3.png",
  },
  {
    img: "https://demo5.cybersoft.edu.vn/img/crs4.png",
  },
  {
    img: "https://demo5.cybersoft.edu.vn/img/crs5.png",
  },
  {
    img: "https://demo5.cybersoft.edu.vn/img/crs6.png",
  },
  {
    img: "https://demo5.cybersoft.edu.vn/img/crs7.png",
  },
  {
    img: "https://demo5.cybersoft.edu.vn/img/crs8.png",
  },
  {
    img: "https://demo5.cybersoft.edu.vn/img/crs9.png",
  },
  {
    img: "https://demo5.cybersoft.edu.vn/img/crs10.png",
  },
];
export default class SubcategoryCarousel extends Component {
  render() {
    const settings = {
      // dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 5,
      initialSlide: 0,
      // swipeToSlide: true,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            // dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };

    return (
      <div className="container mt-4">
        <Slider {...settings}>
          {imgSubcategoryCarouselArr.map(({ img }, index) => {
            return (
              <div className="p-3" key={index}>
                <img src={img} className="w-full" alt="" />
              </div>
            );
          })}
        </Slider>
      </div>
    );
  }
}
