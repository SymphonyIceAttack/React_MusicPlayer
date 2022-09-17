import React from "react";
import SideBarTitle from "./SideBarTitle";
import SideItem from "./SideItem";
import {
    AiOutlineTable,
    AiOutlineSearch,
    AiOutlineDownload,
    AiOutlineCloudDownload,
} from "react-icons/Ai";
import { GiLoveSong } from "react-icons/Gi";
import { BiRadio } from "react-icons/bi";
import { SiAirplayaudio } from "react-icons/si";
import { MdOutlineQueueMusic } from "react-icons/Md";
import { BsFillBrushFill } from "react-icons/Bs";
import Style from "./Sidebar.module.less";
const index = () => {
    return (
        <div
            className={`${Style.Sidebar}  min-w-177 h-85%  overflow-y-scroll  p-x-20  p-b-10 borderRight`}
        >
            <SideBarTitle content="推荐" />
            <SideItem content="猜你喜欢">
                <AiOutlineTable size={18} />
            </SideItem>
            <SideItem content="歌曲搜索">
                <AiOutlineSearch size={18} />
            </SideItem>
            <SideBarTitle content="我的音乐" />
            <SideItem content="我的收藏">
                <GiLoveSong size={18} />
            </SideItem>
            <SideItem content="我的电台">
                <BiRadio size={18} />
            </SideItem>
            <SideItem content="本地与下载">
                <AiOutlineDownload size={18} />
            </SideItem>
            <SideItem content="音乐云盘">
                <AiOutlineCloudDownload size={18} />
            </SideItem>
            <SideItem content="最近播放">
                <SiAirplayaudio size={18} />
            </SideItem>
            <SideItem content="默认列表">
                <MdOutlineQueueMusic size={18} />
            </SideItem>
            <SideBarTitle content="美化" />
            <SideItem content="主题">
                <BsFillBrushFill size={18} />
            </SideItem>
        </div>
    );
};

export default index;
