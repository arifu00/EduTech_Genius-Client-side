import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import Container from "../../../Components/Container/Container";
import { Rating } from "@mui/material";
const Feedback = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  //   console.log(feedbacks);
  useEffect(() => {
    fetch("Feedback.json")
      .then((res) => res.json())
      .then((data) => setFeedbacks(data));
  }, []);
  return (
    <div className="bg-[#DDF4DB] my-8">
      <Container>
        <div className="py-20 md:py-40">
          <div className="">
            <h5 className="font-lora font-semibold text-xl lg:text-4xl italic text-center text-[#FF2712]">
              Learners Tributes
            </h5>
            <h2 className="text-[#000000] text-3xl lg:text-7xl  text-center lg:text-right my-7 font-black">
              Our Students Words
            </h2>
          </div>
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={true}
            modules={[Autoplay, Pagination]}
            slidesPerView={1}
            className="mySwiper mb-12 text-center"
          >
            <div className="my-12">
              {feedbacks.map((feedback) => (
                <SwiperSlide key={feedback.id}>
                  <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="flex-1">
                      <img
                        className=" w-32 h-32 md:w-64 md:h-64 lg:w-96 lg:h-96 rounded-full"
                        src={feedback.image}
                        alt={feedback.name}
                      />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm md:text-base lg:text-xl font-bold text-[#000000]">
                        {feedback.description}
                      </p>
                      <h1 className="text-left font-lora text-lg md:text-left lg:text-3xl font-black my-4">
                        {feedback.name} <br /> - ({feedback.title})
                      </h1>
                      <div className="text-left text-3xl">
                        <Rating
                          size="large"
                          name="half-rating-read"
                          defaultValue={feedback.rating}
                          precision={0.1}
                          readOnly
                        />
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </div>
          </Swiper>
        </div>
      </Container>
    </div>
  );
};

export default Feedback;
