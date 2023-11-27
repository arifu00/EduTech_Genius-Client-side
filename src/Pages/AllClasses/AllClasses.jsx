import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import ClassCard from "./ClassCard";
import Container from "../../Components/Container/Container";
// import ClassCard from "./ClassCard";

const AllClasses = () => {
  const [allClasses, setAllClasses] = useState([]);
  // console.log(allClasses);
  useEffect(() => {
    fetch("AllClass.json")
      .then((res) => res.json())
      .then((data) => setAllClasses(data));
  }, []);
  return (
    <div>
      <Helmet>
        <title>EduTechGenius | All Classes</title>
      </Helmet>
      <div className="my-20">
        <Container>
          <SectionTitle tittle={"Our All Classes"}></SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-7">
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
