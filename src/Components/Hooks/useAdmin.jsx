import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useAdmin = () => {
	const { user, loading } = useAuth();
	const token = localStorage.getItem("access-token");
	const [axiosSecure] = useAxiosSecure();
	const { data: isAdmin, isLoading: isAdminLoading } = useQuery({
		queryKey: ["isAdmin", user?.email],
		enabled: !loading && !!user && !!localStorage.getItem("access-token"),
		queryFn: async () => {
			if (!user || !token) {
				return false;
			}
			const res = await axiosSecure.get(`/users/admin/${user?.email}`, {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			});
			return res.data.admin;
		},
	});
	return [isAdmin, isAdminLoading];
};
export default useAdmin;

