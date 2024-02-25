import React from "react";
import { useNavigate } from "react-router-dom";

export const About = () => {
  const navigate=useNavigate();
  return (
    <div>
      <div
        className="h-[50vh] p-16 "
        style={{
          backgroundImage: `url(${require("../images/breadcrumb/0.breadcrumb-bg.jpg")})`,
        }}
      >
        <div className=" grid  justify-center text-center text-white space-y-2">
          {" "}
          <p className="text-lg">ALL YOU NEED TO</p>
          <p className="text-lg">KNOW</p>
          <p className="text-yellow-500 text-3xl font-bold">ABOUT </p>
          <p className="text-3xl font-semibold">HARMONI</p>
          <div className="flex justify-center space-x-5 text-sm">
            <p className="font-bold cursor-pointer" onClick={()=>navigate("/")}>Home </p>
            <div className="h-4  bg-white w-0.5"></div>
            <p>About Us</p>
            
          </div>
        </div>
      </div>
      <div className="bg-black">
        <div className="flex w-full text-left text-white px-28 ">
          <div className="w-full space-y-2">
            <p className="text-xs">We are harmoni</p>
            <p className="text-2xl font-bold">
              No.1 Events <span className="flex">Management</span>
            </p>
            <p className="text-xs">Ger Started!</p>
          </div>
          <div className="w-full ">
            <div className="flex">
              <p className="text-xl  font-bold">our mission</p>
              <div className="bg-yellow-500 h-1 w-10 m-5  "></div>
            </div>{" "}
            <p className="text-sm text-[#f3eeee]">
              Lorel ipsum dollor site amet the best
              <span className="flex">
                consectuer adipiscing elites sed diam
              </span>{" "}
              nonummy nibh euismod tincidunt ut
              <span className="flex">
                {" "}
                laoreet dolore magna aliquam erat
              </span>{" "}
              volutpat insignia the consectuer{" "}
              <span className="flex">adipiscing elit.</span>{" "}
            </p>
            <p className="text-sm font-bold italic pt-3">
              {" "}
              Lorel ipsum dollor site amet the best
              <span className="flex">
                {" "}
                consectuer adipiscing elites sed diam
              </span>{" "}
              nonummy nibh euismod.
            </p>
          </div>
          <div className="w-full ">
            <div className="flex">
              <p className="text-xl  font-bold">our vision</p>
              <div className="bg-yellow-500 h-1 w-10 m-5 "></div>
            </div>
            <p className="text-sm text-[#f3eeee]">
              Lorel ipsum dollor site amet the best
              <span className="flex">
                consectuer adipiscing elites sed diam
              </span>{" "}
              nonummy nibh euismod tincidunt ut
              <span className="flex">
                {" "}
                laoreet dolore magna aliquam erat
              </span>{" "}
              volutpat insignia the consectuer{" "}
              <span className="flex">adipiscing elit.</span>{" "}
            </p>
            <p className="text-sm font-bold italic pt-3">
              {" "}
              Lorel ipsum dollor site amet the best
              <span className="flex">
                {" "}
                consectuer adipiscing elites sed diam
              </span>{" "}
              nonummy nibh euismod.
            </p>
          </div>
        </div>
        <div className="text-white flex my-10 px-60">
          <div
            className="w-full max-w-max bg-center px-11 py-20 bg-cover "
            style={{
              backgroundImage: `url(${require("../images/about/company-age-bg.jpg")})`,
            }}
          >
            <img
              className="text-end w-[40vh]"
              src={require("../images/about/company-banner.png")}
            ></img>
          </div>
          <div className="w-full"></div>
        </div>

        <div className=" flex space-x-7 px-4">
          <div className="w-full bg-white rounded">
            <div className="w-full max-w-max mx-auto">
              <p className="text-center">study with us </p>
              <p className="text-sm">Visit Our World class Facility </p>
              <p className="">for bSouth African Scientist</p>
              <p>and Spectrum</p>
            </div>
          </div>
          <div className="w-full bg-white rounded ">
            <div className="w-full max-w-max mx-auto">
              <p className="text-center">study with us </p>
              <p className="text-sm">Visit Our World class Facility </p>
              <p className="">for bSouth African Scientist</p>
              <p>and Spectrum</p>
            </div>
          </div>
          <div className="w-full bg-white rounded ">
            <div className="w-full max-w-max mx-auto">
              <p className="text-center">study with us </p>
              <p className="text-sm">Visit Our World class Facility </p>
              <p className="">for bSouth African Scientist</p>
              <p>and Spectrum</p>
            </div>
          </div>
          <div className="w-full bg-white rounded ">
            <div className="w-full max-w-max mx-auto">
              <p className="text-center">study with us </p>
              <p className="text-sm">Visit Our World class Facility </p>
              <p className="">for bSouth African Scientist</p>
              <p>and Spectrum</p>
            </div>
          </div>
        </div>
        <div className=" flex space-x-7 px-4 pt-4">
          <div className="w-full bg-white rounded">
            <div className="w-full max-w-max mx-auto">
              <p className="text-center">study with us </p>
              <p className="text-sm">Visit Our World class Facility </p>
              <p className="">for bSouth African Scientist</p>
              <p>and Spectrum</p>
            </div>
          </div>
          <div className="w-full bg-white rounded ">
            <div className="w-full max-w-max mx-auto">
              <p className="text-center">study with us </p>
              <p className="text-sm">Visit Our World class Facility </p>
              <p className="">for bSouth African Scientist</p>
              <p>and Spectrum</p>
            </div>
          </div>
          <div className="w-full bg-white rounded ">
            <div className="w-full max-w-max mx-auto">
              <p className="text-center">study with us </p>
              <p className="text-sm">Visit Our World class Facility </p>
              <p className="">for bSouth African Scientist</p>
              <p>and Spectrum</p>
            </div>
          </div>
          <div className="w-full bg-white rounded ">
            <div className="w-full max-w-max mx-auto">
              <p className="text-center">study with us </p>
              <p className="text-sm">Visit Our World class Facility </p>
              <p className="">for bSouth African Scientist</p>
              <p>and Spectrum</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
