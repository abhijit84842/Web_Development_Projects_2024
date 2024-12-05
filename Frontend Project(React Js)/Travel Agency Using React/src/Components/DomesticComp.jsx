import "../CSS/domesticcomp.css";

// images import
import goa from "../assets/images/domesticimages/goa.jpg";
import rajashtan from "../assets/images/domesticimages/rajashtan.jpg";
import andaman from "../assets/images/domesticimages/andaman.jpg";
import himachal from "../assets/images/domesticimages/himachal.jpg";
import kashmir from "../assets/images/domesticimages/kashmir.jpg";
import kerala from "../assets/images/domesticimages/kerala.jpg";

// react icons
import { FaEarthAmericas } from "react-icons/fa6";
import { MdOutlineSportsVolleyball } from "react-icons/md";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "../CSS/domesticcomp.css";

// import required modules
import { Pagination } from "swiper/modules";

const DomesticComp = () => {
  return (
    <div className="domestic-main-container">
      <h1>Domestic Tour Packages</h1>
      <div className="domestic-sub-container">
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="secoundSwiper"
        >
          <SwiperSlide>
            {" "}
            <div className="slide-card">
              <div className="img-box">
                <img src={goa} alt="loading.." />
              </div>

              <h2 className="domestic-name">
                Goa- The Special Beauty of Nature
              </h2>
              <div className="activity">
                <p>Beach, City Tours, Family, Honeymoon</p>
              </div>
              <div className="icons-activity">
                <div className="place">
                  <FaEarthAmericas style={{ color: "blue" }} />
                  <p>1 Place</p>
                </div>
                <div className="activity-box">
                  <MdOutlineSportsVolleyball style={{ color: "red" }} />
                  <p>4 Activity</p>
                </div>
              </div>
              <div className="blankdiv"></div>
              <div className="city-desc">
                <p>
                  The queen of beaches, Goa is the smallest city in India, but
                  it invites most of the attractive places in its vicinity. The
                  nightlife, alluring sand beaches, sacred sites and the
                  world-class heritage architecture of this place delivers the
                  best…
                </p>
              </div>
              <div className="blankdiv-2nd"></div>
              <div className="tour-price">
                <p>
                  ₹ <span>15,000.00</span>
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
          <SwiperSlide>Slide 5</SwiperSlide>
          <SwiperSlide>Slide 6</SwiperSlide>
          <SwiperSlide>Slide 7</SwiperSlide>
          <SwiperSlide>Slide 8</SwiperSlide>
          <SwiperSlide>Slide 9</SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default DomesticComp;
