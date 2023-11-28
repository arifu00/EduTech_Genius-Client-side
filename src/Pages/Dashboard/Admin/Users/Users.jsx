import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { RiAdminFill } from "react-icons/ri";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { MdOutlineAdminPanelSettings } from "react-icons/md";
import Swal from "sweetalert2";

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

const Users = () => {
  const axiosSecure = useAxiosSecure();
  const {
    data: users = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/user");
      return res.data;
    },
  });

  // make admin operation
  const handleAdmin = (id) => {
    console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "Do you want to admin this user?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, make it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.patch(`/user/admin/${id}`).then((res) => {
          // console.log(res.data);
          if (res.data.modifiedCount > 0) {
            Swal.fire({
              title: "Successful",
              text: "You can admin this user successfully",
              icon: "success",
            });
            refetch();
          }
        });
      }
    });
  };
  if (isLoading) {
    <div className="h-screen flex justify-center items-center ">
      <h2 className="text-center">Please Wait.....</h2>
      <p className="text-center">Loading</p>
    </div>;
  }
  return (
    <div>
      <div className="bg-[#fff] rounded-md w-11/12 mx-auto mt-12 px-8 pb-12">
        <div className="py-8">
          <h2 className="text-3xl font-bold">Total Users : {users.length}</h2>
        </div>
        {/* table  */}
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell align="center">User Image</StyledTableCell>
                <StyledTableCell align="center">User Name</StyledTableCell>

                <StyledTableCell align="center">User Email</StyledTableCell>

                <StyledTableCell align="center">Action</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users.map((user) => (
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
                    {user?.role === "admin" ? (
                      <button
                        disabled
                        className="flex items-center justify-center text-center text-green-600 text-lg font-black gap-3"
                      >
                        <MdOutlineAdminPanelSettings className="text-3xl" />
                        Admin
                      </button>
                    ) : (
                      <button
                        onClick={() => handleAdmin(user._id)}
                        className="flex items-center justify-center  hover:text-red-600 gap-3"
                      >
                        <RiAdminFill  className="text-2xl" />
                        Make Admin
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

export default Users;
