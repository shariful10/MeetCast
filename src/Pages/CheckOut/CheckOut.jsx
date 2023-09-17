import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useParams } from "react-router-dom";
import useAxiosSecure from "../../Components/Hooks/useAxiosSecure";
import Container from "../../Components/Shared/Container/Container";
import { AuthContext } from "../../Providers/AuthProvider";
import Address from "./Address";

const CheckOut = () => {
	const { user } = useContext(AuthContext);
	const [axiosSecure] = useAxiosSecure();

	const [userAddress, setUserAddress] = useState([]);
	// console.log(userAddress);

	// const [monthlyData, setMonthlyData] = useState();
	// const [yearlyData, setYearlyData] = useState();
	const [plan, setPlan] = useState();
	console.log(plan);

	const [monthlyData, setMonthlyData] = useState();

	const foundAddress = userAddress.find((address) => address?.email == user?.email);

	const pricing = useParams();

	// const { _id, price } = monthlyData || {};
	// const { _id:YearlyID,  } = yearlyData || {};

	// const {city,country,email,state,streetAddress,zip} = foundAddress;

	// const orderData = { foundAddress, product: _id, productPrice: price };

	useEffect(() => {
		axiosSecure
			.get(`${import.meta.env.VITE_API_URL}/monthly/${pricing.id}`)
			.then((response) => {
				setPlan(response.data);
			})
			.catch((error) => {
				console.error("Error fetching monthly data:", error);
			});
	}, [axiosSecure, pricing.id]);

	useEffect(() => {
		axiosSecure
			.get(`http://localhost:5000/yearly/${pricing.id}`)
			.then((response) => {
				setPlan(response.data);
			})
			.catch((error) => {
				console.error("Error fetching yearly data:", error);
			});
	}, []);

	useEffect(() => {
		axiosSecure
			.get(`http://localhost:5000/userAddress`)
			.then((response) => {
				setUserAddress(response.data);
			})
			.catch((error) => {
				console.error("Error fetching user address:", error);
			});
	}, [axiosSecure]);

	const {
		register,
		handleSubmit,
		watch,
		reset,
		formState: { errors },
	} = useForm();

	const onSubmit = (data) => {
		data.planId = pricing;
		// order
		fetch(`http://localhost:5000/order`, {
			method: "POST",
			headers: { "content-type": "application/json" },
			body: JSON.stringify(data),
		})
			.then((response) => response.json())
			.then((result) => {
				window.location.replace(result.url);
				// console.log(result);
			})
			.catch((error) => {
				// Handle any errors that occur during the request
				console.error(error);
			});
	};

	return (
		<Container>
			<div className="flex justify-around gap-6 my-10 mt-36">
				<div className="w-1/2">
					<div className="w-full">
						<div className="flex justify-around items-center gap-6">
							<h2 className="text-3xl font-semibold font-manrope">CheckOut</h2>
							<p>Your Products / Checkout</p>
						</div>
						{/* User  */}
						{user && (
							<div className="px-6 py-6 mt-10 rounded-xl shadow-lg ">
								<div className="flex justify-around -ms-8 gap-4 items-center my-6">
									<p className="text-xl font-semibold">Sign in</p>
									<Link to="/login" className="text-xs font-bold text-blue-400">
										{" "}
										sign in difference account{" "}
									</Link>
								</div>
								<div className="flex justify-around gap-4 items-center my-6">
									<div>
										<p className="text-xs font-semibold">Name</p>
										<p className="text-gray-600 mt-1">{user.displayName}</p>
									</div>
									<div>
										<p className="text-xs font-semibold"> Email Address </p>
										<p className="text-gray-600 mt-1">{user.email}</p>
									</div>
								</div>
							</div>
						)}
						{foundAddress && (
							<div
								style={{
									boxShadow:
										"0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.10)",
								}}
								className="px-6 py-6 mt-10  rounded-xl shadow-lg "
							>
								<div className="flex justify-around">
									<div className="-ms-[55px]">
										<p className="text-xl font-semibold mb-2">Address </p>
										<p>
											{foundAddress?.state},{foundAddress.country}{" "}
										</p>
										<p>
											{foundAddress?.city} {foundAddress?.state}{" "}
											{[foundAddress?.zip]}
										</p>
									</div>
									<div>
										<h2 className="text-xs cursor-pointer text-blue-400 font-bold">
											Edit
										</h2>
									</div>
								</div>
							</div>
						)}
						{/* CheckOut Form */}
					</div>
					<div>{user ? <></> : <Address></Address>}</div>
				</div>
				<div className="w-1/2">
					<div className="bg-white shadow-lg rounded-lg overflow-hidden">
						<div className="p-4">
							{/* Product Title */}
							<div className="flex justify-between items-start">
								<div>
									<h2 className="text-2xl font-semibold mb-2">Order Summary</h2>
									<p className="text-xs">1 item(s)</p>
								</div>

								<select>
									<option value="usd">USD</option>
									<option value="usd">BDT</option>
								</select>
							</div>

							<div className="divider"></div>
							<div className="flex justify-between items-start">
								<div>
									<h2 className="text-lg font-semibold">{plan?.title}</h2>
									<p>10 User(s)</p>
									<p className="text-xs">Annual Subscription</p>
								</div>

								<p>${plan?.price}</p>
							</div>

							<div className="divider"></div>
							<div className="flex justify-between items-start">
								<div>
									<p className="text-sm">Estimated Tax</p>
									<p className="text-lg font-semibold">Total</p>
								</div>

								<div>
									<p>$00.00</p>
									<p>${plan?.price}.00</p>
								</div>
							</div>
							<div className="divider"></div>
							{/* Pricing */}
							<div className="mb-4 mt-10">
								<form
									onSubmit={handleSubmit(onSubmit)}
									// style={{
									//   boxShadow:
									//     "0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.10)",
									// }}
									className="w-full py-4 px-4 my-6  rounded-xl"
								>
									<div className="flex justify-center gap-6 ">
										<input
											required
											type="text"
											className="border border-gray-400 w-[668px] h-10 px-4 py-2 rounded-md"
											placeholder="Name"
											{...register("name", { required: true })}
										/>
									</div>
									<div className="flex justify-center gap-6 my-4">
										<input
											required
											className="border border-gray-400 w-[313px] h-10 px-4 py-2 rounded-md"
											placeholder="Email"
											{...register("email", { required: true })}
										/>
										<input
											required
											className="border border-gray-400 w-1/5 h-10 px-4 py-2 rounded-md"
											placeholder="Number"
											{...register("number", { required: true })}
										/>
										<input
											required
											className="border border-gray-400 w-1/5 h-10 px-4 py-2 rounded-md"
											placeholder="City"
											{...register("city", { required: true })}
										/>
									</div>
									<div className="flex justify-center gap-6 my-4">
										<input
											required
											className="border border-gray-400 w-[668px]  h-10 px-4 py-2 rounded-md"
											placeholder="County Region"
											{...register("country", { required: true })}
										/>
										{errors.city && (
											<p className="text-red-500">City is required</p>
										)}
									</div>
									<input
										className="bg-secondary btn-block pb-5 md:px-10 py-2 md:py-3  cursor-pointer rounded-full md:font-semibold font-NotoSans primary_button text-white"
										type="submit"
									/>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div>
				{!user ? (
					<div className="w-4/6 ">
						<div
							style={{
								"box-shadow":
									"0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.10)",
							}}
							className="py-6 ps-20 mb-6 rounded-xl text-xl font-semibold font-manrope"
						>
							Address
						</div>
						<div
							style={{
								"box-shadow":
									"0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.10)",
							}}
							className="py-6 ps-20 rounded-xl text-xl font-semibold font-manrope"
						>
							Payment Method
						</div>
					</div>
				) : (
					<div></div>
				)}
			</div>
		</Container>
	);
};

export default CheckOut;
