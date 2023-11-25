import { Link } from "react-router-dom";
import Container from "../../../Components/Container/Container";
import instructorImg from "../../../assets/Teacher/instructor.jpg";
const TeacherJoin = () => {
  return (
    <Container>
      <div className="flex flex-col md:flex-row items-center md:justify-between p-8 gap-12">
        <div className="mb-4 md:mb-0">
          <img
            src={instructorImg}
            alt="Join as a Teacher"
            className="max-w-full h-auto rounded-lg"
          />
        </div>

        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-xl md:text-3xl lg:text-4xl font-lora font-bold mb-4">
            Join Us as a Teacher
          </h2>
          <p className="text-gray-700 text-lg font-normal mb-4">
            Explore exciting opportunities to share your expertise and inspire
            students. Join our platform and start making a difference in
            education today.
          </p>
          <Link to="/teachOnEduTech">
          <button className="bg-black hover:bg-[#1291d0] text-white font-bold py-2 px-4 rounded">
            Start Teaching Today
          </button>
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default TeacherJoin;
