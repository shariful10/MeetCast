import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Components/Share/Navbar/Navbar";
import Footer from "../Components/Share/Footer/Footer";

const Main = () => {
	return (
		<div>
			<Navbar />
			<Outlet />
			<Footer />
		</div>
	);
};

export default Main;
