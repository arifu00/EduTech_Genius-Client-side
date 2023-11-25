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
const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);
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
                  Photo URL
                </Typography>
                <Input
                  type="file"
                  name="photo"
                  size="lg"
                  {...register("photo", { required: true })}
                  placeholder="Photo Url"
                  className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                />
                {errors.photo?.type === "required" && (
                  <p className="text-red-600">Photo is required</p>
                )}
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
