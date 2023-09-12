import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";
import Container from "../../Components/Shared/Container/Container";
import Congratulation from "../../Components/Shared/Congratulation/Congratulation";

const Contact = () => {
	const form = useRef();
	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm("service_3ytmgs7", "template_70g2efs", form.current, "20lU8cjsUmR77TPiI")
			.then(
				(result) => {
					console.log(result.text);
				},
				(error) => {
					console.log(error.text);
				}
			);
	};

	const notify = () => toast("successfully send your email");
	return (
		<div className="bg-gradient-to-t from-[#e5f0fd] to-[rgba(21, 21, 21, 0)] mt-[96px]">
			<Container>
				<div>
					<h2 className="text-center text-[56px] font-bold md:mb-16 mb-8">
						Get in touch with us
					</h2>
					<div className="contact-section bg-indigo-100 md:py-12 grid md:grid-cols-2 justify-between gap-6 items-center rounded-2xl py-10">
						<div className="md:mx-8 mx-4">
							<div className="my-8">
								<h4 className="text-3xl md:text-[36px] font-bold">
									Drop us a message
								</h4>
								<p className="text-[16px] md:text-[18px] mt-3">
									will you get back to you as soon as possible
								</p>
							</div>
							<form ref={form} onSubmit={sendEmail}>
								<div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-between my-2">
									<div className="w-full">
										<input
											className="rounded-lg w-full py-5 pl-6 focus:outline-[#6b7cff]"
											type="name"
											name="user_name"
											placeholder="Full Name"
										/>
									</div>
									<div className="w-full">
										<input
											className="rounded-lg w-full py-5 pl-6 focus:outline-[#6b7cff]"
											type="name"
											name="company"
											placeholder="Company Name"
										/>
									</div>
								</div>
								<div>
									<input
										className="w-full my-2 py-5 pl-6 rounded-lg focus:outline-[#6b7cff]"
										type="email"
										placeholder="Work Email"
										name="user_email"
									/>
								</div>
								<div>
									<input
										className="w-full my-2 py-5 pl-6 rounded-lg focus:outline-[#6b7cff]"
										type="text"
										placeholder="Subject"
										name="subject"
									/>
								</div>
								<div>
									<textarea
										className="w-full my-2 py-5 pl-6 rounded-lg focus:outline-[#6b7cff] h-[148px]"
										placeholder="Message"
										name="message"
									/>
								</div>
								<input
									onClick={notify}
									className="bg-secondary hover:bg-transparent border-2 hover:border-[#1d2130] duration-500 spacing-2 w-full py-2 md:py-3 rounded-md hover:rounded-md font-medium md:font-semibold font-NotoSans text-white hover:text-[#1d2130]"
									type="submit"
									value="Send"
								/>
								<Toaster />
							</form>
						</div>

						<div className="contact-details mx-4 md:mx-8 py-4 md:py-0">
							<div className="flex items-center mt-5 md:mt-0">
								<div className="mr-4">
									<svg
										width="48"
										height="48"
										viewBox="0 0 48 48"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<circle cx="24" cy="24" r="24" fill="#6B7CFF" />
										<path
											d="M17.63 15.8333C17.7 16.8717 17.875 17.8867 18.155 18.855L16.755 20.255C16.2767 18.855 15.9733 17.3733 15.8683 15.8333H17.63ZM29.1333 29.8567C30.125 30.1367 31.14 30.3117 32.1667 30.3817V32.12C30.6267 32.015 29.145 31.7117 27.7333 31.245L29.1333 29.8567ZM18.75 13.5H14.6667C14.025 13.5 13.5 14.025 13.5 14.6667C13.5 25.6217 22.3783 34.5 33.3333 34.5C33.975 34.5 34.5 33.975 34.5 33.3333V29.2617C34.5 28.62 33.975 28.095 33.3333 28.095C31.8867 28.095 30.475 27.8617 29.1683 27.43C29.0517 27.3833 28.9233 27.3717 28.8067 27.3717C28.5033 27.3717 28.2117 27.4883 27.9783 27.71L25.4117 30.2767C22.11 28.585 19.4033 25.89 17.7233 22.5883L20.29 20.0217C20.6167 19.695 20.71 19.24 20.5817 18.8317C20.15 17.525 19.9167 16.125 19.9167 14.6667C19.9167 14.025 19.3917 13.5 18.75 13.5Z"
											fill="white"
										/>
									</svg>
								</div>{" "}
								<div className="">
									<span className="md:text-2xl font-bold">+88 01518-726852</span>
									<p>Free support</p>
								</div>
							</div>
							<div className="flex items-center my-5">
								<div className="mr-4">
									<svg
										width="48"
										height="48"
										viewBox="0 0 48 48"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<circle cx="24" cy="24" r="24" fill="#6B7CFF" />
										<path
											d="M17.035 32.0593L20.7917 22.94L19.625 32.0714L17.035 32.0593ZM27.2083 22.9521L30.965 32.0714L28.375 32.0714L27.2083 22.9521ZM13.5 34.4879L21.6667 34.5L24 16.2857L26.3333 34.5L34.5 34.4879L24 9L13.5 34.4879Z"
											fill="white"
										/>
									</svg>
								</div>{" "}
								<div className="">
									<span className="md:text-2xl font-bold">
										skshariful10@gmail.com
									</span>
									<p>Help email support</p>
								</div>
							</div>
							<div className="flex items-center">
								<div className="mr-4">
									<svg
										width="48"
										height="48"
										viewBox="0 0 48 48"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<circle cx="24" cy="24" r="24" fill="#6B7CFF" />
										<path
											d="M36 15.9375C36 14.5969 34.92 13.5 33.6 13.5H14.4C13.08 13.5 12 14.5969 12 15.9375V30.5625C12 31.9031 13.08 33 14.4 33H33.6C34.92 33 36 31.9031 36 30.5625V15.9375ZM33.6 15.9375L24 22.0312L14.4 15.9375H33.6ZM33.6 30.5625H14.4V18.375L24 24.4688L33.6 18.375V30.5625Z"
											fill="white"
										/>
									</svg>
								</div>{" "}
								<div className="">
									<span className="md:text-2xl font-bold">
										antora.taslima97@gmail.com
									</span>
									<p>Seals Enquiry</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<Congratulation></Congratulation>
			</Container>
		</div>
	);
};

export default Contact;
