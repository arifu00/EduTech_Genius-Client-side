import { useContext } from "react";
import { AuthContext } from "../../../../Providers/AuthProviders";
import { useQuery } from "@tanstack/react-query";
import { CiCircleMore, CiEdit } from "react-icons/ci";
import { TiDelete } from "react-icons/ti";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";
import Container from "../../../../Components/Container/Container";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { Link } from "react-router-dom";

const MyClass = () => {
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();
  const { data: allClasses = [], refetch } = useQuery({
    queryKey: ["allClasses", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/allClasses?email=${user.email}`);
      return res.data;
    },
  });
  //   console.log(allClasses);

  const handleDelete = (id) => {
    // console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "Do you want to Remove  this user request?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, make it!",
    }).then((result) => {
      if (result.isConfirmed) {
        // console.log(id);
        axiosSecure.delete(`/allClasses/${id}`).then((res) => {
          console.log(res.data);
          if (res.data.deletedCount > 0) {
            Swal.fire({
              title: "Successful",
              text: "Deleted Successful",
              icon: "success",
            });
            refetch();
          }
        });
      }
    });
  };
  return (
    <div className="ml-12">
      <Container>
        <h2 className="text-center font-lora text-2xl py-4 font-bold underline">
          My Classes
        </h2>
        {allClasses.map((allClass) => (
          <Card key={allClass._id} className="w-full flex-row mt-8">
            <CardHeader
              shadow={false}
              floated={false}
              className="m-0 w-2/5 shrink-0 rounded-r-none"
            >
              <img
                src={allClass.image}
                alt={allClass.title}
                className="h-full w-full object-cover"
              />
            </CardHeader>
            <CardBody>
              <Typography variant="h6" color="gray" className="mb-4 uppercase">
                {allClass.name}
              </Typography>
              <Typography variant="h4" color="blue-gray" className="mb-2">
                {allClass.title}{" "}
              </Typography>
              <Typography
                variant="h6"
                color="amber"
                className="mb-2 font-normal"
              >
                {allClass.status}
              </Typography>
              <Typography color="gray" className="mb-8 font-normal">
                {allClass.shortDescription}
              </Typography>
              <div className=" md:flex gap-2">
                <Link to={`/dashboard/updateClass/${allClass._id}`}>
                  <Button variant="text" className="flex items-center gap-2">
                    Update <CiEdit className="text-2xl" />
                  </Button>
                </Link>
                <Button
                  onClick={() => handleDelete(allClass._id)}
                  variant="outlined"
                  className="flex items-center gap-2 hover:bg-black hover:text-white"
                >
                  Delete <TiDelete className="text-2xl" />
                </Button>
                <Button
                  disabled
                  variant="text"
                  className="flex items-center gap-2"
                >
                  See Details <CiCircleMore className="text-2xl" />
                </Button>
              </div>
            </CardBody>
          </Card>
        ))}
      </Container>
    </div>
  );
};

export default MyClass;
