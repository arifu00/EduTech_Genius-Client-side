import { Button } from "@mui/material";
import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../Providers/AuthProviders";
import Swal from "sweetalert2";
const SocialLogin = () => {
  const { googleSignIn } = useContext(AuthContext);

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
