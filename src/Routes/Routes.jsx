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
import Dashboard from "../Layout/Dashboard";
import Profile from "../Pages/Dashboard/Profile/Profile";
import PayClass from "../Pages/AllClasses/PayClass/PayClass";
import EnrollClass from "../Pages/Dashboard/User/EnrollClass/EnrollClass";
import EnrollDetail from "../Pages/Dashboard/User/EnrollClass/EnrollDetail/EnrollDetail";
import Users from "../Pages/Dashboard/Admin/Users/Users";
import TeacherRequest from "../Pages/Dashboard/Admin/TeacherRequest/TeacherRequest";
import AdminRoute from "./AdminRoute";
import MyClass from "../Pages/Dashboard/Teacher/MyClass/MyClass";
import AddClass from "../Pages/Dashboard/Teacher/AddClass/AddClass";
import UpdateClass from "../Pages/Dashboard/Teacher/UpdateClass/UpdateClass";
import AdminAllClasses from "../Pages/Dashboard/Admin/AdminAllClasses/AdminAllClasses";

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
        loader: ({ params }) =>
          fetch(`https://edu-tech-genius-server.vercel.app/${params.id}`),
      },
      {
        path: "class/payClass/:id",
        element: (
          <PrivateRoute>
            <PayClass></PayClass>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://edu-tech-genius-server.vercel.app/${params.id}`),
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
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    children: [
      {
        path: "profile",
        element: (
          <PrivateRoute>
            <Profile></Profile>
          </PrivateRoute>
        ),
      },
      {
        path: "enrollClass",
        element: (
          <PrivateRoute>
            <EnrollClass></EnrollClass>
          </PrivateRoute>
        ),
      },
      {
        path: "enrollClass/:id",
        element: (
          <PrivateRoute>
            <EnrollDetail></EnrollDetail>
          </PrivateRoute>
        ),
      },
      {
        path: "addClass",
        element: (
          <PrivateRoute>
            <AddClass></AddClass>
          </PrivateRoute>
        ),
      },
      {
        path: "myClass",
        element: (
          <PrivateRoute>
            <MyClass></MyClass>
          </PrivateRoute>
        ),
      },
      {
        path: "updateClass/:id",
        element: (
          <PrivateRoute>
            <UpdateClass></UpdateClass>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://edu-tech-genius-server.vercel.app/${params.id}`),
      },
      {
        path: "users",
        element: (
          <AdminRoute>
            <Users></Users>
          </AdminRoute>
        ),
      },
      {
        path: "admin/allClasses",
        element: (
          <AdminRoute>
            <AdminAllClasses></AdminAllClasses>
          </AdminRoute>
        ),
      },
      {
        path: "teacherRequest",
        element: (
          <AdminRoute>
            <TeacherRequest></TeacherRequest>
          </AdminRoute>
        ),
      },
    ],
  },
]);
