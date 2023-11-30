import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useQuery } from "@tanstack/react-query";
import { FaCheck, FaTimes } from "react-icons/fa";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { Button } from "@mui/material";

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

const AdminAllClasses = () => {
  const axiosSecure = useAxiosSecure();

  const { data: allClasses = [], refetch } = useQuery({
    queryKey: ["allClasses"],
    queryFn: async () => {
      const res = await axiosSecure.get("/admin/allClasses");
      return res.data;
    },
  });

  console.log(allClasses);
  return (
    <div>
      <div className="bg-[#fff] rounded-md w-11/12 mx-auto mt-12 px-8 pb-12">
        <h2 className="text-3xl text-center font-lora pt-8">All Classes</h2>
        <div className="py-8">
          <h2 className="text-3xl font-bold">
            Total Classes : {allClasses.length}
          </h2>
        </div>
        {/* table  */}
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell align="center">Image</StyledTableCell>
                <StyledTableCell align="center">Title</StyledTableCell>

                <StyledTableCell align="center">Teacher Email</StyledTableCell>

                <StyledTableCell align="center">
                  Short Description
                </StyledTableCell>

                <StyledTableCell align="center">Status</StyledTableCell>

                <StyledTableCell align="center">Approve</StyledTableCell>
                <StyledTableCell align="center">Reject</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {allClasses.map((allClass) => (
                <StyledTableRow align="center" key={allClass._id}>
                  <StyledTableCell component="th" scope="row">
                    <img
                      className=" w-32 object-cover  rounded-sm"
                      src={allClass.image}
                      alt={allClass.title}
                    />
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    <p className="font-lora text-">{allClass.title}</p>
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    <p className="font-lora text-">
                      {" "}
                      {allClass.email || "Unknown Email Address"}
                    </p>
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    <p className="font-lora text-">
                      {allClass.shortDescription.slice(0, 20)}
                      {allClass.shortDescription.length > 20 && (
                        <span className="text-blue-800 font-black">
                          <a href="#">...</a>
                        </span>
                      )}
                    </p>
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {allClass?.status === "approved" ||
                    allClass?.status === "approved" ? (
                      <p className="text-cyan-700 font-lora first-letter:uppercase">{allClass.status}</p>
                    ) : (
                      <p className="text-red-700 font-lora first-letter:uppercase">{allClass.status}</p>
                    )}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {allClass?.status === "approved" ||
                    allClass?.status === "approved" ? (
                      <Button disabled>
                        <FaCheck className="text-3xl" />
                      </Button>
                    ) : (
                      <button
                        // onClick={() => handleAccept(allClass.email)}
                        className="flex items-center justify-center  hover:text-red-600 gap-3"
                      >
                        <FaCheck className="text-3xl" />
                      </button>
                    )}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {allClass?.status === "approved" ||
                    allClass?.status === "approved" ? (
                      <button disabled className="text-gray-400">
                        <FaTimes className="text-3xl" />
                      </button>
                    ) : (
                      <button
                        // onClick={() => handleRejected(allClass._id)}
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

export default AdminAllClasses;
