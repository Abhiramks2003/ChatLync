import React, { useState, useRef } from "react";
import Messages from "./Mainpage/Messages";
import {
  AiOutlinePlusCircle,
  AiOutlinePlayCircle,
  AiOutlineDown,
} from "react-icons/ai";
import {
  HiOutlineDocumentMinus,
  HiOutlineFolderMinus,
  HiOutlinePhoto,
} from "react-icons/hi2";
import { RxCross2 } from "react-icons/rx";
import Chat from "./Mainpage/Chat";

const Mainpage = (props) => {
  const [isContentVisible, setIsContentVisible] = useState(false);
  const [membersToggle, setMembersToggle] = useState(false);

  const { isDark, setIsDark } = props;

  var members = [];
  var msg = [];
  for (let i = 1; i <= 30; i++) {
    members[i] = i;
    msg[i] = i;
  }

  const messageRef = useRef(null);

  const toggleContent = () => {
    setIsContentVisible(!isContentVisible);
  };

  return (
    <>
      <div className="flex flex-grow w-full bg-gray-50 h-screen">
        <Messages messages={msg} isDark={isDark} setIsDark={setIsDark} />

        <Chat messages={msg} ref={messageRef} isDark={isDark} />
        <div className="bg-gray-50 w-64 mx-4 hidden md:flex flex-col h-screen">
          <div className="flex flex-col items-center my-1 rounded-xl shadow-md">
            <img
              className="w-24 h-24 rounded-full my-3"
              src="https://e7.pngegg.com/pngimages/84/165/png-clipart-united-states-avatar-organization-information-user-avatar-service-computer-wallpaper-thumbnail.png"
              alt=""
            />
            <span className="text-lg font-bold">Hatypo Studio</span>
            <div className="flex items-center">
              <span className="text-sm font-semibold text-gray-400 my-1">
                Create Something New....
              </span>
              <button
                className="font-semibold text-blue-500 text-sm"
                onClick={toggleContent}
              >
                more
              </button>
            </div>
          </div>

          <div className="flex relative flex-col">
            {isContentVisible && (
              <div className="flex shadow-md flex-col items-end w-64 -mt-7 h-fit rounded-xl bg-gray-50 p-2 absolute z-10">
                <div className="flex w-full justify-between">
                  <span className=" text-sm font-semibold">Description</span>
                  <RxCross2
                    className="w-6 h-6 p-1 rounded-full text-gray-600 cursor-pointer"
                    onClick={toggleContent}
                  />
                </div>

                <span className="text-sm font-semibold text-gray-400">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Culpa maiores molestiae reprehenderit commodi ea, doloremque
                  sunt, vitae libero veritatis repellendus asperiores iure earum
                  officia impedit nihil voluptate voluptates hic rem.
                </span>
              </div>
            )}

            <div className="flex justify-between items-center">
              <span className="text-base font-bold">Members</span>
              <button
                className="shadow-xl w-10 h-5 bg-gray-200 rounded-lg flex justify-center"
                onClick={() => {
                  setMembersToggle(!membersToggle);
                }}
              >
                <AiOutlineDown
                  className={`w-5 h-5 p-0.5 text-blue-500 ${
                    membersToggle ? "rotate-180" : "rotate-0"
                  }`}
                />
              </button>
            </div>

            {membersToggle && (
              <div className="absolute flex flex-col pl-3 h-[26.8rem] overflow-y-scroll z-10 mt-7  w-64 bg-gray-50 rounded-lg">
                {members.map((m) => (
                  <div
                    key={m}
                    className="flex p-2 hover:bg-gray-100 rounded-lg items-center my-2"
                  >
                    <img
                      className="w-10 h-10 rounded-full"
                      src="https://e7.pngegg.com/pngimages/84/165/png-clipart-united-states-avatar-organization-information-user-avatar-service-computer-wallpaper-thumbnail.png"
                      alt=""
                    />
                    <span className="font-semibold mx-3">Michael</span>
                  </div>
                ))}
              </div>
            )}

            <div className="flex items-center my-1 mx-2">
              <AiOutlinePlusCircle className="text-blue-500 w-8 h-8 cursor-pointer" />
              <button className="text-blue-500 font-semibold mx-2">
                Add Member
              </button>
            </div>

            <div className="flex flex-col">
              <div className="flex items-center my-2">
                <img
                  className="w-10 h-10 rounded-full"
                  src="https://e7.pngegg.com/pngimages/84/165/png-clipart-united-states-avatar-organization-information-user-avatar-service-computer-wallpaper-thumbnail.png"
                  alt=""
                />
                <span className="font-semibold mx-3">Michael</span>
              </div>

              <div className="flex items-center my-2">
                <img
                  className="w-10 h-10 rounded-full"
                  src="https://e7.pngegg.com/pngimages/84/165/png-clipart-united-states-avatar-organization-information-user-avatar-service-computer-wallpaper-thumbnail.png"
                  alt=""
                />
                <span className=" font-semibold mx-3">Michael</span>
              </div>
            </div>
          </div>

          <div className="mt-3 relative">
            <span className=" text-base font-bold">Attachments</span>
            <div className="flex items-center">
              <HiOutlineDocumentMinus className="w-10 h-10 text-gray-800 p-2 my-2" />
              <div className="flex flex-col mx-3">
                <span className="text-sm font-medium">Document</span>
                <span className="text-xs font-medium p-1 text-gray-500">
                  129 Files - 375 MB
                </span>
              </div>
            </div>
            <div className="flex items-center">
              <HiOutlinePhoto className="w-10 h-10 text-gray-800 p-2 my-2" />
              <div className="flex flex-col mx-3">
                <span className="text-sm font-medium">Photo</span>
                <span className="text-xs font-medium p-1 text-gray-500">
                  129 Files - 375 MB
                </span>
              </div>
            </div>
            <div className="flex items-center">
              <AiOutlinePlayCircle className="w-10 h-10 text-gray-800 p-2 my-2" />
              <div className="flex flex-col mx-3">
                <span className="text-sm font-medium">Videos</span>
                <span className="text-xs font-medium p-1 text-gray-500">
                  129 Files - 375 MB
                </span>
              </div>
            </div>
            <div className="flex items-center">
              <HiOutlineFolderMinus className="w-10 h-10 text-gray-800 p-2 my-2" />
              <div className="flex flex-col mx-3">
                <span className="text-sm font-medium">Other Files</span>
                <span className="text-xs font-medium p-1 text-gray-500">
                  129 Files - 375 MB
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Mainpage;
