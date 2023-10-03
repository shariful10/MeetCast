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
import MyMeetings from "../Pages/MyMeetings/MyMeetings";
import PaymentFaild from "../Pages/PaymentFaild/PaymentFaild";
import PaymentSucc from "../Pages/PaymentSucc/PaymentSucc";
import Pricing from "../Pages/Pricing/Pricing";
import SignUp from "../Pages/SignUp/SignUp";
import UserHome from "../Pages/UserHome/UserHome";
import MeetingSchedule from "./../Pages/MeetingSchedule/MeetingSchedule";
import UserManagement from "./../Pages/UserManagement/UserManagement";
import AdminRoute from "./AdminRoute";
import EditorRoute from "./EditorRoute";
import PrivateRoute from "./PrivateRoute";
import ManageBlogs from "../Pages/ManageBlogs/ManageBlogs";
import DisplayInfo from "../Pages/UserProfile/DisplayInfo";
import PersonalInfo from "../Pages/UserProfile/PersonalInfo";
import MeetingInfo from "../Pages/UserProfile/MeetingInfo";
import ChatBox from "../Pages/ChatRoom/ChatBox";
import UserProfileDashboardLayout from "../Layouts/UserProfileDashboardLayout/UserProfileDashboardLayout";
import UserPrivacySettings from "../Pages/UserProfile/UserPrivacySettings";
import UserBillingAndSubscription from "../Pages/UserProfile/UserBillingAndSubscription";
import UserAvatar from "../Pages/UserProfile/UserAvatar";
import UpdateBlog from "../Pages/UpdateBlog/UpdateBlog";
import UserRoute from "./UserRoute";
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
		element: (
			<PrivateRoute>
				<PaymentSucc />
			</PrivateRoute>
		),
	},
	{
		path: "/payment/faild/:tranId",
		element: (
			<PrivateRoute>
				<PaymentFaild />
			</PrivateRoute>
		),
	},
	{
		path: "/meetings",
		element: (
			<PrivateRoute>
				<ChatBox />
			</PrivateRoute>
		),
	},
	{
		path: "/dashboard",
		element: (
			<PrivateRoute>
				<DashboardLayout />
			</PrivateRoute>
		),
		errorElement: <ErrorPage />,
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
				element: (
					<UserRoute>
						<UserHome />
					</UserRoute>
				),
			},
			{
				path: "/dashboard/add-blog",
				element: (
					<EditorRoute>
						<AddBlog />
					</EditorRoute>
				),
			},
			{
				path: "/dashboard/update-blog/:id",
				element: (
					<EditorRoute>
						<UpdateBlog />
					</EditorRoute>
				),
				loader: ({ params }) => fetch(`${import.meta.env.VITE_API_URL}/blog/${params.id}`),
			},
			{
				path: "/dashboard/userProfile",
				element: (
					<PrivateRoute>
						<UserProfileDashboardLayout />
					</PrivateRoute>
				),
				children: [
					{
						path: "/dashboard/userProfile/editPhoto",
						element: (
							<PrivateRoute>
								<UserAvatar />
							</PrivateRoute>
						),
					},
					{
						path: "/dashboard/userProfile/",
						element: (
							<PrivateRoute>
								<DisplayInfo />
							</PrivateRoute>
						),
					},
					{
						path: "/dashboard/userProfile/personalInfo",
						element: (
							<PrivateRoute>
								<PersonalInfo />
							</PrivateRoute>
						),
					},
					{
						path: "/dashboard/userProfile/meetingInfo",
						element: (
							<PrivateRoute>
								<MeetingInfo />
							</PrivateRoute>
						),
					},
					{
						path: "/dashboard/userProfile/billing",
						element: (
							<PrivateRoute>
								<UserBillingAndSubscription />
							</PrivateRoute>
						),
					},
					{
						path: "/dashboard/userProfile/privacy",
						element: (
							<PrivateRoute>
								<UserPrivacySettings />
							</PrivateRoute>
						),
					},
				],
			},
			{
				path: "/dashboard/schedule",
				element: (
					<PrivateRoute>
						<MeetingSchedule />
					</PrivateRoute>
				),
			},
			{
				path: "/dashboard/my-meetings",
				element: (
					<PrivateRoute>
						<MyMeetings />
					</PrivateRoute>
				),
			},
			{
				path: "/dashboard/UserManagement",
				element: (
					<AdminRoute>
						<UserManagement />
					</AdminRoute>
				),
			},
			{
				path: "/dashboard/my-blog",
				element: (
					<EditorRoute>
						<MyBlog />
					</EditorRoute>
				),
			},
			{
				path: "/dashboard/manage-blogs",
				element: (
					<AdminRoute>
						<ManageBlogs />
					</AdminRoute>
				),
			},
		],
	},
]);
