// Save User To Database
export const saveUser = (user) => {
	const currentUser = {
		email: user.email,
	};
	fetch(`${import.meta.env.VITE_API_URL}/users/${user?.email}`, {
		method: "PUT",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(currentUser),
	})
		.then((res) => res.json())
		.then((data) => console.log(data));
};
