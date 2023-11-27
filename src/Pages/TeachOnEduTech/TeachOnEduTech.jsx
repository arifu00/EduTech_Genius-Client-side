import { Helmet } from "react-helmet";

import {
  Card,
  Input,
  Button,
  Typography,
  
} from "@material-tailwind/react";
import Container from "../../Components/Container/Container";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import { useForm } from "react-hook-form";

const TeachOnEduTech = () => {
  const { user } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div>
      <Helmet>
        <title>EduTechGenius | Tech On EduTech Genius</title>
      </Helmet>

      <div className="my-20">
        <Container>
          <Card color="transparent" shadow={false}>
            <h4 className="text-center text-2xl font-bold text-[#000]">
              Tech on EduTech Genius
            </h4>
            <h6 className="text-base text-red-600 font-medium text-center">
              Check everything properly and apply
            </h6>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="mt-8 mb-2 mx-auto px-20 py-10 rounded-lg border-black border shadow-2xl shadow-[#93cfdf]"
            >
              <div className="mb-1 flex flex-col gap-6">
                <div className="lg:flex gap-4">
                  {/* name field  */}
                  <div className="flex-1 ">
                    <Typography variant="h6" color="blue-gray" className="">
                      Your Name
                    </Typography>
                    <Input
                      size="lg"
                      {...register("name")}
                      autoComplete="off"
                      defaultValue={user.displayName}
                      readOnly
                      className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                      labelProps={{
                        className: "before:content-none after:content-none",
                      }}
                    />
                  </div>
                  {/* email field  */}
                  <div className="flex-1">
                    <Typography variant="h6" color="blue-gray" className="">
                      Your Email
                    </Typography>
                    <Input
                      size="lg"
                      name="email"
                      autoComplete="off"
                      {...register("email")}
                      defaultValue={user.email}
                      readOnly
                      className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                      labelProps={{
                        className: "before:content-none after:content-none",
                      }}
                    />
                  </div>
                </div>
                {/* photo  */}
                <Typography variant="h6" color="blue-gray" className="-mb-3">
                  Photo
                </Typography>
                <Input
                  type="url"
                  size="lg"
                  name="photoURL"
                  {...register("photoURL")}
                  defaultValue={user.photoURL}
                  readOnly
                  className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                />
              </div>
              {/* select Experience */}
              <Typography variant="h6" color="blue-gray" className="mb-3 mt-3">
                Select Experience
              </Typography>
              <select
                defaultValue="default"
                {...register("experience", { required: true})}
                className="border px-3 py-2 rounded-lg text-blue-gray-500 border-[#B0BEC5] w-full "
              >
                <option value="">Select Experience</option>
                <option value="Beginner">
                Beginner
                </option>
                <option value="Experienced">
                Experienced
                </option>
                <option value=" Some Idea">
                Some Idea
                </option>
              </select>
              {errors.experience?.type === "required" && (
                <p className="text-red-600">
                  Please Select one valid Experience{" "}
                </p>
              )}
              {/* select Category */}
              <Typography variant="h6" color="blue-gray" className="mb-3 mt-3">
                Select Category
              </Typography>
              <select
                {...register("category", { required: true })}
                className="border px-3 py-2 rounded-lg text-blue-gray-500 border-[#B0BEC5] w-full "
              >
                <option value="">Select a Category</option>
                <option value="Advanced Web Development">
                  Advanced Web Development
                </option>
                <option value="Illustration Techniques">
                  Illustration Techniques
                </option>
                <option value="Digital Art and Design">
                  Digital Art and Design
                </option>
                <option value="Data Science Fundamentals">
                  Data Science Fundamentals
                </option>
                <option value="Digital Marketing Mastery">
                  Digital Marketing Mastery
                </option>
                <option value="Graphic Design Essentials">
                  Graphic Design Essentials
                </option>
                <option value="Web Development Fundamentals">
                  Web Development Fundamentals
                </option>
              </select>
              {errors.category?.type === "required" && (
                <p className="text-red-600">
                  Please Select one valid category{" "}
                </p>
              )}
              <Button className="mt-6" type="submit" fullWidth>
                Submit for review
              </Button>
            </form>
          </Card>
        </Container>
      </div>
    </div>
  );
};

export default TeachOnEduTech;
