import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import AuthProvider from "./Providers/AuthProvider";
import { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { router } from "./Routes/Routes";
import { HelmetProvider } from "react-helmet-async";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<HelmetProvider>
			<QueryClientProvider client={queryClient}>
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
			</QueryClientProvider>
		</HelmetProvider>
	</React.StrictMode>
);
