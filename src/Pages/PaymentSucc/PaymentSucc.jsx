import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import useAxiosSecure from "../../Components/Hooks/useAxiosSecure";

const PaymentSucc = () => {
  const { tranId } = useParams();
  const [axiosSecure] = useAxiosSecure();
  const [Payment, setPaymentData] = useState([]);
    console.log(Payment);

  useEffect(() => {
    axiosSecure
      .get(`http://localhost:5000/payment/success/${tranId}`)
      .then((response) => {
        setPaymentData(response.data);
      });
  }, []);

  return (
    <div className="font-manrope">
      <div className="bg-green-100 h-screen  flex justify-center items-center">
        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-12 w-12 text-green-500 mx-auto"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 13l4 4L19 7"
            />
          </svg>
          <h2 className="text-2xl font-semibold mt-4">Payment Successful</h2>
          <div className="text-gray-600 mt-2">
            <p>Total payment </p>
            <p className="text-xl font-bold text-gray-700">
              {Payment?.Payment?.currency} ${" "}
              {Payment?.Payment?.total_amount}.00
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 my-6">
            <div className="border p-4 rounded-lg">
                <p className="text-lg font-semibold">Name</p>
                {Payment?.Payment?.cus_name}
            </div>
            <div className="border p-4 rounded-lg">
                <p className="text-lg font-semibold">Email</p>
                {Payment?.Payment?.cus_email}
            </div>
            <div className="border p-4 rounded-lg"> 
            <p className="text-lg font-semibold">Pack</p>
            {Payment?.products?.title}
            </div>
            <div className="border p-4 rounded-lg"> 
            <p className="text-lg font-semibold">Number</p>
            {Payment?.Payment?.cus_phone}
            </div>
           
          </div>
          <p className="text-lg font-bold text-gray-700">Transaction Id: {tranId} </p>
          <button className="mt-6 px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-md focus:outline-none">
            <Link to='/pricing'>
            Continue Shopping
          </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentSucc;
