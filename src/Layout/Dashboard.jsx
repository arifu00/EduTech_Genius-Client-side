import { FaChalkboardTeacher, FaHome, FaUsers } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import { MdLibraryAdd, MdOutlineMenuBook } from "react-icons/md";
import { GiTeacher } from "react-icons/gi";
import { VscGitPullRequestGoToChanges } from "react-icons/vsc";
import { CgProfile } from "react-icons/cg";
import Container from "../Components/Container/Container";
import logo from "../assets/banner/edutechLogo.jpeg";
import useAdmin from "../hooks/useAdmin";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProviders";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const Dashboard = () => {
  const [isAdmin] = useAdmin();
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();
  const { data: dbuser = [] } = useQuery({
    queryKey: ["dbuser", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/user?email=${user.email}`);
      return res.data;
    },
  });
  // console.log();

  return (
    <Container>
      <div className="flex font-lora -mt-5 ">
        {/* DashBoard menu item */}
        <div className="w-72 min-h-screen bg-[#264653] text-[#fff]">
          <div className="px-9 pt-10 mb-12">
            <img src={logo} className="rounded-full w-20 h-20 mx-auto" alt="" />
            <h2 className="text-center text-2xl italic font-black mt-4">
              EduTech Genius
            </h2>
          </div>
          <ul className="px-9 text-base font-medium">
            {isAdmin ? (
              <>
                <li className="">
                  <NavLink
                    to="/dashboard/teacherRequest"
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "pending"
                        : isActive
                        ? "text-[#EEFF25] flex gap-3 items-center"
                        : "flex gap-3 items-center"
                    }
                  >
                    <VscGitPullRequestGoToChanges /> Teacher Request
                  </NavLink>
                </li>
                <li className="mt-6">
                  <NavLink
                    to="/dashboard/users"
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "pending"
                        : isActive
                        ? "text-[#EEFF25] flex gap-3 items-center"
                        : "flex gap-3 items-center"
                    }
                  >
                    <FaUsers className="text-xl"></FaUsers> Users
                  </NavLink>
                </li>
                <li className="mt-6">
                  <NavLink
                    to="/dashboard/allClasses"
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "pending"
                        : isActive
                        ? "text-[#EEFF25] flex gap-3 items-center"
                        : "flex gap-3 items-center"
                    }
                  >
                    <FaChalkboardTeacher />
                    All Classes
                  </NavLink>
                </li>
                <li className="mt-6">
                  <NavLink
                    to="/dashboard/profile"
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "pending"
                        : isActive
                        ? "text-[#EEFF25] flex gap-3 items-center"
                        : "flex gap-3 items-center"
                    }
                  >
                    <CgProfile />
                    Profile
                  </NavLink>
                </li>
              </>
            ) : dbuser[0]?.role === "Teacher" ? (
              <>
                <li className="">
                  <NavLink
                    to="/dashboard/addClass"
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "pending"
                        : isActive
                        ? "text-[#EEFF25] flex gap-3 items-center"
                        : "flex gap-3 items-center"
                    }
                  >
                    <MdLibraryAdd /> Add Class
                  </NavLink>
                </li>
                <li className="mt-6">
                  <NavLink
                    to="/dashboard/myClass"
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "pending"
                        : isActive
                        ? "text-[#EEFF25] flex gap-3 items-center"
                        : "flex gap-3 items-center"
                    }
                  >
                    <FaChalkboardTeacher /> My Class
                  </NavLink>
                </li>
                <li className="mt-6">
                  <NavLink
                    to="/dashboard/profile"
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "pending"
                        : isActive
                        ? "text-[#EEFF25] flex gap-3 items-center"
                        : "flex gap-3 items-center"
                    }
                  >
                    <CgProfile />
                    Profile
                  </NavLink>
                </li>
              </>
            ) : (
              <>
                <li className="mt-6">
                  <NavLink
                    to="/dashboard/enrollClass"
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "pending"
                        : isActive
                        ? "text-[#EEFF25] flex gap-3 items-center"
                        : "flex gap-3 items-center"
                    }
                  >
                    <FaChalkboardTeacher />
                    My Enroll Class
                  </NavLink>
                </li>
                <li className="mt-6">
                  <NavLink
                    to="/dashboard/profile"
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "pending"
                        : isActive
                        ? "text-[#EEFF25] flex gap-3 items-center"
                        : "flex gap-3 items-center"
                    }
                  >
                    <CgProfile />
                    Profile
                  </NavLink>
                </li>
              </>
            )}
            {/* shared nav links  */}
            <div className="mt-4">
              <div className="w-11/12 border-2 border-white mx-auto"></div>
            </div>{" "}
            <li className="mt-9">
              <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-[#EEFF25] flex gap-3 items-center"
                    : "flex gap-3 items-center"
                }
              >
                <FaHome className="text-xl"></FaHome> Home
              </NavLink>
            </li>
            <li className="mt-6">
              <NavLink
                to="/allClasses"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-[#fff] font-bold flex gap-3 items-center"
                    : "flex gap-3 items-center"
                }
              >
                <MdOutlineMenuBook />
                All Class
              </NavLink>
            </li>
            <li className="mt-6">
              <NavLink
                to="/teachOnEduTech"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-[#fff] font-bold flex gap-3 items-center"
                    : "flex gap-3 items-center"
                }
              >
                <GiTeacher />
                Tech On EduTech
              </NavLink>
            </li>
          </ul>
        </div>
        {/* DashBoard content  */}
        <div className="flex-1 bg-[#F6F6F6] ">
          <Outlet></Outlet>
        </div>
      </div>
    </Container>
  );
};

export default Dashboard;
