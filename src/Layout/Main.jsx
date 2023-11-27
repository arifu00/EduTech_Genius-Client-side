import { Outlet } from "react-router-dom";
import Nav from "../Pages/SharedStyle/Nav";
import Footer from "../Pages/SharedStyle/Footer";

const Main = () => {
  return (
    <div className="font-roboto">
      <div className="sticky top-0 z-50 ">
        <Nav></Nav>
      </div>
      <div className="z-40">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Main;
