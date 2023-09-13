// Add a Room
export const addBlog = async (blogData) => {
	const response = await fetch(`${import.meta.env.VITE_API_URL}/blogs`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(blogData),
	});
	const data = await response.json();
	return data;
};

// Get All Rooms Data
export const getAllBlogs = async () => {
	const response = await fetch(`${import.meta.env.VITE_API_URL}/blogs`);
	const data = await response.json();
	return data;
};
