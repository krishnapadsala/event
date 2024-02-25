import axios from "axios";
import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

export const A_contect = () => {
  const [data, setData] = useState();
  //   const token = Cookies.get(accessToken);

  const datafatch = async () => {
    await axios
      .get("http://localhost:3046/api/v1/contact/allmessage", {
        headers: { Authorization: sessionStorage.getItem("adminToken") },
      })
      .then((res) => setData(res.data.data))
      
      .catch((err) => toast.error(err));
  };

  useEffect(() => {
    datafatch();
  },[]);

  return (
    <div className="">
      <table className=" w-full">
        <thead className="">
          <tr className="bg-black text-xs text-white">
            <th className="px-4  py-3  ">Id</th>
            <th className="px-4  py-3  ">Name</th>
            <th className="px-4  py-3  ">Email</th>
            <th className="px-4  py-3  ">Phone</th>
            <th className="px-4  py-3 ">Message</th>
          </tr>
        </thead>

        <tbody>
          {data?.map((e, i) => {
            return (
              <tr
                key={i}
                className="border-2 text-center border-b-2 text-xs bg-gray-190  "
              >
                <td className=" py-2 ">{i + 1}</td>
                <td className=" py-2 ">{e.fullName}</td>
                <td className=" py-2 ">{e.email}</td>
                <td className=" py-2 ">{e.mobile_no}</td>
                <td className=" py-2 ">{e.message}</td>
              
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
