import { Card, CardHeader, CardBody } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import Container from "../../../Components/Container/Container";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
const OurPopularClass = () => {
  const axiosPublic = useAxiosPublic();
  const [slidesPerView, setSlidesPerView] = useState(1);
  // const [courses, setCourses] = useState([]);
  // //   console.log(course);
  // useEffect(() => {
  //   fetch("PopularCorses.json")
  //     .then((res) => res.json())
  //     .then((data) => setCourses(data));
  // }, []);

  const { data: popularClass = [] } = useQuery({
    queryKey: ["allClasses"],
    queryFn: async () => {
      const res = await axiosPublic.get(
        "/allClasses?sortField=total_enrollment&&sortOrder=desc"
      );
      return res.data;
    },
  });
  // console.log(popularClass, isLoading);

  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth;
      if (windowWidth >= 1200) {
        setSlidesPerView(3);
      } else if (windowWidth >= 767) {
        setSlidesPerView(2);
      } else {
        setSlidesPerView(1);
      }
    };

    // Initial setup
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Clean up the event listener when the component is unmounted
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <Container>
      <div className="my-12">
        <div className="mt-20">
          <SectionTitle
            tittle={"Our Popular Courses"}
            subTitle={`Popular courses provide valuable knowledge and skills 
             essential for personal and professional growth.`}
          ></SectionTitle>
        </div>
        <div className="my-14">
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            loop={true}
            autoplay={{
              delay: 1500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            slidesPerView={slidesPerView}
            className="mySwiper mb-12 text-center"
          >
            <div className="my-12">
              {popularClass.slice(0, 6).map((course) => (
                <SwiperSlide key={course.id}>
                  <Card className="h-[450px] mb-4">
                    <CardHeader floated={false} className="h-60">
                      <img src={course.image} alt={course.course_title} />
                    </CardHeader>
                    <CardBody className="text-center space-y-2 mt-4">
                      <h4 className=" font-lora font-bold text-2xl">
                        {course.course_title}
                      </h4>
                      <h6 className="font-bold font-lora text-xl italic">
                        Category: {course.category}
                      </h6>
                      <h6 className="font-bold font-lora text-xl italic">
                        Total Enrollment: {course.total_enrollment}
                      </h6>
                      <p className="">
                        {course.shortDescription}
                      </p>
                    </CardBody>
                  </Card>
                </SwiperSlide>
              ))}
            </div>
          </Swiper>
        </div>
      </div>
    </Container>
  );
};

export default OurPopularClass;
