// Save User To Database
export const saveUser = (user) => {
	const currentUser = {
		name: user.displayName,
		email: user.email,
		image: user.photoURL,
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

export const imageUpload = async (image) => {
	const formData = new FormData();
	formData.append("image", image);
	const url = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB_API}`;

	const res = await fetch(url, {
		method: "POST",
		body: formData,
	});
	const data = await res.json();
	return data;
};
