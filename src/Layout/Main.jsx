import { Outlet } from "react-router-dom";
import Nav from "../Pages/SharedStyle/Nav";

const Main = () => {
    return (
        <div className="">
            <Nav></Nav>
        <Outlet></Outlet>
        </div>
    );
};

export default Main;