import Container from "../../../Components/Container/Container";
import { FaBook, FaUsers } from "react-icons/fa6";
import statisticsImg from "../../../assets/Statistics/Statistics.jpg";
import ourStatistics from "../../../assets/Statistics/ourstatistics.jpg";
const OurStatistics = () => {
  return (
    <div>
      <div
        className="relative bg-fixed bg-cover bg-center "
        style={{ backgroundImage: `url(${statisticsImg})` }}
      >
        <div className="bg-opacity-100 absolute inset-0 bg-[#00000040]"></div>
        <div className="relative z-10 pb-20">
          <Container>
            <div className="py-20">
              <h2 className="text-center font-lora text-4xl italic text-white hover:underline transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 uppercase">
                Our ACHIEVEMENTS
              </h2>
            </div>
            {/* users / enroll change last  */}

            <div className="text-center flex justify-between items-center gap-4 ">
              <div className="  p-16 font-lora italic text-[#fff] text-4xl font-medium space-y-6">
                <div className="flex justify-center items-center">
                  <FaUsers className="text-7xl" />
                </div>
                <h3 className="">10</h3>
                <h4 className="">Total Users </h4>
              </div>
              <div className=" p-16 font-lora italic text-[#fff] text-4xl font-medium space-y-6">
                <div className="flex justify-center items-center">
                  <FaBook className="text-7xl"></FaBook>
                </div>
                <h3 className="">30</h3>
                <h4 className="">Total Classes</h4>
              </div>
              <div className=" p-16  font-lora italic text-[#fff] text-4xl font-medium space-y-6">
                <div className="flex justify-center items-center">
                  <FaUsers className="text-7xl" />
                </div>
                <h3 className="">50</h3>
                <h4 className="">STUDENTS ENROLLED</h4>
              </div>
            </div>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default OurStatistics;
