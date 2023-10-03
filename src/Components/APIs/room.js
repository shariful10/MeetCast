// Get All Rooms Data
export const getAllBlogs = async () => {
	const response = await fetch(`${import.meta.env.VITE_API_URL}/getMeetingData`);
	const data = await response.json();
	return data;
};