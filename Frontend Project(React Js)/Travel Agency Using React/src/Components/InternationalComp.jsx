import "../CSS/internationalcomp.css";

// import images
import dubai from "../assets/images/internationalimages/dubai.jpg";
import egypt from "../assets/images/internationalimages/egypt.jpg";
import singapore from "../assets/images/internationalimages/singapore.jpg";
import thailand from "../assets/images/internationalimages/thailand.jpg";
import malaysia from "../assets/images/internationalimages/malaysia.jpg";
import hongkong from "../assets/images/internationalimages/hongkong.jpg";

// react icons
import { FaEarthAmericas } from "react-icons/fa6";
import { MdOutlineSportsVolleyball } from "react-icons/md";

// Import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "../CSS/domesticcomp.css";

// import required modules
import { Pagination, Autoplay } from "swiper/modules";

const InternationalComp = () => {
  return (
    <div className="international-main-container">
      <h1>Best International Packages For You</h1>
      <div className="international-sub-container">
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop={true}
          modules={[Pagination, Autoplay]}
          className="thirdSwiper"
        >
          <SwiperSlide>
            {" "}
            <div className="international-slide-card">
              <div className="international-img-box">
                <img src={dubai} alt="loading.." />
              </div>

              <h2 className="international-name">Marvelous Dubai</h2>
              <div className="international-activity">
                <p>City Tours, Family, Safari</p>
              </div>
              <div className="international-icons-activity">
                <div className="international-place">
                  <FaEarthAmericas style={{ color: "blue" }} />
                  <p>1 Place</p>
                </div>
                <div className="international-activity-box">
                  <MdOutlineSportsVolleyball style={{ color: "red" }} />
                  <p>3 Activity</p>
                </div>
              </div>
              <div className="international-blankdiv"></div>
              <div className="international-city-desc">
                <p>
                  Have you been thinking of a visit to Dubai? Come to Dubai on a
                  4 nights 5 days tour and savour some of its finest
                  technological marvels. The Palm Island, Jumeirah Mosque,
                  Ferrari World, Dubai Mall, and Burj Khalifa are among some of
                  the wonders to marvel at.
                </p>
              </div>
              <div className="international-blankdiv-2nd"></div>
              <div className="international-tour-price">
                <p>
                  ₹ <span>60,199.00</span>
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className="international-slide-card">
              <div className="img-box">
                <img src={egypt} alt="loading.." />
              </div>

              <h2 className="international-name">Iconic Egypt</h2>
              <div className="international-activity">
                <p>City Tours, Family, Safari</p>
              </div>
              <div className="international-icons-activity">
                <div className="place">
                  <FaEarthAmericas style={{ color: "blue" }} />
                  <p>1 Place</p>
                </div>
                <div className="international-activity-box">
                  <MdOutlineSportsVolleyball style={{ color: "red" }} />
                  <p>3 Activity</p>
                </div>
              </div>
              <div className="international-blankdiv"></div>
              <div className="international-city-desc">
                <p>
                  Egypt, the land of the Pyramids, does not need any
                  introduction as the registration in the Seven Wonders of the
                  World is sufficient to define the archaeology and the rich
                  culture of this place. It is a country which pays homage to a
                  very high number of tourists every year.
                </p>
              </div>
              <div className="international-blankdiv-2nd"></div>
              <div className="international-tour-price">
                <p>
                  ₹ <span>63,499.00</span>
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className="international-slide-card">
              <div className="img-box">
                <img src={singapore} alt="loading.." />
              </div>

              <h2 className="international-name">Dazzling Singapore</h2>
              <div className="international-activity">
                <p>Beach, City Tours, Family, Jungle</p>
              </div>
              <div className="international-icons-activity">
                <div className="place">
                  <FaEarthAmericas style={{ color: "blue" }} />
                  <p>1 Place</p>
                </div>
                <div className="international-activity-box">
                  <MdOutlineSportsVolleyball style={{ color: "red" }} />
                  <p>4 Activity</p>
                </div>
              </div>
              <div className="international-blankdiv"></div>
              <div className="international-city-desc">
                <p>
                  Singapore is a state of fun. It is a modern and vibrant nation
                  with numerous opportunities and an excellent educational
                  system, allowing students from worldwide to take this option
                  of studying abroad from this location.
                </p>
              </div>
              <div className="international-blankdiv-2nd"></div>
              <div className="international-tour-price">
                <p>
                  ₹ <span>60,199.00</span>
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className="international-slide-card">
              <div className="img-box">
                <img src={thailand} alt="loading.." />
              </div>

              <h2 className="international-name">
                Honeymoon Paradise Thailand
              </h2>
              <div className="international-activity">
                <p>Beach, City Tours, Family, Honeymoon</p>
              </div>
              <div className="international-icons-activity">
                <div className="place">
                  <FaEarthAmericas style={{ color: "blue" }} />
                  <p>1 Place</p>
                </div>
                <div className="international-activity-box">
                  <MdOutlineSportsVolleyball style={{ color: "red" }} />
                  <p>4 Activity</p>
                </div>
              </div>
              <div className="international-blankdiv"></div>
              <div className="international-city-desc">
                <p>
                  It’s good to get lost in the heart of Southeast Asia. Thailand
                  is an exotic tourist destination with lush vistas and opulent
                  ancient traditions. The country fascinates a visitor with its
                  islands, beaches, ancient monuments, temples and palaces.
                </p>
              </div>
              <div className="international-blankdiv-2nd"></div>
              <div className="international-tour-price">
                <p>
                  ₹ <span>25,500.00</span>
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className="international-slide-card">
              <div className="img-box">
                <img src={malaysia} alt="loading.." />
              </div>

              <h2 className="international-name">
                Incredible Malaysia and Bali
              </h2>
              <div className="international-activity">
                <p>Beach, City Tours, Jungle, Mountain, Safari</p>
              </div>
              <div className="international-icons-activity">
                <div className="place">
                  <FaEarthAmericas style={{ color: "blue" }} />
                  <p>1 Place</p>
                </div>
                <div className="international-activity-box">
                  <MdOutlineSportsVolleyball style={{ color: "red" }} />
                  <p>5 Activity</p>
                </div>
              </div>
              <div className="international-blankdiv"></div>
              <div className="international-city-desc">
                <p>
                  Malaysia is a beautiful Southeast Asian country. Malaysia is
                  known for its magnificent beaches, rainforests. Bali is an
                  Indonesian island. Bali is known for its iconic beaches,
                  Mountains.
                </p>
              </div>
              <div className="international-blankdiv-2nd"></div>
              <div className="international-tour-price">
                <p>
                  ₹ <span>45,500.00</span>
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className="international-slide-card">
              <div className="img-box">
                <img src={hongkong} alt="loading.." />
              </div>

              <h2 className="international-name">Splendid City Hong Kong</h2>
              <div className="international-activity">
                <p>Beach, City Tours</p>
              </div>
              <div className="international-icons-activity">
                <div className="place">
                  <FaEarthAmericas style={{ color: "blue" }} />
                  <p>1 Place</p>
                </div>
                <div className="international-activity-box">
                  <MdOutlineSportsVolleyball style={{ color: "red" }} />
                  <p>2 Activity</p>
                </div>
              </div>
              <div className="international-blankdiv"></div>
              <div className="international-city-desc">
                <p>
                  HongKong is one of the most favorite tourist destinations
                  around the world because of its unique culture, skyline,
                  beautiful surroundings covered with natural flora. There many
                  fascination neighborhood places to explore during your
                  HongKong trip.
                </p>
              </div>
              <div className="international-blankdiv-2nd"></div>
              <div className="international-tour-price">
                <p>
                  ₹ <span>55,500.00</span>
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default InternationalComp;
