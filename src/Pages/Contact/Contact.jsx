import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
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
		<div className=" bg-gradient-to-t from-[#e5f0fd] to-[rgba(21, 21, 21, 0)] mt-[96px]">
			<Container>
				<div>
					<h2 className="text-center text-5xl font-bold md:mb-16 mb-8">
						Get in touch with us
					</h2>
					<div className="contact-section bg-indigo-100 md:py-12 grid md:grid-cols-2 justify-between gap-6 items-center rounded-2xl py-10">
						<div className="md:mx-8 mx-4">
							<div className="md:my-8">
								<h4 className="text-xl font-semibold">Drop us a message</h4>
								<p>will you get back to you as soon as possible</p>
							</div>
							<form ref={form} onSubmit={sendEmail}>
								<div className="md:flex justify-between w-full">
									<input
										className="my-2 p-2 w-full rounded-lg"
										type="text"
										placeholder="Full Name"
										name="user_name"
									/>
									<br />
									<input
										className="my-2 md:ml-3 p-2 w-full rounded-lg"
										type="text"
										placeholder="Company Name"
										name="company"
									/>
									<br />
								</div>

								<input
									className="w-full my-2 p-2 rounded-lg"
									type="email"
									placeholder="Work Email"
									name="user_email"
								/>
								<br />

								<input
									className="w-full my-2 p-2 rounded-lg"
									type="text"
									placeholder="Subject"
									name="subject"
								/>
								<br />

								<textarea
									className="w-full my-2 p-2 rounded-lg"
									placeholder="Message"
									name="message"
									rows="5"
								/>
								<br />
								<input
									onClick={notify}
									// className="w-full my-2 p-2 bg-black text-white rounded-lg"
									className="bg-secondary primary_button w-full py-2 md:py-3 rounded-md hover:rounded-md font-medium md:font-semibold font-NotoSans text-white hover:text-[#1d2130]"
									type="submit"
									value="Send"
								/>
								<Toaster />
							</form>
						</div>

						<div className="contact-details mx-4 md:mx-8 py-4">
							<div className="flex items-center mt-5 md:mt-0">
								<div className="bg-indigo-500 rounded-full p-3 mr-4">
									<FaPhoneAlt className="text-white w-6 h-6"></FaPhoneAlt>
								</div>{" "}
								<div className="">
									<span className="md:text-2xl font-bold">+88 01518-726852</span>
									<p>Free support</p>
								</div>
							</div>
							<div className="flex items-center my-5">
								<div className="bg-indigo-500 rounded-full p-3 mr-4">
									<MdOutlineEmail className="text-white w-6 h-6"></MdOutlineEmail>
								</div>{" "}
								<div className="">
									<span className="md:text-2xl font-bold">
										skshariful10@gmail.com
									</span>
									<p>Help email support</p>
								</div>
							</div>
							<div className="flex items-center">
								<div className="bg-indigo-500 rounded-full p-3 mr-4">
									<MdOutlineEmail className="text-white w-6 h-6"></MdOutlineEmail>
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
