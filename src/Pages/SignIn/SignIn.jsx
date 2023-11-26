import { Helmet } from "react-helmet";
import signInImg from "../../assets/SignIn/login.gif";
import { NavLink } from "react-router-dom";
import { Button, Card, Input, Typography } from "@material-tailwind/react";
import Container from "../../Components/Container/Container";
import { useForm } from "react-hook-form";
import SocialLogin from "../../Components/SocialLogin/SocialLogin";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import Swal from "sweetalert2";

const SignIn = () => {
  const { loginUser } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const email = data.email;
    const password = data.password;
    // console.log(email, password);
    // firebase login
    loginUser(email, password)
      .then((res) => {
        console.log(res.user);
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Sign In Successful",
          showConfirmButton: true,
          timer: 1200,
        });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div className="my-12">
      <Helmet>
        <title>EduTechGenius | Sign In</title>
      </Helmet>

      <Container>
        <div className="md:flex justify-center gap-8">
          <div className="md:flex items-center">
            <img className="" src={signInImg} alt="" />
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
              Sign In
            </Typography>

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
            >
              <div className="mb-1 flex flex-col gap-6">
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
              </div>

              <Button className="mt-6" fullWidth type="submit">
                Login
              </Button>
              <h5 className="mt-7 text-lg font-medium text-center">
                Or Login With
              </h5>
              <div className="text-center">
                <SocialLogin></SocialLogin>
              </div>
              <Typography color="gray" className="mt-4 text-center font-normal">
                New user?
                <NavLink
                  to="/register"
                  className=" underline text-red-500 font-bold ml-1"
                >
                  Register Here
                </NavLink>
              </Typography>
            </form>
          </Card>
        </div>
      </Container>
    </div>
  );
};

export default SignIn;
