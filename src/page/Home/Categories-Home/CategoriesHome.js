import React from "react";
import "./CategoriesHome.scss";

export default function CategoriesHome() {
  const logo = [
    {
      img: "https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/graphics-design.d32a2f8.svg",
    },
    {
      img: "https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/online-marketing.74e221b.svg",
    },
    {
      img: "https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/writing-translation.32ebe2e.svg",
    },
    {
      img: "https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/video-animation.f0d9d71.svg",
    },
    {
      img: "https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/music-audio.320af20.svg",
    },
    {
      img: "https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/programming.9362366.svg",
    },
    {
      img: "https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/business.bbdf319.svg",
    },
    {
      img: "https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/lifestyle.745b575.svg",
    },
    {
      img: "https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/data.718910f.svg",
    },
  ];
  return (
    <section className="main-categories container">
      <h2 className="margin">Explore the marketplace</h2>
      <ul className="row justify-content-center">
        {logo.map(({ img }, index) => {
          return (
            <li
              key={index}
              className="col-6 col-sm-6 col-md-4 col-lg-3 col-xl-2 mt-5 text-center"
            >
              <a href="/categories/graphics-design?source=hplo_cat_sec&pos=1">
                <img
                  className="main-categories-img"
                  src={img}
                  alt="Graphics & Design"
                  loading="lazy"
                />
                Graphics &amp; Design
              </a>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
