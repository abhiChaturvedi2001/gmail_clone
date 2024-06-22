import React from "react";
import { FaBars } from "react-icons/fa6";
import { app_logo } from "../utils/constant";

const Header = () => {
  return (
    <>
      <nav className=" flex items-center justify-between h-[10vh] px-8 bg-[#f6f8fc]">
        <div className="left flex items-center space-x-5">
          <FaBars className="text-2xl cursor-pointer" />
          <img src={app_logo} alt="" />
        </div>
        <div className="search_bar">
          <input
            className="w-[40rem] bg-[#eaf1fb] py-3 px-3 rounded-3xl outline-none"
            type="text"
            placeholder="Search mail"
          />
        </div>
        <h1 className="bg-[#3d97a7] font-bold text-white  w-[44px] h-[40px] px-4 py-2 rounded-full">
          A
        </h1>
      </nav>
    </>
  );
};

export default Header;
