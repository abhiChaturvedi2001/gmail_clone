import React from "react";
import { FaPencilAlt } from "react-icons/fa";
import { RiInbox2Fill } from "react-icons/ri";
import { MdOutlineStarBorderPurple500 } from "react-icons/md";
import { MdOutlineSnooze } from "react-icons/md";
import { IoSend } from "react-icons/io5";
import { MdOutlineDrafts } from "react-icons/md";

const Sidebar = () => {
  const sideBarData = [
    {
      icons: <RiInbox2Fill size={"20px"} />,
      name: "Inbox",
    },
    {
      icons: <MdOutlineStarBorderPurple500 size={"20px"} />,
      name: "Starred",
    },
    {
      icons: <MdOutlineSnooze size={"20px"} />,
      name: "Snoozed",
    },
    {
      icons: <IoSend size={"20px"} />,
      name: "Inbox",
    },
    {
      icons: <MdOutlineDrafts size={"20px"} />,
      name: "Drafts",
    },
  ];

  return (
    <>
      <div className="w-[16rem] h-screen bg-[#f6f8fc]">
        <div className="w-[60%] pt-5">
          <div className="flex items-center space-x-3 bg-[#c2e7fc] w-full py-4 px-3 rounded-xl ml-4">
            <FaPencilAlt />
            <h1 className="font-bold">Compose</h1>
          </div>
          <div className="ml-4 mt-4">
            {sideBarData.map((items, index) => {
              return (
                <>
                  <div
                    key={index}
                    className="flex items-center space-x-3 h-[6vh] cursor-pointer"
                  >
                    {items.icons}
                    <p>{items.name}</p>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
