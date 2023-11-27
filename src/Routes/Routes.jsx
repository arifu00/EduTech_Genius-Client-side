import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home/Home";
import Main from "../Layout/Main";
import AllClasses from "../Pages/AllClasses/AllClasses";
import TeachOnEduTech from "../Pages/TeachOnEduTech/TeachOnEduTech";
import SignIn from "../Pages/SignIn/SignIn";
import Register from "../Pages/Register/Register";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import PrivateRoute from "./PrivateRoute";
import ClassDetail from "../Pages/AllClasses/ClassDetail/ClassDetail";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
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
        path: "allClasses/:id",
        element: (
          <PrivateRoute>
            <ClassDetail></ClassDetail>
          </PrivateRoute>
        ),
        loader: ({params})=> fetch(`/AllClass.json/${params.id}`)
      },
      {
        path: "teachOnEduTech",
        element: (
          <PrivateRoute>
            <TeachOnEduTech></TeachOnEduTech>
          </PrivateRoute>
        ),
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
