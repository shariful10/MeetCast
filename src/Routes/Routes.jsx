import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import About from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact";
import Pricing from "../Pages/Pricing/Pricing";
import UserProfile from "../Pages/UserProfile/UserProfile";
import PrivateRoute from "./PrivateRoute";
import MeetingSchedule from './../Pages/MeetingSchedule/MeetingSchedule';
import Meetings from "../Pages/Meetings/Meetings";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/pricing",
        element: <Pricing />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/schedule",
        element: <MeetingSchedule />,
      },
      {
        path: "/userProfile",
        element: <PrivateRoute>
          <UserProfile />,
        </PrivateRoute>
      },
      {
        path: "/meetings",
        element: <PrivateRoute>
          <Meetings></Meetings>
        </PrivateRoute>
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
]);
