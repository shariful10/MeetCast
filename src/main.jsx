import React from "react";
import "./index.css";
import ReactDOM from "react-dom/client";
import { router } from "./Routes/Routes";
import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router-dom";
import AuthProvider from "./Providers/AuthProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
	<AuthProvider>
		<Toaster
			toastOptions={{
				success: {
					style: {
						background: "black",
					},
				},
				error: {
					style: {
						background: "black",
					},
				},
				style: {
					color: "white",
				},
			}}
		/>
		<RouterProvider router={router} />
	</AuthProvider>
);
