import React, { forwardRef, useRef } from "react";
import { BsTelephone } from "react-icons/bs";

import { HiDotsVertical, HiOutlineDotsCircleHorizontal } from "react-icons/hi";

import { HiOutlineVideoCamera } from "react-icons/hi2";
import ChatFooter from "./ChatFooter";

const Chat = forwardRef((props, ref) => {
  const scrollableDivRef = useRef(null);
  const { isDark } = props;

  return (
    <div className="bg-gray-100 hidden flex-grow sm:flex border-x-2 flex-col h-screen">

      <div className="h-24 flex w-full justify-around items-center bg-gray-50">
        <img
          className="w-14 h-14 rounded-full"
          src="https://e7.pngegg.com/pngimages/84/165/png-clipart-united-states-avatar-organization-information-user-avatar-service-computer-wallpaper-thumbnail.png"
          alt=""
        />
        <div className="flex flex-col">
          <span className=" text-2xl font-semibold">Hatypo Studio</span>
          <span className="text-green-600 text-sm font-medium">
            Raul Typing...
          </span>
        </div>
        <div className="flex">
          <img
            className="w-10 h-10 border-2 border-white rounded-full"
            src="https://e7.pngegg.com/pngimages/84/165/png-clipart-united-states-avatar-organization-information-user-avatar-service-computer-wallpaper-thumbnail.png"
            alt=""
          />
          <img
            className="w-10 h-10 border-2 border-white rounded-full -ml-2"
            src="https://e7.pngegg.com/pngimages/84/165/png-clipart-united-states-avatar-organization-information-user-avatar-service-computer-wallpaper-thumbnail.png"
            alt=""
          />
          <img
            className="w-10 h-10 border-2 border-white rounded-full -ml-2"
            src="https://e7.pngegg.com/pngimages/84/165/png-clipart-united-states-avatar-organization-information-user-avatar-service-computer-wallpaper-thumbnail.png"
            alt=""
          />
        </div>
        <div className="flex">
          <HiOutlineVideoCamera className="w-11 h-11 p-2 text-gray-500 cursor-pointer" />
          <BsTelephone className="w-10 h-10 p-2 text-gray-500 cursor-pointer" />
          <HiOutlineDotsCircleHorizontal className="w-10 h-10 p-2 text-gray-500 cursor-pointer" />
        </div>
      </div>

      <div
        ref={scrollableDivRef}
        className="bg-gray-100 border-t-2 pb-4 overflow-y-scroll"
      >
        <div className="m-5 flex items-center justify-between">
          <div className="bg-gray-300 h-0.5 w-[30vh]"></div>
          <span className="text-white shadow-lg w-[22vh] rounded-full p-1 text-center text-sm font-semibold bg-blue-500">
            15 June 2023
          </span>
          <div className="bg-gray-300 h-0.5 w-[30vh]"></div>
        </div>
        <div className="flex flex-col mx-2 space-y-2">
          <div className="flex items-start my-2">
            <img
              className="w-8 h-8 bg-black rounded-full"
              src=""
              alt="User Avatar"
            />
            <div className="flex flex-col ml-2">
              <span className=" font-semibold ml-2">Abhiram</span>
              <div className="flex items-center">
                <div className="bg-white shadow-xl max-w-sm p-3 my-1 rounded-r-lg rounded-bl-lg">
                  <p className="text-gray-800">Hey, how are you?</p>
                  <span className="text-xs text-gray-300">9:47 AM</span>
                </div>
                <HiDotsVertical className="w-6 h-6 text-gray-500 cursor-pointer" />
              </div>
              <div className="w-64 h-64 my-2 border-2 border-blue-500 rounded-lg">
                <img
                  src=""
                  className="w-full h-full rounded-lg bg-black"
                  alt=""
                />
              </div>
            </div>
          </div>

          <div className="flex items-start justify-end my-2">
            <div className="flex items-center">
              <HiDotsVertical className="w-6 h-6  text-gray-500 cursor-pointer" />
              <div className="bg-blue-500 shadow-xl max-w-sm p-3 rounded-l-lg rounded-br-lg  mr-2">
                <p className="text-white">
                  I'm doing great! Thanks for asking.
                </p>
                <span className="text-xs text-gray-300">9:47 AM</span>
              </div>
            </div>

            <img
              className="w-8 h-8 bg-black rounded-full"
              src=""
              alt="Friend Avatar"
            />
          </div>
        </div>
      </div>

      <ChatFooter isDark={isDark} />
    </div>
  );
});

export default Chat;
