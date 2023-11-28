import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { Button } from "@material-tailwind/react";
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
    <div className="mt-4 flex justify-center">
      <Button
        onClick={handleGoogleSignIn}
        size="lg"
        variant="outlined"
        color="blue-gray"
        className="flex items-center  gap-3"
      >
        <img
          src="https://docs.material-tailwind.com/icons/google.svg"
          alt="metamask"
          className="h-6 w-6"
        />
        Continue with Google
      </Button>
    </div>
  );
};

export default SocialLogin;
