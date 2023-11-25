import { Typography } from "@material-tailwind/react";
import Container from "../../Components/Container/Container";
import { Link, NavLink } from "react-router-dom";
import logo from "../../../public/edutechLogo.jpeg";

const Footer = () => {
  const navList = (
    <ul className="mt-2 mb-4 flex flex-col font-medium text-base gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <li className="p-1 hover:text-lg hover:underline hover:text-[#003566] ">
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-[#003566]" : ""
          }
        >
          Home
        </NavLink>
      </li>
      <li className="p-1 hover:text-lg hover:underline hover:text-[#003566] ">
        <NavLink
          to="/allClasses"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-[#003566]" : ""
          }
        >
          All Classes
        </NavLink>
      </li>
      <li className="p-1 hover:text-lg hover:underline hover:text-[#003566] ">
        <NavLink
          to="/teachOnEdutech"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-[#003566]" : ""
          }
        >
          Teach on EduTech
        </NavLink>
      </li>
    </ul>
  );
  return (
    <div>
      <footer className="w-full bg-[#edf2fb] p-8">
        <Container>
          <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 bg-[#edf2fb] text-center md:justify-between">
            <Link to="/">
              <div className="flex items-center gap-4">
                <img className="rounded-full w-16 h-16" src={logo} alt="" />
                <Typography
                  as="p"
                  className="text-[#1A759F] hover:underline cursor-pointer py-1.5 font-bold text-2xl "
                >
                  Edu<span className="text-black">Tech</span>Genius
                </Typography>
              </div>
            </Link>
            <div className="flex flex-wrap items-center gap-y-2 gap-x-8">
              {navList}
            </div>
          </div>
          <hr className="my-8 border-blue-gray-50" />
          <p className="text-center font-lora text-xl font-bold">
            Copyright © {new Date().getFullYear()} EduTech_Genius. All rights
            reserved.
          </p>
        </Container>
      </footer>
    </div>
  );
};

export default Footer;
