import Banner from "../Banner/Banner";
import OurPartners from "../OurPartners/OurPartners";
import OurPopularClass from "../OurPopularClass/OurPopularClass";

const Home = () => {
    return (
        <div>
           <Banner></Banner> 
           <OurPopularClass></OurPopularClass>
           <OurPartners></OurPartners>
        </div>
    );
};

export default Home;