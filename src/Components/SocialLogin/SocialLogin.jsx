import { Button } from "@mui/material";
import { FaGoogle } from "react-icons/fa";
const SocialLogin = () => {
  return (
    <div className="mt-4 ">
      <Button variant="outlined">
        <div className="flex justify-center items-center gap-2 text-lg ">
          <FaGoogle></FaGoogle>
          Google
        </div>
      </Button>
    </div>
  );
};

export default SocialLogin;
