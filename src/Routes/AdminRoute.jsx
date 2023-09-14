import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Components/Hooks/useAuth";
import useAdmin from "../Components/Hooks/useAdmin";
import Loader from "../Components/Shared/Loader/Loader";

const AdminRoute = ({ children }) => {
	const { user, loading } = useAuth();
	const location = useLocation();
	const [isAdmin, isAdminLoading] = useAdmin();

	if (loading || isAdminLoading) {
		return <Loader />
	}

	if (user && isAdmin) {
		return children;
	}

	return <Navigate to="/" state={{ from: location }} replace></Navigate>;
};

export default AdminRoute;