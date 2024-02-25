import axios from "axios";
import { useFormik } from "formik";
import Cookies from "js-cookie";
import React, { useState } from "react";
import { FaRegCopyright } from "react-icons/fa";
import { MdOutlineLock } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const Login = () => {
  const navigate = useNavigate();

  const { errors, values, handleSubmit, handleBlur, handleChange, touched } =
    useFormik({
      initialValues: { mobile_no: "", password: "" },
      validationSchema: "",
      onSubmit: async(data, action) => {
        await axios
        .post("http://localhost:3046/api/v1/users/login", data)
        .then((res) => {
          console.log(res);
          if (res.data?.success == true) {
            Cookies.set("accessToken", res.data.accessToken);
            toast.success(res.data.message);
            navigate("/");
            window.location.reload();
          } else {
            toast.error(res.data.message);
          }
        })
        .catch((err) => toast.error(err));
      },
    });

  return (
    <div className='bg-[url("https://source.unsplash.com/random")] bg-center bg-cover h-screen w-full flex'>
      <div className="w-full"></div>
      <div className=" min-w-[380px] bg-white ">
        <div className="w-full flex justify-center pt-9">
          <MdOutlineLock className="bg-purple-700 text-3xl  text-white rounded-full p-1.5  " />
        </div>
        <p className="font-normal grid text-center">Sign in</p>
        <form onSubmit={handleSubmit} className="p-5 space-y-2">
          <div className="grid space-y-4 ">
            <input
              className=" pl-2  border border-gray-400 p-2.5 text-sm rounded   "
              type="text"
              name="mobile_no"
              value={values.mobile_no}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="mobile number*"
            />
            <input
              className="pl-2  border border-gray-400 p-2.5 text-sm rounded  "
              type="password"
              name="password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Password*"
            />
          </div>
          <div className="">
            <input className="-pt-4 " type="checkbox" />
            <label className="text-xs font-medium"> Remember me</label>
          </div>
          <button className="w-full bg-blue-600 text-white p-1.5 rounded font-semibold text-xs">
            SIGN IN
          </button>
          <div className="w-full flex justify-between ">
            <p
              onClick={() => navigate("/forgot_password")}
              className="text-xs font-medium cursor-pointer"
            >
              Forgot password?
            </p>
            <p
              className="text-xs  font-medium cursor-pointer"
              onClick={() => navigate("/register")}
            >
              Don't have an account? Sign Up
            </p>
          </div>

          <div className="w-full flex items-center text-xs text-gray-500 pt-6 pl-20 space-x-1 ">
            <p>Copyright</p>
            <FaRegCopyright />
            <p> Your Website 2023</p>
          </div>
        </form>
      </div>
    </div>
  );
};
