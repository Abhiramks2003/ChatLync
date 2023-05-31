import React, { useState } from "react";
import { BsTelephone, BsGrid, BsFolder } from "react-icons/bs";
import { AiOutlineMessage } from "react-icons/ai";
import { IoSettingsOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const Footer = (props) => {
  const iconActive =
    "w-12 h-12 my-2 shadow-xl text-gray-100 bg-blue-500 p-3 rounded-2xl cursor-pointer";
  const icons = "w-12 h-12 p-3 my-2 text-gray-500 cursor-pointer";
  const { isDark } = props;
  const [active, setActive] = useState("msg");

  const handleClick = (id) => {
    setActive(id);
  };

  return (
    <div
      className="w-full h-16 absolute bottom-0 z-50 flex sm:hidden justify-evenly items-center"
      style={{
        backgroundColor: isDark ? "rgb(17 24 39)" : "rgb(243 244 246)",
      }}
    >
      <BsGrid
        onClick={() => {
          handleClick("status");
        }}
        className={active === "status" ? iconActive : icons}
      />
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
      <div className="hidden md:block">
        <Link to="/calls">
          <BsTelephone
            onClick={() => {
              handleClick("calls");
            }}
            className={active === "calls" ? iconActive : icons}
          />
        </Link>
      </div>

      <Link to="/settings">
        <IoSettingsOutline
          onClick={() => {
            handleClick("settings");
          }}
          className={active === "settings" ? iconActive : icons}
        />
      </Link>
      <div
        onClick={() => {
          setActive("");
        }}
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

export default Footer;
