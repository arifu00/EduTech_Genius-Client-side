import Banner from "../Banner/Banner";
import Feedback from "../Feedback/Feedback";
import OurPartners from "../OurPartners/OurPartners";
import OurPopularClass from "../OurPopularClass/OurPopularClass";
import OurStatistics from "../OurStatistics/OurStatistics";

const Home = () => {
    return (
        <div>
           <Banner></Banner> 
           <OurPopularClass></OurPopularClass>
           <OurStatistics></OurStatistics>
           <OurPartners></OurPartners>
           <Feedback></Feedback>
        </div>
    );
};

export default Home;