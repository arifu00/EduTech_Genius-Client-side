import Banner from "../Banner/Banner";
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
        </div>
    );
};

export default Home;