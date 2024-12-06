// GSAP Animation
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

// Import swiper React component
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../CSS/swiperjscomp.css";

// import required modules
import { Parallax, Pagination, Navigation, Autoplay } from "swiper/modules";

const SwiperJsComp = () => {
  useGSAP(() => {
    gsap.from(".gsapAnimation", {
      y: 1000,
      duration: 2,
      opacity: 0,
      stagger: 0.5,
    });
  });
  return (
    <>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        speed={600}
        parallax={{
          clickable: true,
        }}
        navigation={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        modules={[Parallax, Pagination, Navigation, Autoplay]}
        className="firstSwiper"
      >
        <SwiperSlide>
          <div
            className="parallax-bg"
            slot="container-start"
            style={{
              backgroundImage: "url(tokyo.jpg)",
            }}
            data-swiper-parallax="-23%"
          >
            <div className="transparen-box">
              <div className="title" data-swiper-parallax="-300">
                <p className="gsapAnimation">
                  Tokyo: The Heart of Japan's Vibrance
                </p>
              </div>
              <div className="subtitle" data-swiper-parallax="-200">
                <p className="gsapAnimation">Where Tradition Meets Modernity</p>
              </div>
              <div className="text" data-swiper-parallax="-100">
                <p className="gsapAnimation">
                  Tokyo, the bustling capital of Japan, is a city that perfectly
                  blends ancient traditions with cutting-edge innovation. From
                  the serene Meiji Shrine and historic Asakusa district to the
                  vibrant streets of Shibuya and Akihabara, Tokyo offers a
                  kaleidoscope of experiences for every traveler. Known for its
                  exquisite cuisine, iconic cherry blossoms, and neon-lit
                  skyline, this metropolis is a hub of culture, technology, and
                  artistry. Whether you're exploring its rich history or diving
                  into its futuristic attractions, Tokyo is a city that never
                  ceases to amaze.
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="parallax-bg"
            slot="container-start"
            style={{
              backgroundImage: "url(egypt.png)",
            }}
            data-swiper-parallax="-23%"
          >
            <div className="transparen-box">
              <div className="title" data-swiper-parallax="-300">
                <p>Unveil the Mysteries of Egypt's Cities</p>
              </div>
              <div className="subtitle" data-swiper-parallax="-200">
                <p>Where Ancient Wonders Meet Modern Vibrance</p>
              </div>
              <div className="text" data-swiper-parallax="-100">
                <p>
                  Egypt is a land of captivating contrasts, where ancient
                  history merges seamlessly with modern urban life. Cairo, the
                  bustling capital, is home to the majestic Pyramids of Giza,
                  the Sphinx, and the Egyptian Museum, offering a glimpse into
                  the wonders of ancient civilization. Alexandria, a coastal
                  gem, is rich in history with its ancient library and
                  Mediterranean views. Luxor, often referred to as the world’s
                  greatest open-air museum, showcases the grandeur of ancient
                  temples and tombs. Egypt’s cities are a perfect blend of the
                  old and the new, where history comes alive amid the energy of
                  contemporary life, making it a must-visit destination for any
                  traveler.
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="parallax-bg"
            slot="container-start"
            style={{
              backgroundImage: "url(malaysia.jpg)",
            }}
            data-swiper-parallax="-23%"
          >
            <div className="transparen-box">
              <div className="title" data-swiper-parallax="-300">
                <p>Discover Malaysia’s Vibrant Cities</p>
              </div>
              <div className="subtitle" data-swiper-parallax="-200">
                <p>A Journey Through Urban Wonders and Rich Heritage</p>
              </div>
              <div className="text" data-swiper-parallax="-100">
                <p>
                  Malaysia's cities are a testament to its rich history and
                  modern development. Kuala Lumpur, the capital, is a dazzling
                  metropolis with towering skyscrapers, including the iconic
                  Petronas Towers, and a thriving cultural scene. Penang offers
                  a perfect blend of colonial charm and modernity, with its
                  UNESCO-listed George Town known for its street art, temples,
                  and tantalizing food. Meanwhile, Johor Bahru boasts exciting
                  shopping malls and theme parks, attracting both locals and
                  tourists. These cities are the heart of Malaysia’s dynamic
                  growth, offering an exciting mix of tradition, technology, and
                  natural beauty for travelers to explore.
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="parallax-bg"
            slot="container-start"
            style={{
              backgroundImage: "url(thailand.jpg)",
            }}
            data-swiper-parallax="-23%"
          >
            <div className="transparen-box">
              <div className="title" data-swiper-parallax="-300">
                <p>Experience the Magic of Thailand</p>
              </div>
              <div className="subtitle" data-swiper-parallax="-200">
                <p>
                  A Land of Vibrant Culture, Scenic Beauty, and Exotic
                  Adventures
                </p>
              </div>
              <div className="text" data-swiper-parallax="-100">
                <p>
                  Thailand is a country that offers a perfect blend of
                  breathtaking landscapes, rich culture, and exotic adventures.
                  From the bustling streets of Bangkok, with its vibrant
                  markets, ornate temples, and dynamic nightlife, to the
                  tranquil islands like Phuket and Koh Samui, Thailand offers
                  something for every traveler. The country is famous for its
                  golden beaches, lush jungles, and crystal-clear waters, ideal
                  for adventure seekers and nature lovers. Thailand’s rich
                  cultural heritage is reflected in its festivals, delicious
                  cuisine, and iconic landmarks like the Grand Palace and Wat
                  Pho. Whether you're seeking relaxation, adventure, or a deep
                  dive into tradition, Thailand never fails to captivate.
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="parallax-bg"
            slot="container-start"
            style={{
              backgroundImage: "url(dubai.jpg)",
            }}
            data-swiper-parallax="-23%"
          >
            <div className="transparen-box">
              <div className="title" data-swiper-parallax="-300">
                <p>Discover the Glitz and Glamour of Dubai</p>
              </div>
              <div className="subtitle" data-swiper-parallax="-200">
                <p>Where Luxury Meets Innovation in the Heart of the Desert</p>
              </div>
              <div className="text" data-swiper-parallax="-100">
                <p>
                  Dubai is a dazzling fusion of futuristic architecture, luxury,
                  and cultural heritage. Known for its iconic skyline featuring
                  the Burj Khalifa, the world’s tallest building, and the Palm
                  Jumeirah, an artificial island shaped like a palm tree, Dubai
                  is a city of superlatives. Visitors can shop in world-class
                  malls, explore the vibrant souks, and enjoy thrilling
                  experiences like indoor skiing and desert safaris. Dubai is
                  also a hub for world-class dining, art, and entertainment.
                  Whether it's admiring the view from the Burj Khalifa, relaxing
                  on pristine beaches, or experiencing its rich Arabian culture,
                  Dubai promises an unforgettable experience at the crossroads
                  of tradition and modernity.
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default SwiperJsComp;
