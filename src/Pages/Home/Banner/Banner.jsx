/* eslint-disable react/no-unescaped-entities */
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./styles.css";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import image1 from "../../../assets/images/image1.png";
import image2 from "../../../assets/images/image2.png";
import image3 from "../../../assets/images/image3.png";
import image4 from "../../../assets/images/image4.png";
import image5 from "../../../assets/images/image5.png";

const Banner = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper">
        {/* 1 */}
        <SwiperSlide>
          <div
          className="hero min-h-screen"
          style={{
            backgroundImage:
              `url(${image1})`,
          }}>
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="">
              <h1 className="mb-5 text-6xl font-Rancho bg-gradient-to-t from-[#FFA828] to-[#FF4804] text-transparent bg-clip-text">Your Ultimate Guide to Unforgettable Travel Experiences</h1>
              <p className="mb-5 w-[650px] mx-auto text-base">
              Immerse yourself in a world of wanderlust as we unveil hidden gems, share expert travel tips, and curate extraordinary itineraries to ensure each adventure is nothing short of extraordinary.
              </p>
            </div>
          </div>
        </div>
        </SwiperSlide>
        {/* 2 */}
        <SwiperSlide>
          <div
          className="hero min-h-screen  "
          style={{
            backgroundImage:
              `url(${image2})`,
          }}>
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="">
              <h1 className="mb-5 text-6xl font-Rancho bg-gradient-to-t from-[#FFA828] to-[#FF4804] text-transparent bg-clip-text">A Tourist's Handbook for Memorable Journeys</h1>
              <p className="mb-5 w-[650px] mx-auto text-base">
              This handbook is your passport to crafting unforgettable travel experiences. Packed with insider tips, cultural insights, and expert recommendations, it's your trusted companion for navigating the world's most captivating destinations.
              </p>
            </div>
          </div>
        </div>
        </SwiperSlide>
        {/* 3 */}
        <SwiperSlide>
          <div
          className="hero min-h-screen"
          style={{
            backgroundImage:
              `url(${image3})`,
          }}>
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="">
              <h1 className="mb-5 text-6xl font-Rancho bg-gradient-to-t from-[#FFA828] to-[#FF4804] text-transparent bg-clip-text">The Quintessential Tourist's Companion</h1>
              <p className="mb-5 w-[650px] mx-auto text-base">
              This comprehensive guide is meticulously crafted to be your go-to resource for navigating new destinations with confidence and excitement. Uncover the essence of each locale with curated itineraries, insider tips, and cultural insights.
              </p>
            </div>
          </div>
        </div>
        </SwiperSlide>
        {/* 4 */}
        <SwiperSlide>
          <div
          className="hero min-h-screen  "
          style={{
            backgroundImage:
              `url(${image4})`,
          }}>
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="">
              <h1 className="mb-5 text-6xl font-Rancho bg-gradient-to-t from-[#FFA828] to-[#FF4804] text-transparent bg-clip-text">Unveiling Hidden Gems in Top Tourist Hotspots</h1>
              <p className="mb-5 w-[650px] mx-auto text-base">
              This guide is your key to going beyond the surface and discovering the lesser-known treasures that make each hotspot truly unique. From charming local haunts to hidden cultural gems, we delve into the heart of popular destinations to reveal a side often missed by the average tourist.
              </p>
            </div>
          </div>
        </div>
        </SwiperSlide>
        {/* 5 */}
        <SwiperSlide>
          <div
          className="hero min-h-screen  "
          style={{
            backgroundImage:
              `url(${image5})`,
          }}>
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="">
              <h1 className="mb-5 text-6xl font-Rancho bg-gradient-to-t from-[#FFA828] to-[#FF4804] text-transparent bg-clip-text">Navigating the Globe with our Tourist Treasure Trove</h1>
              <p className="mb-5 w-[650px] mx-auto text-base">
              This online haven is your gateway to curated travel experiences, insider insights, and a wealth of tips to transform your journeys into extraordinary memories. Explore the world's wonders with confidence as our treasure trove of information guides.
              </p>
            </div>
          </div>
        </div>
        </SwiperSlide>
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </div>
  );
};

export default Banner;
