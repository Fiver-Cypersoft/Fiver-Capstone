import React from "react";
import "./Testimonial.scss";
import Slider from "react-slick";
import VideoModal1 from "../../../component/Video/VideoModal1";
import VideoModal2 from "../../../component/Video/VideoModal2";
import VideoModal3 from "../../../component/Video/VideoModal3";
import VideoModal4 from "../../../component/Video/VideoModal4";

export default function Testimonial() {
  const testimonialArr = [
    {
      id: 1,
      img: "https://demo5.cybersoft.edu.vn/img/testimonial1.png",
      title: "Kay Kim, Co-Founder ",
      logo: "https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/rooted-logo-x2.321d79d.png",
      deps: "It's extremely exciting that Fiverr has freelancers from all over the world — it broadens the talent pool. One of the best things about Fiverr is that while we're sleeping, someone's working.",
      videos: <VideoModal1 />,
    },
    {
      id: 2,
      img: "https://demo5.cybersoft.edu.vn/img/testimonial2.png",
      title: "Caitlin Tormey, Chief Commercial Officer",
      deps: "We've used Fiverr for Shopify web development, graphic design, and backend web development. Working with Fiverr makes my job a little easier every day.",
      logo: "https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/naadam-logo-x2.0a3b198.png",
      videos: <VideoModal2 />,
    },
    {
      id: 3,
      img: "https://demo5.cybersoft.edu.vn/img/testimonial3.png",
      title: "Brighid Gannon (DNP, PMHNP-BC), Co-Founder",
      deps: "We used Fiverr for SEO, our logo, website, copy, animated videos — literally everything. It was like working with a human right next to you versus being across the world.",
      logo: "https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/lavender-logo-x2.89c5e2e.png",
      videos: <VideoModal3 />,
    },
    {
      id: 4,
      img: "https://demo5.cybersoft.edu.vn/img/testimonial4.png",
      title: "Tim and Dan Joo, Co-Founders",
      deps: "When you want to create a business bigger than yourself, you need a lot of help. That's what Fiverr does.",
      logo: "https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/haerfest-logo-x2.03fa5c5.png",
      videos: <VideoModal4 />,
    },
  ];

  const SamplePrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "#b5b6ba" }}
        onClick={onClick}
      />
    );
  };

  const SampleNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "#b5b6ba" }}
        onClick={onClick}
      />
    );
  };

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <section className="testimonial">
      <div className="mt-4">
        <div className="container p-0">
          <Slider {...settings}>
            {testimonialArr.map(({ img, title, deps, logo, videos }, index) => {
              return (
                <div
                  key={index}
                  className="css-video "
                  // tabIndex={-1}
                  style={{ width: "100%", display: "inline-block" }}
                >
                  <div className="modal-1 col-lg-12">
                    {videos}
                    <div className="text-block">
                      <div
                        className="d-flex align-items-center"
                        style={{ paddingBottom: 16 }}
                      >
                        <h5>{title}</h5>
                        <span className="testimonial-logo">
                          <img
                            className="img-rooted"
                            alt="Company logo"
                            src={logo}
                            loading="lazy"
                            style={{ width: "90%" }}
                          />
                        </span>
                      </div>
                      <div className="quote-modal">
                        <i>{deps}</i>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </section>
  );
}
