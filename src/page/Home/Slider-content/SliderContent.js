import React from "react";
import "./SliderContent.scss";

export default function SliderContent() {
  return (
    <section className="container slider-content">
      <div className="search ">
        <div className="container">
          <div className="searchLeft">
            <h1>
              Find the perfect
              <i> freelance </i>
              services for your business
            </h1>
            <form className="flex" role="search">
              <input
                className="form-control"
                type="search"
                name="searchInputCarousel"
                placeholder='Try "building mobile app"'
                aria-label="Search"
              />
              <button className="btn btn-success" type="submit">
                Search
              </button>
            </form>
            <div className="d-flex popular">
              <span>Popular: </span>
              <div className="btn">Website Design</div>
              <div className="btn">WordPress</div>
              <div className="btn">Logo Design</div>
              <div className="btn">Video Editing</div>
            </div>
          </div>
          <div className="searchRight" />
        </div>
      </div>
    </section>
  );
}
