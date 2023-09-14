import React from 'react';
import useAuth from './useAuth';
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const useEditor = () => {
    const { user, loading } = useAuth();
	const token = localStorage.getItem("access-token");
	const [axiosSecure] = useAxiosSecure();
	const { data: isEditor, isLoading: isEditorLoading } = useQuery({
		queryKey: ["isEditor", user?.email],
		enabled: !loading && !!user && !!localStorage.getItem("access-token"),
		queryFn: async () => {
			if (!user || !token) {
				return false;
			}
			const res = await axiosSecure.get(`/users/editor/${user?.email}`, {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			});
			// console.log("is editor response", res);
			return res.data.editor;
		},
	});
	return [isEditor, isEditorLoading];
};

export default useEditor;

