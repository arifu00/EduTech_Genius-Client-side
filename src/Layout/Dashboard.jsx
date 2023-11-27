import { FaChalkboardTeacher, FaHome, FaUsers } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import { MdOutlineMenuBook } from "react-icons/md";
import { GiTeacher } from "react-icons/gi";
import { CgProfile } from "react-icons/cg";
import Container from "../Components/Container/Container";
import logo from "../assets/banner/edutechLogo.jpeg";

const Dashboard = () => {
  const isAdmin = false;
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
                    to="/dashboard/adminHome"
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "pending"
                        : isActive
                        ? "text-[#EEFF25] flex gap-3 items-center"
                        : "flex gap-3 items-center"
                    }
                  >
                    <FaHome className="text-xl"></FaHome> Admin Home
                  </NavLink>
                </li>
                <li className="mt-6">
                  <NavLink
                    to="/dashboard/addItems"
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "pending"
                        : isActive
                        ? "text-[#EEFF25] flex gap-3 items-center"
                        : "flex gap-3 items-center"
                    }
                  >
                    {/* <FaUtensils className="text-xl"></FaUtensils>  */}
                    Add Items
                  </NavLink>
                </li>
                <li className="mt-6">
                  <NavLink
                    to="/dashboard/manageItems"
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "pending"
                        : isActive
                        ? "text-[#EEFF25] flex gap-3 items-center"
                        : "flex gap-3 items-center"
                    }
                  >
                    {/* <FaBars className="text-xl"></FaBars>  */}
                    Manage Items
                  </NavLink>
                </li>
                <li className="mt-6">
                  <NavLink
                    to="/dashboard/manageBookings"
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "pending"
                        : isActive
                        ? "text-[#fff] font-bold flex gap-3 items-center"
                        : "flex gap-3 items-center"
                    }
                  >
                    {/* <FaBook className="text-xl"></FaBook>  */}
                    Manage Bookings
                  </NavLink>
                </li>
                <li className="mt-6">
                  <NavLink
                    to="/dashboard/allUsers"
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "pending"
                        : isActive
                        ? "text-[#fff] font-bold flex gap-3 items-center"
                        : "flex gap-3 items-center"
                    }
                  >
                    <FaUsers className="text-xl"></FaUsers> All Users
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
