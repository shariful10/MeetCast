import React from "react";

const buttons = ({ title }) => {
	return (
		<button className="bg-secondary px-5 md:px-10 py-2 md:py-3 rounded-full md:font-semibold font-NotoSans primary_button text-white">
			{title}
		</button>
	);
};

export default buttons;
