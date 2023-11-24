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
import Container from "../../../Components/Container/Container";

const Banner = () => {
  const bannerBtn = (
    <>
      <button className="text-sm lg:text-lg font-medium md:font-semibold px-1 md:px-4 py-2 md:py-3 rounded-md bg-[#1a759f] hover:bg-[#50C1EC] mr-5">
        Explore More
      </button>
      <Link to="/addFood">
        <button className="text-sm lg:text-lg font-medium md:font-semibold px-1 md:px-4 py-2 md:py-3 rounded-md bg-transparent outline-white outline hover:bg-[#FF3811] hover:outline-0 hover:text-black">
          Enroll Now
        </button>
      </Link>
    </>
  );
  return (
    <Container className="">
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
                <h2 className="text-lg md:text-2xl lg:text-5xl font-bold">
                  WE ENSURE BETTER EDUCATION FOR A BETTER WORLD
                </h2>
                <p className="text-xs lg:text-lg font-normal my-2">
                  In the history of modern astronomy, there is probably no one
                  greater leap forward than the building and launch of the space
                  telescope known as the Hubble.
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
                  Future-ready Curriculum
                </h2>
                <p className="text-xs lg:text-lg font-normal my-2">
                  Our curriculum is designed to prepare students for the
                  challenges and opportunities of the rapidly changing future.
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
                  Social Impact Initiatives
                </h2>
                <p className="text-xs lg:text-lg font-normal my-2">
                  Join us in initiatives that extend beyond education,
                  contributing to positive social change on a global scale.
                </p>
                {bannerBtn}
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </Container>
  );
};

export default Banner;
