import React from "react";

const OurTeam = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between gap-6 md:gap-0 my-16">
      <div className="md:w-1/4 ms-0 md:ms-16">
        <h2 className="text-3xl font-bold font-manrope my-4">Our talented Team</h2>
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:w-4/6 text-center">
        <div className="bg-white text-center rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300">
          <div className="mb-4 w-[200px] mx-auto">
            <img
              src='https://i.ibb.co/p0BBvrN/young-man-white-shirt-looking-camera-looking-happy.jpg'
              alt="Team Card"
              className="w-full h-auto rounded-md"
            />
          </div>
          <h2 className="text-xl font-semibold mb-2">Blake Matthews</h2>
          <p className="text-gray-600 mb-4">CEO & Co-Founder</p>
          <div className="border-t pt-4 text-sm text-gray-500">
            {/* Additional card content, such as CEO's message, team quote, achievements, etc. */}
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300">
          <div className="mb-4 w-[200px] mx-auto">
            <img
              src='https://i.ibb.co/Jdr0Rqr/portrait-man-laughing.jpg'
              alt="Team Card"
              className="w-full h-auto rounded-md"
            />
          </div>
          <h2 className="text-xl font-semibold mb-2">Jack Newman</h2>
          <p className="text-gray-600 mb-4">CEO</p>
          <div className="border-t pt-4 text-sm text-gray-500">
            {/* Additional card content, such as CEO's message, team quote, achievements, etc. */}
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300">
          <div className="mb-4 w-[200px] mx-auto">
            <img
              src='https://i.ibb.co/gS55jTY/portrait-smiling-charming-young-man-grey-t-shirt-standing-against-plain-background.jpg'
              alt="Team Card"
              className="w-full h-auto rounded-md"
            />
          </div>
          <h2 className="text-xl font-semibold mb-2">Sarinia Martins</h2>
          <p className="text-gray-600 mb-4">Marketing</p>
          <div className="border-t pt-4 text-sm text-gray-500">
            {/* Additional card content, such as CEO's message, team quote, achievements, etc. */}
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300">
          <div className="mb-4 w-[200px] mx-auto">
            <img
              src='https://i.ibb.co/syKxnvs/smiley-handsome-man-posing.jpg'
              alt="Team Card"
              className="w-full h-auto rounded-md"
            />
          </div>
          <h2 className="text-xl font-semibold mb-2">Spencer Wright</h2>
          <p className="text-gray-600 mb-4">Project management</p>
          <div className="border-t pt-4 text-sm text-gray-500">
            {/* Additional card content, such as CEO's message, team quote, achievements, etc. */}
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300">
          <div className="mb-4 w-[200px] mx-auto">
            <img
              src='https://i.ibb.co/1bQRnJB/happy-woman-gray-polo-shirt-with-pink-pin-button.jpg'
              alt="Team Card"
              className="w-full h-auto rounded-md"
            />
          </div>
          <h2 className="text-xl font-semibold mb-2">Caroline Ming</h2>
          <p className="text-gray-600 mb-4">Sales</p>
          <div className="border-t pt-4 text-sm text-gray-500">
            {/* Additional card content, such as CEO's message, team quote, achievements, etc. */}
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300">
          <div className="mb-4 w-[200px] mx-auto">
            <img
              src='https://i.ibb.co/FYL9mw8/portrait-handsome-man-blue-shirt-isolated-white.jpg'
              alt="Team Card"
              className="w-full h-auto rounded-md"
            />
          </div>
          <h2 className="text-xl font-semibold mb-2">Anna Mills</h2>
          <p className="text-gray-600 mb-4">Design lead</p>
          <div className="border-t pt-4 text-sm text-gray-500">
            {/* Additional card content, such as CEO's message, team quote, achievements, etc. */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
