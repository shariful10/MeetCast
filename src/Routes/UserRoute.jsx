import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Components/Hooks/useAuth";
import useAdmin from "../Components/Hooks/useAdmin";
import useEditor from "../Components/Hooks/useEditor";
import Loader from "../Components/Shared/Loader/Loader";

const UserRoute = ({ children }) => {
	const { user, loading } = useAuth();
	const location = useLocation();
	const [isAdmin] = useAdmin();
	const [isEditor] = useEditor();

	if (loading) {
		return <Loader />;
	}

	if (user && !isAdmin && !isEditor) {
		return children;
	}

	return <Navigate to="/" state={{ from: location }} replace></Navigate>;
};

export default UserRoute;
