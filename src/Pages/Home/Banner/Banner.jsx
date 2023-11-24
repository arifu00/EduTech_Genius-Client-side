// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";

import banner1 from "../../../assets/banner/banner1.jpg";
import banner2 from "../../../assets/banner/banner2.jpg";
import banner3 from "../../../assets/banner/banner3.jpg";
import { Link } from "react-router-dom";

const Banner = () => {
  const bannerBtn = (
    <>
      <button className="text-sm lg:text-lg font-medium md:font-semibold px-1 md:px-4 py-2 md:py-3 rounded-md bg-[#FF3811] hover:bg-[#50C1EC] mr-5">
        Explore More
      </button>
      <Link to="/addFood">
        <button className="text-sm lg:text-lg font-medium md:font-semibold px-1 md:px-4 py-2 md:py-3 rounded-md bg-transparent outline-white outline hover:bg-[#FF3811] hover:outline-0 hover:text-black">
          Donate Food
        </button>
      </Link>
    </>
  );
  return (
    <div className="container mx-auto px-2 md:px-5 my-5">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper "
      >
        {/* slider-1  */}
        <SwiperSlide>
          <div className=" lg:h-[550px] flex justify-center">
            <img
              className="w-full lg:object-cover rounded-lg"
              src={banner1}
              alt=""
            />
            <div className="absolute flex items-center h-full left-0 top-0 rounded-xl bg-gradient-to-r from-[#151515] to-rgba(21, 21, 21, 0.00)  ">
              <div className="text-white md:w-1/2 py-4 pl-8 md:space-y-7 md:pl-20">
                <h2 className="text-xl md:text-4xl lg:text-6xl font-bold">
                WE ENSURE BETTER EDUCATION FOR A BETTER WORLD
                </h2>
                <p className="text-xs lg:text-lg font-normal my-2">
                  Join our food share initiative to foster a sense of community
                  and make a positive impact on local hunger.
                </p>
                {bannerBtn}
              </div>
            </div>
          </div>
        </SwiperSlide>
        {/* slider 2 */}
        <SwiperSlide>
          <div className="lg:h-[550px] flex justify-center">
            <img className="w-full rounded-lg" src={banner2} alt="" />
            <div className="absolute flex items-center h-full left-0 top-0 rounded-xl bg-gradient-to-r from-[#151515] to-rgba(21, 21, 21, 0.00)  ">
              <div className="text-white md:w-1/2 py-4 pl-8 md:space-y-7 md:pl-20">
                <h2 className="text-xl md:text-4xl lg:text-6xl font-bold">
                  Food for All, All for Food!
                </h2>
                <p className="text-xs lg:text-lg font-normal my-2">
                  Our food donation program is a lifeline for those in need,
                  ensuring no one goes to bed hungry.
                </p>
                {bannerBtn}
              </div>
            </div>
          </div>
        </SwiperSlide>
        {/* slider 3 */}
        <SwiperSlide>
          <div className="lg:h-[550px] flex justify-center">
            <img className="w-full  rounded-lg" src={banner3} alt="" />
            <div className="absolute flex items-center h-full left-0 top-0 rounded-xl bg-gradient-to-r from-[#151515] to-rgba(21, 21, 21, 0.00)  ">
              <div className="text-white md:w-1/2 py-4 pl-8 md:space-y-7 md:pl-20">
                <h2 className="text-xl md:text-4xl lg:text-6xl font-bold">
                  Help Us Fight Hunger in Your Community 🤝
                </h2>
                <p className="text-xs lg:text-lg font-normal my-2">
                  Our food donation program is a beacon of hope for those in
                  need.
                </p>
                {bannerBtn}
              </div>
            </div>
          </div>
        </SwiperSlide>
       
      </Swiper>
    </div>
  );
};

export default Banner;
