import { useQuery } from "@tanstack/react-query";
import Container from "../../../../Components/Container/Container";
import EnrollCard from "./EnrollCard";
import SkeletonEffect from "../../../../Components/SkeletonEffect/SkeletonEffect";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../../../../Providers/AuthProviders";

const EnrollClass = () => {
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();
  const { data: enrollClass = [], isLoading } = useQuery({
    queryKey: ["enrollClass", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/enrollClass?email=${user.email}`);
      return res.data;
    },
  });
  console.log(enrollClass, isLoading);
  if (isLoading) {
    <SkeletonEffect></SkeletonEffect>;
  }
  return (
    <Container>
      <h2 className="md:px-10 font-roboto font-black text-3xl mt-12 text-black">
        My Enroll Class
      </h2>
      <div className=" flex items-center md:px-10 md:py-4 ">
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
