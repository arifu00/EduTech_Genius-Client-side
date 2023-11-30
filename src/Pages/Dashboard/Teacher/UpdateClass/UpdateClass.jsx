import { useLoaderData, useNavigate } from "react-router-dom";
import {
  Button,
  Card,
  Input,
  Textarea,
  Typography,
} from "@material-tailwind/react";
import Container from "../../../../Components/Container/Container";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";

const UpdateClass = () => {
  const loadedClass = useLoaderData();
  //   console.log(loadedClass);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();

  const axiosSecure = useAxiosSecure();

  const onSubmit = async (data) => {
    // console.log(data);

    const updatedClass = {
      title: data.title,
      name: data.name,
      email: data.email,
      image: data.image,
      category: data.category,
      price: data.price,
      shortDescription: data.description,
    };
    // console.log(loadedClass._id);
    const res = await axiosSecure.patch(
      `/updateClasses/${loadedClass._id}`,
      updatedClass
    );
    console.log(res.data);
    if (res.data.modifiedCount > 0) {
      Swal.fire({
        position: "center",
        icon: "success",
        title: `${loadedClass.title} updated successful `,
        showConfirmButton: false,
        timer: 1000,
      });
      navigate("/dashboard/myClass");
    }
  };
  return (
    <div>
      <div className="my-20">
        <Container>
          <Card color="transparent" shadow={false}>
            <h4 className="text-center text-2xl font-bold text-[#000]">
              Update Class
            </h4>

            <h6 className="text-base text-red-600 font-medium text-center">
              Check everything properly and Update
            </h6>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="mt-8 mb-2 mx-auto px-20 py-10 rounded-lg border-black border shadow-2xl shadow-[#93cfdf]"
            >
              <div className="mb-1 flex flex-col gap-6">
                {/* title  */}
                <div className="">
                  <Typography variant="h6" color="blue-gray" className="mb-3">
                    Title
                  </Typography>
                  <Input
                    size="lg"
                    {...register("title", { required: true })}
                    defaultValue={loadedClass.title}
                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                    labelProps={{
                      className: "before:content-none after:content-none",
                    }}
                  />
                  {errors.title?.type === "required" && (
                    <p className="text-red-600">Title is required</p>
                  )}
                </div>
                {/* name & email */}
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
                      readOnly
                      defaultValue={loadedClass?.name}
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
                      defaultValue={loadedClass?.email}
                      readOnly
                      className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                      labelProps={{
                        className: "before:content-none after:content-none",
                      }}
                    />
                  </div>
                </div>
                {/* price & category */}
                <div className="lg:flex gap-4">
                  {/* price field  */}
                  <div className="flex-1 ">
                    <Typography variant="h6" color="blue-gray" className="">
                      Price
                    </Typography>
                    <Input
                      size="lg"
                      type="number"
                      {...register("price", { required: true })}
                      autoComplete="off"
                      defaultValue={loadedClass.price}
                      className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                      labelProps={{
                        className: "before:content-none after:content-none",
                      }}
                    />
                    {errors.price?.type === "required" && (
                      <p className="text-red-600">Price is required</p>
                    )}
                  </div>
                  {/* select Category */}
                  <div className="flex-1">
                    <Typography variant="h6" color="blue-gray" className="">
                      Select Category
                    </Typography>
                    <select
                      {...register("category", { required: true })}
                      defaultValue={loadedClass.category}
                      className="border px-3 py-2 rounded-lg  bg-[#F6F6F6] text-blue-gray-500 border-[#B0BEC5] w-full "
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
                  </div>
                </div>
                {/* photo  */}
                <div className="">
                  <Typography variant="h6" color="blue-gray" className="mb-3">
                    Image
                  </Typography>
                  <Input
                    type="text"
                    defaultValue={loadedClass.image}
                    {...register("image", { required: true })}
                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                    labelProps={{
                      className: "before:content-none after:content-none",
                    }}
                  />
                  {errors.image?.type === "required" && (
                    <p className="text-red-600">Image is required</p>
                  )}
                </div>
                {/* description  */}
                <div className="">
                  <Typography variant="h6" color="blue-gray" className="mb-3">
                    Description
                  </Typography>
                  <div className="">
                    <Textarea
                      defaultValue={loadedClass.shortDescription}
                      {...register("description", { required: true })}
                      label="Description"
                    />
                    {errors.category?.type === "required" && (
                      <p className="text-red-600">Description is Required</p>
                    )}
                  </div>
                </div>
              </div>

              <Button className="mt-6" type="submit" fullWidth>
                Update Class
              </Button>
            </form>
          </Card>
        </Container>
      </div>
    </div>
  );
};

export default UpdateClass;
