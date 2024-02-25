import axios from "axios";
import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const Header = () => {
  const [user, setUser] = useState();
  const [open, setOpen] = useState(false);
  const [togel, setTogel] = useState(false);
  const token = Cookies.get("accessToken");
  const navigate = useNavigate();

  const datafatch = async () => {
    await axios
      .get("http://localhost:3046/api/v1/users/getcurrentUser", {
        headers: { Authorization: token },
      })
      .then((res) => setUser(res.data.data))
      .catch((err) => toast.error(err));
  };

  useEffect(() => {
    if (token) {
      datafatch();
    }
  });

  return (
    <>
      <div className="w-full bg-black text-white flex justify-between items-center p-4">
        <img className="w-36" src={require("../images/0.site-logo.png")}></img>
        <div className="hidden md:flex items-center text-white text-sm space-x-4">
          <label onClick={() => navigate("/")} className="cursor-pointer">
            HOME
          </label>
          <label onClick={() => navigate("/about")} className="cursor-pointer">
            ABOUT
          </label>
          <label onClick={() => navigate("/events")} className="cursor-pointer">
            EVENTS
          </label>
          <label
            onClick={() => navigate("/gallary")}
            className="cursor-pointer"
          >
            GALLARY
          </label>
          <label
            onClick={() => navigate("/Contect")}
            className="cursor-pointer"
          >
            CONTECT
          </label>
        </div>
        <div className="hidden md:flex items-center text-white space-x-4">
          {user ? (
            <div className="flex cursor-pointer items-center space-x-4 relative">
              <div
                onClick={() => setOpen(!open)}
                className="flex items-center space-x-2"
              >
                <img
                  className="w-10 h-10 bg-white border-2 border-white rounded-full"
                  src={user?.avatar}
                ></img>
                <div>{user ? user.fullName : null}</div>
              </div>
              {open && (
                <div className="bg-white absolute w-28 top-12 right-5  text-black p-2 rounded-md">
                  <ul className="">
                    <li onClick={() => navigate("/account")}>Account</li>
                    <li
                      onClick={() => {
                        navigate("/mybooking");
                        setOpen(false);
                      }}
                    >
                      My booking
                    </li>
                    <li
                      onClick={() => {
                        Cookies.remove("accessToken");
                        navigate("/");
                        window.location.reload();
                      }}
                    >
                      Logout
                    </li>
                  </ul>
                </div>
              )}
            </div>
          ) : (
            <>
              <button
                className="border-2 p-1 text-sm font-semibold rounded-xl"
                onClick={() => navigate("/Login")}
              >
                LOGIN
              </button>
              <button
                className="border-2 p-1 text-sm font-semibold rounded-3xl"
                onClick={() => navigate("/Register")}
              >
                REGISTER
              </button>
            </>
          )}
        </div>
        <div
          onClick={() => setTogel(!togel)}
          className={`text-3xl ${togel && "rotate-180"} duration-300 md:hidden`}
        >
          &#8801;
        </div>
      </div>
      <div
        className={`p-2 ${
          !togel && "scale-0 fixed"
        } duration-300  md:hidden space-y-2`}
      >
        <div className="grid text-sm space-y-1">
          <label onClick={() => navigate("/")} className="cursor-pointer">
            HOME
          </label>
          <label onClick={() => navigate("/about")} className="cursor-pointer">
            ABOUT
          </label>
          <label onClick={() => navigate("/events")} className="cursor-pointer">
            EVENTS
          </label>
          <label
            onClick={() => navigate("/gallary")}
            className="cursor-pointer"
          >
            GALLARY
          </label>
          <label
            onClick={() => navigate("/Contect")}
            className="cursor-pointer"
          >
            CONTECT
          </label>
        </div>
        <div className="items-center space-x-4">
          {user ? (
            <div className="flex cursor-pointer items-center space-x-4 relative">
              <div
                onClick={() => setOpen(!open)}
                className="flex items-center space-x-2"
              >
                <img
                  className="w-10 h-10 bg-white border-2 border-white rounded-full"
                  src={user?.avatar}
                ></img>
                <div>{user ? user.fullName : null}</div>
              </div>
              {open && (
                <div className="bg-white absolute w-28 top-12 right-5  text-black p-2 rounded-md">
                  <ul className="">
                    <li onClick={() => navigate("/account")}>Account</li>
                    <li
                      onClick={() => {
                        navigate("/mybooking");
                        setOpen(false);
                      }}
                    >
                      My booking
                    </li>
                    <li
                      onClick={() => {
                        Cookies.remove("accessToken");
                        navigate("/");
                        window.location.reload();
                      }}
                    >
                      Logout
                    </li>
                  </ul>
                </div>
              )}
            </div>
          ) : (
            <>
              <button
                className="border-2 p-1 text-sm font-semibold rounded-xl"
                onClick={() => navigate("/Login")}
              >
                LOGIN
              </button>
              <button
                className="border-2 p-1 text-sm font-semibold rounded-3xl"
                onClick={() => navigate("/Register")}
              >
                REGISTER
              </button>
            </>
          )}
        </div>
      </div>
    </>
  );
};
