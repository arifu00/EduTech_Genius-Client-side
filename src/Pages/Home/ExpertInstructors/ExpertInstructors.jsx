import { useEffect, useState } from "react";
import Container from "../../../Components/Container/Container";

const ExpertInstructors = () => {
  const [instructors, setInstructors] = useState([]);
  console.log(instructors);
  useEffect(() => {
    fetch("ExpertInstructors.json")
      .then((res) => res.json())
      .then((data) => setInstructors(data));
  }, []);
  return (
    <div className="bg-[#fff] my-8">
      <Container>
        <div className="ml-8">
          <small className="text-[#2ECA7F] text-xs font-semibold">
            TEAM MEMBER--------
          </small>
          <h2 className="text-[#1A2D62] text-4xl font-black">
            Our Expert{" "}
            <span className="underline text-[#2ECA7F]">Instructors</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:grid-cols-4 mt-12">
          {instructors.map((instructor) => (
            <div key={instructor.id}>
              <div className="">
                <div className="">
                  <img
                    className="h-[300px] rounded-t-2xl"
                    src={instructor.img}
                    alt=""
                  />
                </div>
                <div className="bg-[#2ECA7F] text-center text-white py-4 px-8  rounded-b-xl space-y-2">
                  <h3 className="text-2xl font-black font-lora">
                    {instructor.name}
                  </h3>
                  <p className="italic text-base font-semibold">
                    {instructor.category}
                  </p>
                  <h5 className="font-lora text-lg">
                    Total Classes: {instructor.totalClasses}
                  </h5>
                  <h5 className="font-lora text-lg">
                    Followed Student: {instructor.totalClasses}
                  </h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default ExpertInstructors;
