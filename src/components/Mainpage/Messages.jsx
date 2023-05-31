import React from "react";
import { IoLocationSharp } from "react-icons/io5";
import { SiGooglemessages } from "react-icons/si";
import { BsTelephone } from "react-icons/bs";
import { HiOutlineSun, HiOutlineMoon } from "react-icons/hi2";
import { Link } from "react-router-dom";
const Messages = (props) => {
  const { isDark, setIsDark, messages } = props;

  return (
    <div className="w-full flex flex-col md:w-[19.5rem] h-screen">
      <div className="my-2 mx-7">
        <div className="flex items-center justify-between">
          <span className="font-bold text-3xl text-blue-500">Messages</span>
          <div className="md:hidden flex  items-center">
            <div
              className="bg-gray-100 shadow-lg flex items-center rounded-full"
              onClick={() => {
                setIsDark(!isDark);
              }}
            >
              <HiOutlineSun
                className="w-7 h-7 p-1.5 shadow-lg cursor-pointer rounded-full"
                style={{
                  backgroundColor: isDark ? "" : "white",
                  color: isDark ? "rgb(107 114 128)" : "rgb(59 130 246)",
                }}
              />
              <HiOutlineMoon
                className="w-7 h-7 p-1.5 shadow-lg cursor-pointer rounded-full"
                style={{
                  backgroundColor: isDark ? "rgb(17 24 39)" : "",
                  color: isDark ? "rgb(59 130 246)" : "rgb(107 114 128)",
                }}
              />
            </div>
            <Link to="/calls">
              <BsTelephone className="w-11 h-11 p-2 rounded-lg text-gray-500" />
            </Link>
          </div>
        </div>
        
        <form className="flex items-center rounded-lg shadow-md bg-gray-200 my-6">
          <label htmlFor="simple-search" className="sr-only">
            Search
          </label>
          <div className="w-full flex">
            <div className="flex items-center justify-center pl-3 pointer-events-none">
              <svg
                aria-hidden="true"
                className="w-5 h-5 text-gray-500 dark:text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
            <input
              type="text"
              id="simple-search"
              className="bg-gray-50 border-0  border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-200 dark:border-0 dark:placeholder-gray-400 dark:text-gray-700 dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search"
              required
            />
          </div>
        </form>
      </div>

      <div className="overflow-y-scroll ml-4">
        <div className="">
          <div className="flex items-center">
            <IoLocationSharp className=" text-gray-400" />
            <span className="text-gray-400 text-sm ml-2">Pinned Message</span>
          </div>

          <div className="my-2 h-52">
            {messages.slice(0, 4).map((k) => (
              <div
                key={k}
                className="h-16 my-1 rounded-lg hover:bg-gray-100 cursor-pointer flex items-center justify-around"
              >
                <img
                  className="w-12 h-12 rounded-full"
                  src="https://e7.pngegg.com/pngimages/84/165/png-clipart-united-states-avatar-organization-information-user-avatar-service-computer-wallpaper-thumbnail.png"
                  alt=""
                />
                <div className="flex flex-col">
                  <span className=" font-bold">Hatypo Studio</span>
                  <span className="text-gray-400 text-sm font-medium">
                    Typing...
                  </span>
                </div>
                <div className="flex flex-col items-end">
                  <span className="text-gray-600 text-xs font-medium">
                    08:00 PM
                  </span>
                  <div className="w-5 h-5 flex justify-center items-center bg-blue-500 rounded-full">
                    <span className="text-white font-semibold">5</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="">
          <div className="flex items-center">
            <SiGooglemessages className="text-gray-400" />
            <span className="text-gray-400 text-sm ml-2">All Message</span>
          </div>

          <div className="my-2">
            {messages.map((k) => (
              <div
                key={k}

                className="h-16 my-1 cursor-pointer rounded-lg hover:bg-gray-100 flex items-center justify-around"
              >
                <div className="flex items-end relative">
                  <img
                    className="w-12 h-12 rounded-full"
                    src="https://e7.pngegg.com/pngimages/84/165/png-clipart-united-states-avatar-organization-information-user-avatar-service-computer-wallpaper-thumbnail.png"
                    alt=""
                  />
                  <div className="w-3 h-3 bg-green-500 border-2 border-white rounded-full absolute right-1"></div>
                </div>

                <div className="flex flex-col">
                  <span className=" font-bold">Hatypo Studio</span>
                  <span className="text-gray-400 text-sm font-medium">
                    Typing...
                  </span>
                </div>
                <div className="flex flex-col items-end">
                  <span className="text-gray-600 text-xs font-medium">
                    08:00 PM
                  </span>
                  <div className="w-5 h-5 flex justify-center items-center bg-blue-500 rounded-full">
                    <span className="text-white font-semibold">5</span>
                  </div>
                </div>
              </div>
            ))}

          </div>
        </div>
      </div>
    </div>
  );
};

export default Messages;
