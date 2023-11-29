import { useQuery } from "@tanstack/react-query";
import Container from "../../../Components/Container/Container";
import ourStatistics from "../../../assets/Statistics/OurStatisticsjpg.jpg";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
const OurStatistics = () => {
  const axiosPublic = useAxiosPublic();
  const { data: allClasses = [],  } = useQuery({
    queryKey: ["allClasses"],
    queryFn: async () => {
      const res = await axiosPublic.get(
        "/allClasses"
      );
      return res.data;
    },
  });
  const { data: user = [],  } = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const res = await axiosPublic.get(
        "/user"
      );
      return res.data;
    },
  });
  console.log(user)
  return (
    <Container>
      <div className="bg-[#E8FAFF] py-20 md:py-40 px-8 rounded-xl my-12">
        <div className="flex flex-col-reverse lg:flex-row justify-between items-center gap-8">
          <div className="lg:w-2/3">
            <div className="">
              <h6 className="font-lora font-semibold text-xl lg:text-4xl italic text-left text-[#FF2712]">
                Why Ours
              </h6>
              <h2 className="text-[#000000] text-2xl lg:text-5xl text-left my-7 font-black">
                Our Best Achievements
              </h2>
              <p className="text-base md:text-lg font-normal">
                Ours - Unveiling Excellence encapsulates our journey of
                achieving unparalleled success and setting new benchmarks in
                various domains, driven by innovation, dedication, and a
                commitment to excellence.
              </p>
            </div>

            <div className="flex flex-wrap mt-12 text-center gap-10 justify-center">
              <div className="">
                <h1 className="font-black text-xl md:text-3xl mb-2">{user?.length}</h1>
                <h3 className="font-semibold text-lg md:text-2xl">
                  Total User
                </h3>
              </div>
              <div className="">
                <h1 className="font-black text-xl md:text-3xl mb-2">{allClasses?.length}</h1>
                <h3 className="font-semibold text-lg md:text-2xl">
                  Total Classes
                </h3>
              </div>
              <div className="">
                <h1 className="font-black text-xl md:text-3xl mb-2">30</h1>
                <h3 className="font-semibold text-lg md:text-2xl">
                  Enrollment Student
                </h3>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 ">
            <img className="" src={ourStatistics} alt="" />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default OurStatistics;
