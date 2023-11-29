import { useContext } from "react";
import Container from "../../../Components/Container/Container";
import { AuthContext } from "../../../Providers/AuthProviders";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const Profile = () => {
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();
  const { data: dbuser = [] } = useQuery({
    queryKey: ["dbuser", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/user?email=${user.email}`);
      return res.data;
    },
  });
  // console.log(dbuser[0]?.role, isLoading);
  return (
    <div>
      <Container>
        <div className="bg-[#fff] w-11/12 mx-auto font-roboto h-screen md:p-10">
          <h2 className="text-3xl ml-2 font-bold">My Profile</h2>
          <div className="mt-10 flex gap-10 items-center ">
            <div className="">
              <img
                className="w-40 h-40 rounded-full"
                src={
                  user?.photoURL
                    ? user.photoURL
                    : "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                }
                alt=""
              />
            </div>
            <div className="">
              {/* name  */}
              <div className="">
                <h6 className="">
                  <small className="font-bold text-base">Name:</small>
                </h6>
                <h2 className="mt-1 font-lora font-black text-xl">
                  {user?.displayName}
                </h2>
              </div>
              {/* email  */}
              <div className="mt-5">
                <h6 className="">
                  <small className="font-bold text-base">Email:</small>
                </h6>
                <h2 className="mt-1 font-lora font-black text-xl">
                  {user?.email}
                </h2>
              </div>
              {/* Role  */}
              <div className="mt-5">
                <h6 className="">
                  <small className="font-bold text-base">Profile Role:</small>
                </h6>
                <h2 className="mt-1 font-lora font-black text-xl">
                  {dbuser[0]?.role || 'Student'}
                </h2>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Profile;
