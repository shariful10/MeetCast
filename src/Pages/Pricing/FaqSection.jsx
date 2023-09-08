import { Accordion } from "flowbite-react";
import React from "react";
import Container from "../../Components/Shared/Container/Container";
("use client");
const FaqSection = () => {
  return (
    <Container>
      <div className="lg:flex lg:justify-around px-10 font-bold gap-6 my-40">
        <div className="w-full lg:w-1/2">
          {/* <h3 className="text-4xl">Frequestly Asked <br /> Questions</h3> */}
          <img src="https://i.ibb.co/ygqX8FG/question-mark-bubble-speech-sign-symbol-icon-3d-rendering.jpg alt=" />
        </div>
        <div className="w-full lg:w-4/6">
          <Accordion>
            <Accordion.Panel>
              <Accordion.Title>How do I grow my business?</Accordion.Title>
              <Accordion.Content>
                <p className="mb-2 text-gray-600">
                  <p>
                    Flowbite is an open-source library of interactive components
                    built on top of Tailwind CSS including buttons, dropdowns,
                    modals, navbars, and more.
                  </p>
                </p>
                <p className="text-gray-600">
                  <p>Check out this guide to learn how to</p>

                  <p>
                    and start developing websites even faster with components on
                    top of Tailwind CSS.
                  </p>
                </p>
              </Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
              <Accordion.Title>Can I cancel my subscription?</Accordion.Title>
              <Accordion.Content>
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  <p>
                    Flowbite is first conceptualized and designed using the
                    Figma software so everything you see in the library has a
                    design equivalent in our Figma file.
                  </p>
                </p>
                <p className="text-gray-500 dark:text-gray-400">
                  <p>Check out the</p>
                  <a
                    className="text-cyan-600 hover:underline dark:text-cyan-500"
                    href="https://flowbite.com/figma/"
                  >
                    <p>Figma design system</p>
                  </a>
                  <p>
                    based on the utility classes from Tailwind CSS and
                    components from Flowbite.
                  </p>
                </p>
              </Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
              <Accordion.Title>How do I contact the support?</Accordion.Title>
              <Accordion.Content>
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  <p>
                    The main difference is that the core components from
                    Flowbite are open source under the MIT license, whereas
                    Tailwind UI is a paid product. Another difference is that
                    Flowbite relies on smaller and standalone components,
                    whereas Tailwind UI offers sections of pages.
                  </p>
                </p>
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  <p>
                    However, we actually recommend using both Flowbite, Flowbite
                    Pro, and even Tailwind UI as there is no technical reason
                    stopping you from using the best of two worlds.
                  </p>
                </p>
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  Learn more about these technologies:
                </p>
              </Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
              <Accordion.Title>Is a credit card required?</Accordion.Title>
              <Accordion.Content>
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  <p>
                    The main difference is that the core components from
                    Flowbite are open source under the MIT license, whereas
                    Tailwind UI is a paid product. Another difference is that
                    Flowbite relies on smaller and standalone components,
                    whereas Tailwind UI offers sections of pages.
                  </p>
                </p>
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  <p>
                    However, we actually recommend using both Flowbite, Flowbite
                    Pro, and even Tailwind UI as there is no technical reason
                    stopping you from using the best of two worlds.
                  </p>
                </p>
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  Learn more about these technologies:
                </p>
              </Accordion.Content>
            </Accordion.Panel>
          </Accordion>
        </div>
      </div>
    </Container>
  );
};

export default FaqSection;
