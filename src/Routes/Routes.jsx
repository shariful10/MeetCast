import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../Layouts/DashboardLayout/DashboardLayout";
import Main from "../Layouts/Main/Main";
import About from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Meetings from "../Pages/Meetings/Meetings";
import MyMeetings from "../Pages/MyMeetings/MyMeetings";
import Pricing from "../Pages/Pricing/Pricing";
import SignUp from "../Pages/SignUp/SignUp";
import UserProfile from "../Pages/UserProfile/UserProfile";
import MeetingSchedule from "./../Pages/MeetingSchedule/MeetingSchedule";
import PrivateRoute from "./PrivateRoute";
export const router = createBrowserRouter([
	{
		path: "/",
		element: <Main />,
		// errorElement: <ErrorPage />,
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
				path: "/dashboard/schedule",
				element: <MeetingSchedule />,
			},
			{
				path: "/dashboard/myMeetings",
				element: <MyMeetings />,
			},
		],
	},
]);
