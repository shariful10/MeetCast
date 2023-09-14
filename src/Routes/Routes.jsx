import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../Layouts/DashboardLayout/DashboardLayout";
import Main from "../Layouts/Main/Main";
import About from "../Pages/About/About";
import CheckOut from "../Pages/CheckOut/CheckOut";
import Contact from "../Pages/Contact/Contact";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import GoogleCalendar from "../Pages/GoogleCalendar/GoogleCalendar";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Meetings from "../Pages/Meetings/Meetings";
import MyMeetings from "../Pages/MyMeetings/MyMeetings";
import PaymentFaild from "../Pages/PaymentFaild/PaymentFaild";
import PaymentSucc from "../Pages/PaymentSucc/PaymentSucc";
import Pricing from "../Pages/Pricing/Pricing";
import RoomPage from "../Pages/RoomPage/RoomPage";
import SignUp from "../Pages/SignUp/SignUp";
import EditUserProfile from "../Pages/UserProfile/EditUserProfile";
import UserProfile from "../Pages/UserProfile/UserProfile";
import MeetingSchedule from "./../Pages/MeetingSchedule/MeetingSchedule";
import PrivateRoute from "./PrivateRoute";
export const router = createBrowserRouter([
	{
		path: "/",
		element: <Main />,
		errorElement: <ErrorPage />,
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
        path: "/checkout/:id",
        element: (
          <PrivateRoute>
            <CheckOut />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_API_URL}/checkout/${params.id}`),
      },
			{
				path: "/meetings",
				element: (
					<PrivateRoute>
						<Meetings></Meetings>
					</PrivateRoute>
				),
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
	{
		path: "/payment/success/:tranId",
		element: <PaymentSucc></PaymentSucc>
	},
	{
		path: "/payment/faild/:tranId",
		element: <PaymentFaild></PaymentFaild>
	},
	{
		path: "/room/:roomID",
		element: <RoomPage />,
	},
	{
		path: "/dashboard",
		element: (
			<PrivateRoute>
				<DashboardLayout />
			</PrivateRoute>
		),
		children: [
			{
				path: "/dashboard/userProfile",
				element: <UserProfile />,
			},
			{
				path: "/dashboard/editUserProfile",
				element: <EditUserProfile></EditUserProfile>
			},
			{
				path: "/dashboard/schedule",
				element: <MeetingSchedule />,
			},
			{
				path: "/dashboard/myMeetings",
				element: <MyMeetings />,
			},
			{
				path: "/dashboard/googleCalendar",
				element: <GoogleCalendar></GoogleCalendar>,
			},
		],
	},
]);
