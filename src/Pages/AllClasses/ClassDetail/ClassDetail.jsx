import { useLoaderData } from "react-router-dom";

const ClassDetail = () => {
  const loadedClass = useLoaderData();
  console.log(loadedClass);
  return <div></div>;
};

export default ClassDetail;
