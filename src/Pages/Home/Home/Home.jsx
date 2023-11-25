import { Helmet } from "react-helmet";
import Banner from "../Banner/Banner";
import Feedback from "../Feedback/Feedback";
import OurPartners from "../OurPartners/OurPartners";
import OurPopularClass from "../OurPopularClass/OurPopularClass";
import OurStatistics from "../OurStatistics/OurStatistics";
import TeacherJoin from "../TeacherJoin/TeacherJoin";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>EduTechGenius | Home</title>
      </Helmet>
      <Banner></Banner>
      <OurPopularClass></OurPopularClass>
      <OurStatistics></OurStatistics>
      <TeacherJoin></TeacherJoin>
      <OurPartners></OurPartners>
      <Feedback></Feedback>
    </div>
  );
};

export default Home;
