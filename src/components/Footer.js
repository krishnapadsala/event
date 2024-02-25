import React from "react";
import { RiReactjsLine } from "react-icons/ri";

export const Footer = () => {
  return (
    <div className="bg-blue-950">
      <div className="  space-y-8 text-center pt-20">
        <p className="text-pink-400 text-4xl font-bold text-center   ">
          Do you want to step in to the
          <span className="grid"> future of Your Upcoming Event</span>
        </p>
        <button className="border text-white p-2 text-sm pb-4 ">
          Request Early Access
        </button>
      </div>
      <div className="w-full flex text-white p-36 text-xs">
        <div className="w-full space-y-3  ">
          <RiReactjsLine className="text-blue-400  text-2xl  ml-7" />
          <p>
            Crechterwoord k12 182 DK Alknjkcb,
            <span className="flex">All Righ Reserved</span>
          </p>
          <div className="pt-20 space-y-3">
          <p className="font-semibold">Get in touch </p>
          <p>Crechterwoord k12 182 DK Alknjkcb</p>
          <p>085-132567</p>
          <p>info@payme.net</p>
          </div>
        </div>
        <div className="w-full space-y-3  ">
          <p className="font-semibold">Links</p>
          <p>Overonce</p>
          <p>Social Media</p>
          <p>Counters</p>
          <p>Contect</p>
      <p className="text-xs text-center text-white  pt-36">@2021 GTP-3. All Right Reserved.</p>

        </div>
        <div className="w-full  space-y-3 ">
          <p className="font-semibold">Company</p>
          <p>Tearms & Conditions</p>
          <p>Privacy policy</p>
          <p>Contect</p>
        </div>
      </div>

    </div>
  );
};
