import React from "react";
import { IoMdNotificationsOutline } from "react-icons/io";
import { AiOutlineCloud } from "react-icons/ai";
const index = () => {
    return (
        <div className="m-l-20%  h-60%  flex justify-end items-center hover:color-white">
            <span className="color-teal m-x-12 cursor-pointer hover:color-white">
                <IoMdNotificationsOutline size={30} />
            </span>
            <span className="color-teal m-x-12 cursor-pointer hover:color-white">
                <AiOutlineCloud size={30} />
            </span>
            <span className="text-18 color-teal hover:color-white cursor-pointer m-x-12 font-500 truncate">
                登陆
            </span>
        </div>
    );
};

export default index;
