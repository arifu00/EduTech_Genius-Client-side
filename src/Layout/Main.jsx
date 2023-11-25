import { Outlet } from "react-router-dom";
import Nav from "../Pages/SharedStyle/Nav";
import Footer from "../Pages/SharedStyle/Footer";

const Main = () => {
  return (
    <div className="font-roboto">
      <Nav></Nav>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
