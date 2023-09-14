import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Components/Hooks/useAuth";
import useEditor from "../Components/Hooks/useEditor";
import Loader from "../Components/Shared/Loader/Loader";

const EditorRoute = ({ children }) => {
	const { user, loading } = useAuth();
	const location = useLocation();
	const [isEditor, isEditorLoading] = useEditor();

	if (loading || isEditorLoading) {
		return <Loader />;
	}

	if (user && isEditor) {
		return children;
	}

	return <Navigate to="/" state={{ from: location }} replace></Navigate>;
};

export default EditorRoute;