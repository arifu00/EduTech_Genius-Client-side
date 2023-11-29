import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProviders";
import useAdmin from "../hooks/useAdmin";
import { Navigate, useLocation } from "react-router-dom";
import loadingImg from "../assets/loading/loading.gif";

const AdminRoute = ({ children }) => {
  const { logOut, loading } = useContext(AuthContext);
  // console.log(user, loading);
  const [isAdmin, isAdminLoading] = useAdmin();
  // console.log(isAdmin, isAdminLoading);
  const location = useLocation();
  const handleLogOut = () => {
    logOut()
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  if (loading || isAdminLoading) {
    return <img src={loadingImg} alt="" />;
  }
  if (isAdmin) {
    return children;
  }
  return (
    <>
      {handleLogOut()}
      <Navigate state={location?.pathname} replace to="/signIn"></Navigate>{" "}
    </>
  );
};

export default AdminRoute;
