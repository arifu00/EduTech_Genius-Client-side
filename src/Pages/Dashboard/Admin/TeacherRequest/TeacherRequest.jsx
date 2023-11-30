import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import { FaCheck, FaTimes } from "react-icons/fa";



//  material ui table style 
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const TeacherRequest = () => {
  const axiosSecure = useAxiosSecure();

  const { data: teacherRequest = [], refetch } = useQuery({
    queryKey: ["teacherRequest"],
    queryFn: async () => {
      const res = await axiosSecure.get("/teacherRequest");
      return res.data;
    },
  });

  console.log(teacherRequest);
  const handleAccept = (email) => {
    console.log(email);
    Swal.fire({
      title: "Are you sure?",
      text: "Do you want to accept this user request?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, make it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.patch(`/teacherRequest/${email}`).then((res) => {
          console.log(res.data);
          if (res.data.modifiedCount > 0) {
            Swal.fire({
              title: "Successful",
              text: "You can Accepted this user successfully Teacher Request",
              icon: "success",
            });
            refetch();
          }
        });
        axiosSecure
          .patch(`/user/teacher/${email}`)
          .then((res) => {
            console.log(res.data);
            if (res.data.modifiedCount > 0) {
              refetch();
            }
          })
          .catch((error) => console.log(error.message));
      }
    });
  };
  const handleRejected = (id) => {
    console.log(id);
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
        axiosSecure.delete(`/teacherRequest/${id}`).then((res) => {
          console.log(res.data);
          if (res.data.deletedCount > 0) {
            Swal.fire({
              title: "Successful",
              text: "You can Deleted this user Teacher Request",
              icon: "success",
            });
            refetch();
          }
        });
      }
    });
  };

  return (
    <div>
      <div className="bg-[#fff] rounded-md w-11/12 mx-auto mt-12 px-8 pb-12">
        <div className="py-8">
          <h2 className="text-3xl font-bold">
            Total Users : {teacherRequest.length}
          </h2>
        </div>
        {/* table  */}
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell align="center">Image</StyledTableCell>
                <StyledTableCell align="center">Name</StyledTableCell>

                <StyledTableCell align="center">Experience</StyledTableCell>

                <StyledTableCell align="center">Category</StyledTableCell>

                <StyledTableCell align="center">Status</StyledTableCell>

                <StyledTableCell align="center">Approve</StyledTableCell>
                <StyledTableCell align="center">Reject</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {teacherRequest.map((user) => (
                <StyledTableRow align="center" key={user._id}>
                  <StyledTableCell component="th" scope="row">
                    <img
                      className="rounded-full w-12 h-12"
                      src={user.image}
                      alt={user.name}
                    />
                  </StyledTableCell>
                  <StyledTableCell align="center">{user.name}</StyledTableCell>
                  <StyledTableCell align="center">{user.email}</StyledTableCell>
                  <StyledTableCell align="center">
                    {user.category}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {user.status}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {user?.status === "Accepted" ||
                    user?.status === "Accepted" ? (
                      <button disabled className="text-gray-400">
                        <FaCheck className="text-3xl" />
                      </button>
                    ) : (
                      <button
                        onClick={() => handleAccept(user.email)}
                        className="flex items-center justify-center  hover:text-red-600 gap-3"
                      >
                        <FaCheck className="text-3xl" />
                      </button>
                    )}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {user?.status === "Accepted" ||
                    user?.status === "Accepted" ? (
                      <button disabled className="text-gray-400">
                        <FaTimes className="text-3xl" />
                      </button>
                    ) : (
                      <button
                        onClick={() => handleRejected(user._id)}
                        className="flex items-center justify-center  hover:text-red-600 gap-3"
                      >
                        <FaTimes className="text-3xl" />
                      </button>
                    )}
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};

export default TeacherRequest;
