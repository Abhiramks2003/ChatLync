import React, { useState } from "react";
import { BsTelephone, BsGrid, BsFolder } from "react-icons/bs";
import { AiOutlineMessage } from "react-icons/ai";
import { HiOutlineSun, HiOutlineMoon } from "react-icons/hi";
import { IoSettingsOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const Sidebar = (props) => {
  const iconActive =
    "w-12 h-12 my-2 shadow-xl text-gray-100 bg-blue-500 p-3 rounded-2xl cursor-pointer";
  const icons = "w-12 h-12 p-3 my-2 text-gray-500 cursor-pointer";
  const { isDark, setIsDark } = props;
  const [active, setActive] = useState("msg");

  const handleClick = (id) => {
    setActive(id);
  };

  return (
    <div
      className="w-24 shadow-lg h-screen hidden md:flex flex-col justify-around items-center"
      style={{
        backgroundColor: isDark ? "rgb(17 24 39)" : "rgb(243 244 246)",
      }}
    >
      <div className="flex flex-col items-center">
        <Link to="/status">
          <BsGrid
            onClick={() => {
              handleClick("status");
            }}
            className={active === "status" ? iconActive : icons}
          />
        </Link>
        <Link to="/files">
          <BsFolder
            onClick={() => {
              handleClick("files");
            }}
            className={active === "files" ? iconActive : icons}
          />
        </Link>
        <Link to="/">
          <AiOutlineMessage
            onClick={() => {
              handleClick("msg");
            }}
            className={active === "msg" ? iconActive : icons}
          />
        </Link>
        <Link to="/calls">
          <BsTelephone
            onClick={() => {
              handleClick("calls");
            }}
            className={active === "calls" ? iconActive : icons}
          />
        </Link>

        <Link to="/settings">
          <IoSettingsOutline
            onClick={() => {
              handleClick("settings");
            }}
            className={active === "settings" ? iconActive : icons}
          />
        </Link>
        <div
          className="bg-gray-100 shadow-lg mt-16 flex flex-col items-center rounded-full"
          onClick={() => {
            setIsDark(!isDark);
          }}
        >
          <HiOutlineSun
            className="w-10 h-10 p-2 shadow-lg cursor-pointer rounded-full"
            style={{
              backgroundColor: isDark ? "" : "white",
              color: isDark ? "rgb(107 114 128)" : "rgb(59 130 246)",
            }}
          />
          <HiOutlineMoon
            className="w-10 h-10 p-2 shadow-lg cursor-pointer rounded-full"
            style={{
              backgroundColor: isDark ? "rgb(17 24 39)" : "",
              color: isDark ? "rgb(59 130 246)" : "rgb(107 114 128)",
            }}
          />
        </div>
      </div>
      <div
        onClick={() => {
          setActive("");
        }}
        className="mt-16"
      >
        <Link to="/profile">
          <img
            className="w-12 h-12 shadow-xl rounded-xl cursor-pointer"
            src="https://e7.pngegg.com/pngimages/84/165/png-clipart-united-states-avatar-organization-information-user-avatar-service-computer-wallpaper-thumbnail.png"
            alt=""
          />
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
