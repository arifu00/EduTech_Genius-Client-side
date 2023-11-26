import { Button } from "@mui/material";
import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../Providers/AuthProviders";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
const SocialLogin = () => {
  const { googleSignIn } = useContext(AuthContext);
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";
  console.log("location on state", location.state);

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((res) => {
        console.log(res.user);
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Login Successful",
          showConfirmButton: true,
          timer: 1200,
        });
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className="mt-4 ">
      <Button onClick={handleGoogleSignIn} variant="outlined">
        <div className="flex justify-center items-center gap-2 text-lg ">
          <FaGoogle></FaGoogle>
          Google
        </div>
      </Button>
    </div>
  );
};

export default SocialLogin;
