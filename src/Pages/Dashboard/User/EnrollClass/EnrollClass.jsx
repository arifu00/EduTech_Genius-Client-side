import { useQuery } from "@tanstack/react-query";
import Container from "../../../../Components/Container/Container";
import useAxiosPublic from "../../../../hooks/useAxiosPublic";
import EnrollCard from "./EnrollCard";
import SkeletonEffect from "../../../../Components/SkeletonEffect/SkeletonEffect";

const EnrollClass = () => {
  const axiosPublic = useAxiosPublic();
  const { data: enrollClass = [], isLoading } = useQuery({
    queryKey: ["enrollClass"],
    queryFn: async () => {
      const res = await axiosPublic.get("/enrollClass");
      return res.data;
    },
  });
  console.log(enrollClass, isLoading);
  if (isLoading) {
   <SkeletonEffect></SkeletonEffect>
  }
  return (
    <Container>
      <h2 className="md:p-10 font-roboto font-black text-3xl">
        My Enroll Class
      </h2>
      <div className="lg:h-screen flex items-center md:p-10 -mt-12">
        <div className="">
          {enrollClass.map((enrollCard) => (
            <EnrollCard
              key={enrollCard._id}
              enrollCard={enrollCard}
            ></EnrollCard>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default EnrollClass;
