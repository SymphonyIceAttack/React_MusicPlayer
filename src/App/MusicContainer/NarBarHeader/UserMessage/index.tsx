import React from "react";
import { IoMdNotificationsOutline } from "react-icons/io";
import { AiOutlineGithub } from "react-icons/ai";
const index = () => {
    return (
        <div className="m-l-20%  h-60%  flex justify-end items-center hover:color-white">
            <span className="color-teal m-x-12 cursor-pointer hover:color-white">
                <IoMdNotificationsOutline size={30} />
            </span>
            <a
                href="https://github.com/SymphonyIceAttack/React_MusicPlayer"
                target={"_blank"}
                className="color-teal m-x-12 cursor-pointer hover:color-white"
            >
                <AiOutlineGithub size={30} />
            </a>
            <span className="text-18 color-teal hover:color-white cursor-pointer m-x-12 font-500 truncate">
                登陆
            </span>
        </div>
    );
};

export default index;
