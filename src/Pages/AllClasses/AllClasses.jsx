import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import ClassCard from "./ClassCard";
import Container from "../../Components/Container/Container";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import SkeletonEffect from "../../Components/SkeletonEffect/SkeletonEffect";
// import ClassCard from "./ClassCard";

const AllClasses = () => {
  const axiosPublic = useAxiosPublic();
  // const [allClasses, setAllClasses] = useState([]);
  // console.log(allClasses);
  // useEffect(() => {
  //   fetch("AllClass.json")
  //     .then((res) => res.json())
  //     .then((data) => setAllClasses(data));
  // }, []);
  const { data: allClasses = [], isLoading } = useQuery({
    queryKey: ["allClasses"],
    queryFn: async () => {
      const res = await axiosPublic.get("/allClasses");
      return res.data;
    },
  });
  console.log(allClasses, isLoading);
  if (isLoading) {
    return <div className="my-20 space-y-8">
        <SectionTitle tittle={"Our All Classes"}></SectionTitle>
      <SkeletonEffect></SkeletonEffect>
    </div>;
  }
  return (
    <div>
      <Helmet>
        <title>EduTechGenius | All Classes</title>
      </Helmet>
      <div className="my-20">
        <Container>
          <SectionTitle tittle={"Our All Classes"}></SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-7 mt-8">
            {allClasses.map((allClass) => (
              <ClassCard key={allClass.id} allClass={allClass}></ClassCard>
            ))}
          </div>
        </Container>
      </div>
    </div>
  );
};

export default AllClasses;
