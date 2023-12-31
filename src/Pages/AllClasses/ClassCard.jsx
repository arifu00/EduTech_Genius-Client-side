import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const ClassCard = ({ allClass }) => {
  const {
    _id,
    title,
    image,
    price,
    total_enrollment,
    shortDescription,
    name,
    category,
  } = allClass;
  // console.log(total_enrollment);
  const motionVariants = {
    hover: { scale: 1.1 },
    initial: { scale: 1 },
  };
  return (
    <div>
      <motion.div
        variants={motionVariants}
        initial={{ opacity: 1.5 }}
        whileHover={{
          scale: 1.05,
          transition: { duration: 1 },
        }}
      >
        <Link to={`/allClasses/${_id}`}>
          <Card className="">
            <CardHeader shadow={false} floated={false} className="h-72">
              <img
                src={image}
                alt={title}
                className="h-full w-full object-cover"
              />
            </CardHeader>
            <CardBody>
              <div className="mb-2 flex items-center justify-between">
                <Typography color="blue-gray" className="font-black font-lora">
                  {title}
                </Typography>
                <Typography
                  color="blue-gray"
                  className="font-black font-lora italic"
                >
                  ${price}
                </Typography>
              </div>
              <div className="mb-2 flex items-center justify-between">
                <Typography color="blue-gray" className="font-medium">
                  Post By: {name}
                </Typography>
                <Typography
                  color="blue-gray"
                  className="font-black font-lora italic"
                >
                  Total Enrollment : {total_enrollment}
                </Typography>
              </div>
              <Typography
                variant="small"
                color="gray"
                className="font-normal opacity-75 "
              >
                {shortDescription}
              </Typography>
            </CardBody>
            <CardFooter className="pt-0">
              <Link to={`/allClasses/${_id}`}>
                <Button
                  ripple={false}
                  fullWidth={true}
                  className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105   focus:shadow-none active:scale-100"
                >
                  Enroll
                </Button>
              </Link>
            </CardFooter>
          </Card>
        </Link>
      </motion.div>
    </div>
  );
};

export default ClassCard;
