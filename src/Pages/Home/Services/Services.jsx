import React from "react";
import waveUp from "../../../assets/wave-up.svg";
import Container from "../../../Components/Shared/Container/Container";
import ServiceCard from "./ServiceCard";
import { PiStudent } from "react-icons/pi";
import { IoBusinessOutline } from "react-icons/io5";
import { RiSchoolFill } from "react-icons/ri";

const Services = () => {
  return (
    <div className="md:flex justify-center">
      <div
        className="g-white bg-cover bg-no-repeat w-full bg-right bottom-0"
        style={{ backgroundImage: `url(${waveUp})` }}
      >
        <Container>
          <div className="text-center">
            <h2
              className="text-3xl md:text-4xl xl:text-5xl font-extrabold mb-4 tracking-tighter capitalize"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              We offer service to all organization
            </h2>
            <p className="text-xl" data-aos="fade-up" data-aos-duration="1600">
              Why kept very ever home mrs. Considered sympathize ten <br />{" "}
              uncommonly occasional assistance sufficient
            </p>
          </div>
          <div className="my-12 flex flex-wrap justify-center items-center gap-8">
            {/* Card Item */}
            <ServiceCard
              animation="fade-down"
              Icon={PiStudent}
              title="Student"
              subTitle="Design remote and hybrid learning environments, empower teachers and students, and create more equitable educational opportunities."
            />
            <ServiceCard
              animation="fade-up"
              Icon={RiSchoolFill}
              title="School"
              subTitle="Improve access and information sharing, build stronger relationships, and better serve your constituents."
            />
            <ServiceCard
              animation="fade-down"
              Icon={IoBusinessOutline}
              title="Commercial Institute"
              subTitle="Improve access and information sharing, build stronger relationships, and better serve your constituents."
            />
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Services;
