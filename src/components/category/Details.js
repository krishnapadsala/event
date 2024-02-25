import axios from "axios";
import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

export const Details = () => {
  const [data, setData] = useState();
  const { id } = useParams();

  console.log(data);

  useEffect(() => {
    (async () => {
      const data = { _id: id };
      await axios
        .post("http://localhost:3046/api/v1/admin/showevents", data)
        .then((res) => {
          setData(res.data.data);
        })
        .catch((err) => console.log(err));
    })();
  }, []);
  console.log(data);

  const loadScript = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;

      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  };

  const displayRazorpay = async (amount, event_id) => {
    console.log(amount, event_id);
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );
    if (!res) {
      alert("you are offline");
      return;
    }

    const option = {
      key: "rzp_test_dEYhZg38SrkYMD",
      currency: "INR",
      amount: amount * 100,
      name: "event",
      description: "Thanks for buying products from the our website",
      image:
        "https://res.cloudinary.com/dtdlad1ud/image/upload/v1707733051/uhwydfqry5wqwkaazbbk.jpg",
      handler: async function (response) {
        await axios
          .post(
            "http://localhost:3046/api/v1/users/booking",
            { event_id },
            {
              headers: {
                Authorization: Cookies.get("accessToken"),
              },
            }
          )
          .then((res) => toast.success(res.data.message))
          .catch((err) => console.log(err));
      },
      prefill: {
        name: "hello",
      },
    };

    const paymentObject = new window.Razorpay(option);
    paymentObject.open();
  };
  return (
    <div className=" ">
      <div className="overflow-hidden">
        <img className="h-96 w-full object-cover" src={data?.image} />
      </div>
      <div className="space-y-3">
        <div className="w-full flex p-2">
          <div className="bg-white  w-full space-y-2">
            <p className="font-bold text-2xl">{data?.description}</p>
            <div className="flex w-full space-x-2 items-center text-sm text-gray-700">
              <p>{data?.title}</p>
              <div className="h-4 w-0.5 bg-gray-500"></div>
              <p>Hindi</p>
              <div className="h-4 w-0.5 bg-gray-500"></div>
              <p>12Yrs+</p>
              <div className="h-4 w-0.5 bg-gray-500"></div>
              <p>
                {data?.s_time}-{data?.e_time}
              </p>
            </div>
          </div>
          <div className="w-full items-center justify-end flex">
            <button
              onClick={() => displayRazorpay(data?.price, data?._id)}
              className="text-white bg-red-500 py-3 font-semibold px-11 rounded-sm "
            >
              Book
            </button>
          </div>
        </div>
        <div className="w-full  h-0.5 bg-slate-300 "></div>
        <div className="w-full flex items-center space-x-5 p-2 text-gray-500 text-base">
          <p className=" flex  max-w-md text-md ">
            {" "}
            {data?.s_date}- {data?.e_date}
          </p>
          <div className=" flex items-center space-x-1 ">
            {" "}
            <FaLocationDot className="text-yellow-500" />
            <p>{data?.location}</p>
          </div>
          <div className="h-4 w-0.5 bg-gray-500"></div>
          <p className="font-semibold">₹ {data?.price} onwards</p>
        </div>
      </div>

      {/* <div
        className="bg-cover bg-center min-h-max  "
        style={{
          backgroundImage: `url(${require("../../images/iamge.jpg")})`,
        }}
      >
        {" "}
        <div className="space-y-1 p-4">
          <p className="bg-[#babfc185] max-w-md rounded-full text-center text-sm p-1 w-full">
            {data?.title}
          </p>
          <p className="bg-[#babfc185] rounded-full text-center text-sm p-1">
            {data?.s_date}
          </p>
          <p className="bg-[#babfc185] w-full max-w-sm text-sm  text-center rounded-full p-1">
            Tickets from {data?.price}
          </p>
        </div>
        <p className="text-sm px-4">{data?.description}</p>
        <div className="p-4">
          <div className="text-sm flex items-center ">
            <MdOutlineWatchLater className="font-bold px-1 text-2xl" />
            <p className="text-sm">Start 20:00PM-22:00PM</p>
          </div>
          <div className="text-sm flex items-center ">
            {" "}
            <FaLocationDot className="font-bold px-1 text-xl " />{" "}
            <p className="text-sm">{data?.location}</p>
          </div>
        </div>
        <div className=" justify-center flex py-1">
          <button className="border text-blue-500 rounded-md  border-blue-500 p-1 text-sm">
            BOOK EVENT
          </button>
        </div>{" "}
      </div> */}
    </div>
  );
};
