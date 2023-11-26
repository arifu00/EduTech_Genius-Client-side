import { Helmet } from "react-helmet";
import Container from "../../Components/Container/Container";
import { NavLink } from "react-router-dom";
import {
  Button,
  Card,
  Checkbox,
  Input,
  Typography,
} from "@material-tailwind/react";

import registerImg from "../../assets/Register/register.gif";
import { useForm } from "react-hook-form";
import SocialLogin from "../../Components/SocialLogin/SocialLogin";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import { updateProfile } from "firebase/auth";
import auth from "../../firebase/firebase.config";
import Swal from "sweetalert2";

const Register = () => {
  const { createUser } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const name = data.name;
    const email = data.email;
    const password = data.password;
    const photo = data.photo;
    console.log(name, email, password, photo);

    createUser(email, password)
      .then((res) => {
        const user = res.user;
        console.log(user);
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Register Successful",
          showConfirmButton: true,
          timer: 1200,
        });
        updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: photo,
        })
          .then(() => {
            // User information updated successfully
            console.log("User created with name and photo:", user);
          })
          .catch((error) => {
            console.error("Error updating user information:", error.message);
          });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div className="my-20">
      <Helmet>
        <title>EduTechGenius | Register</title>
      </Helmet>

      <Container>
        <div className="md:flex justify-center gap-8">
          <div className="">
            <img className="h-full object-cover" src={registerImg} alt="" />
          </div>
          <Card
            color="transparent"
            shadow={false}
            className="border p-10 shadow-xl border-blue-gray-200 "
          >
            <Typography
              variant="h4"
              className="text-center text-2xl font-black"
              color="blue-gray"
            >
              Register
            </Typography>

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
            >
              <div className="mb-1 flex flex-col gap-6">
                <Typography variant="h6" color="blue-gray" className="-mb-3">
                  Your Name
                </Typography>
                <Input
                  size="lg"
                  name="name"
                  {...register("name", { required: true })}
                  placeholder="Your Name"
                  className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                />
                {errors.name?.type === "required" && (
                  <p className="text-red-600">Name is required</p>
                )}
                <Typography variant="h6" color="blue-gray" className="-mb-3">
                  Your Email
                </Typography>
                <Input
                  size="lg"
                  name="email"
                  {...register("email", { required: true })}
                  placeholder="name@mail.com"
                  className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                />
                {errors.email?.type === "required" && (
                  <p className="text-red-600">Email is required</p>
                )}
                <Typography variant="h6" color="blue-gray" className="-mb-3">
                  Password
                </Typography>
                <Input
                  type="password"
                  name="password"
                  size="lg"
                  {...register("password", { required: true })}
                  placeholder="********"
                  className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                />
                {errors.password?.type === "required" && (
                  <p className="text-red-600">Password is required</p>
                )}
                <Typography variant="h6" color="blue-gray" className="-mb-3">
                  Upload Photo
                </Typography>

                <Input
                  type="text"
                  name="photo"
                  size="lg"
                  placeholder="Photo Url"
                  {...register("photo")}
                  className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                />
              </div>
              <Checkbox
                name="checkbox"
                label={
                  <Typography
                    variant="small"
                    color="gray"
                    className="flex items-center font-normal"
                  >
                    I agree the
                    <a
                      href="#"
                      className="font-medium transition-colors hover:text-gray-900"
                    >
                      &nbsp;Terms and Conditions
                    </a>
                  </Typography>
                }
                containerProps={{ className: "-ml-2.5" }}
              />
              <Button className="mt-6" fullWidth type="submit">
                Register
              </Button>
              <h5 className="mt-7 text-lg font-medium text-center">
                Or Login With
              </h5>
              <div className="text-center">
                <SocialLogin></SocialLogin>
              </div>
              <Typography color="gray" className="mt-4 text-center font-normal">
                Already have an account?{" "}
                <NavLink
                  to="/SignIn"
                  className=" underline text-red-500 font-bold"
                >
                  Login
                </NavLink>
              </Typography>
            </form>
          </Card>
        </div>
      </Container>
    </div>
  );
};

export default Register;
