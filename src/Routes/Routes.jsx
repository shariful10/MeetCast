import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../Layouts/DashboardLayout/DashboardLayout";
import Main from "../Layouts/Main/Main";
import About from "../Pages/About/About";
import AddBlog from "../Pages/AddBlog/AddBlog";
import MyBlog from "./../Pages/Dashboard/MyBlog";
import AdminHome from "./../Pages/AdminHome/AdminHome";
import BlogPage from "../Pages/Blog/BlogPage";
import BlogPost from "../Pages/Blog/BlogPost";
import CheckOut from "../Pages/CheckOut/CheckOut";
import Contact from "../Pages/Contact/Contact";
import EditorHome from "../Pages/EditorHome/EditorHome";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import ChatRoom from "../Pages/Meetings/ChatRoom";
import MyMeetings from "../Pages/MyMeetings/MyMeetings";
import PaymentFaild from "../Pages/PaymentFaild/PaymentFaild";
import PaymentSucc from "../Pages/PaymentSucc/PaymentSucc";
import Pricing from "../Pages/Pricing/Pricing";
import RoomPage from "../Pages/RoomPage/RoomPage";
import SignUp from "../Pages/SignUp/SignUp";
import UserHome from "../Pages/UserHome/UserHome";
import EditUserProfile from "../Pages/UserProfile/EditUserProfile";
import UserProfile from "../Pages/UserProfile/UserProfile";
import MeetingSchedule from "./../Pages/MeetingSchedule/MeetingSchedule";
import UserManagement from "./../Pages/UserManagement/UserManagement";
import AdminRoute from "./AdminRoute";
import EditorRoute from "./EditorRoute";
import PrivateRoute from "./PrivateRoute";
import UserProfileOriginal from "../Pages/UserProfile/UserProfileOriginal";
import ManageBlogs from "../Pages/ManageBlogs/ManageBlogs";
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
				path: "/blog",
				element: <BlogPage />,
			},
			{
				path: "/blog/:id",
				element: <BlogPost />,
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
						<ChatRoom></ChatRoom>
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
		element: <PaymentSucc></PaymentSucc>,
	},
	{
		path: "/payment/faild/:tranId",
		element: <PaymentFaild></PaymentFaild>,
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
				path: "/dashboard/admin-home",
				element: (
					<AdminRoute>
						<AdminHome />
					</AdminRoute>
				),
			},
			{
				path: "/dashboard/editor-home",
				element: (
					<EditorRoute>
						<EditorHome />
					</EditorRoute>
				),
			},
			{
				path: "/dashboard/userHome",
				element: <UserHome />,
			},
			{
				path: "/dashboard/add-blog",
				element: <AddBlog />,
			},
			{
				path: "/dashboard/userProfile",
				element: <UserProfileOriginal />,
			},
			{
				path: "/dashboard/editUserProfile",
				element: <EditUserProfile />,
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
				path: "/dashboard/UserManagement",
				element: <UserManagement />,
			},
			{
				path: "/dashboard/my-blog",
				element: <MyBlog />,
			},
			{
				path: "/dashboard/manage-blogs",
				element: <ManageBlogs />,
			},
		],
	},
]);
