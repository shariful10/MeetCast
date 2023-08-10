import React from "react";
import Container from "../../../components/Shared/Container/Container";

const CallToAction = () => {
  return (
    <Container>
      <div className="relative h-[500px] text-white max-w-7xl mx-auto my-16">
        <img
          className="absolute inset-0 w-full h-full object-cover object-center rounded-2xl"
          src="https://images.unsplash.com/photo-1573164574572-cb89e39749b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80"
          alt=""
        />
        <div className="absolute inset-0 flex flex-col text-center items-center justify-center z-10 max-w-2xl mx-auto">
          <h2
            className="text-3xl md:text-5xl font-bold uppercase"
            data-aos="fade-up"
            data-aos-duration="1200"
          >
            Your all-in-one platform
          </h2>
          <p className="my-8" data-aos="fade-up" data-aos-duration="1200">
            The company aims to provide tools that enhance collaboration among
            team members. Video calls can make it easier to share ideas,
            presentations, documents, and other visual materials.
          </p>
          <div data-aos="fade-up" data-aos-duration="1200">
            <button className="bg-secondary secondary_button w-[150px] py-3 md:py-4 rounded-full font-medium md:font-semibold font-NotoSans text-white">
              SignUp Now
            </button>
          </div>
        </div>
        <div className="absolute inset-0 bg-black opacity-70 rounded-2xl"></div>
      </div>
    </Container>
  );
};

export default CallToAction;
