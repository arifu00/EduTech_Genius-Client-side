import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home/Home";
import Main from "../Layout/Main";
import AllClasses from "../Pages/AllClasses/AllClasses";
import TeachOnEduTech from "../Pages/TeachOnEduTech/TeachOnEduTech";
import SignIn from "../Pages/SignIn/SignIn";
import Register from "../Pages/Register/Register";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "allClasses",
        element: <AllClasses></AllClasses>,
      },
      {
        path: "teachOnEduTech",
        element: <TeachOnEduTech></TeachOnEduTech>,
      },
      {
        path: "signIn",
        element: <SignIn></SignIn>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
    ],
  },
]);
