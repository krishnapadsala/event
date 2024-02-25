import axios from "axios";
import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";

export const Booking = () => {
  const [data, setData] = useState();

  useEffect(() => {
    const fetch = async () => {
      await axios
        .get("http://localhost:3046/api/v1/users/getbooking", {
          headers: { Authorization: Cookies.get("accessToken") },
        })
        .then((res) => {
          setData(res.data.data);
        })
        .catch((err) => console.log(err));
    };
    fetch();
  }, []);
  return (
    <div className="flex flex-wrap">
      {data?.map((ee, i) => {
        const e = ee.event_id;
        return (
          <div
            key={i}
            className="w-full  cursor-pointer max-w-[100%] md:max-w-[50%] lg:max-w-[25%] p-8"
          >
            <div className="rounded-lg overflow-hidden">
              <img className="  w-full h-96 object-cover" src={e.image} />
              <div className="bg-black text-white text-base p-1 pl-2">
                {e.s_date}
              </div>
              <div className=" pt-3 space-y-1 bg-[#f2f2f1] p-4">
                <p className="font-bold text-lg">{e.description}</p>
                <p className="text-gray-600">{e.location}</p>
                <p className="text-gray-600 text-sm">{e.title}</p>
                <p className="text-gray-600 text-sm">₹ {e.price} onwards</p>
              </div>
            </div>
            {/* <div
            className="bg-cover bg-center rounded-b-xl w-full max-w-sm space-y-2 px-5 pt-2 "
            style={{
              backgroundImage: `url(${require("../../images/iamge.jpg")})`,
            }}
          >
            <p className="bg-[#adb1b39b] rounded-xl text-center text-xs p-1 font-medium">
              {e.title}
            </p>
            <p className="bg-[#adb1b39b] rounded-xl text-center text-xs p-1 font-medium">
              {" "}
              {e.s_date}
            </p>
            <p className="bg-[#adb1b39b] rounded-xl  text-xs w-full  max-w-max p-1 px-3 font-medium ">
              {" "}
              {e.price}
            </p>

            <div className="text-sm flex items-center ">
              <MdOutlineWatchLater className="" />
              <p className="">
                Start {e.s_time}-{e.e_time}
              </p>
            </div>
            <div className="text-sm flex items-center ">
              {" "}
              <FaLocationDot className="" /> <p className="">{e.location}</p>
            </div>
            <div className="justify-center flex p-2">
              <button
                className="bg-cover bg-center rounded-sm text-white text-xs p-2 px-9"
                style={{
                  backgroundImage: `url(${require("../../images/iamge2.jpg")})`,
                }}
                onClick={() => navigate(`/details/${e._id}`)}
              >
                VIEW IN DETAILS
              </button>
            </div>
          </div> */}
          </div>
        );
      })}
    </div>
  );
};
