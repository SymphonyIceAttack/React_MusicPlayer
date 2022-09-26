import { nanoid } from "@reduxjs/toolkit";
import React from "react";
import type { playlistType } from "@/hook/PlaylistDetailsHook";
interface Props {
    playlist: playlistType;
}
const index: React.FC<Props> = ({
    playlist: { description, coverImgUrl, tags, tracks, creator, name }
}) => {
    return (
        <div className="DetailHeader bgBlur  flex border-1 border-rounded-10 border-transparent  m-20 color-white p-5">
            <img
                className="w-120 h-120 border-rounded-10"
                src={coverImgUrl}
                alt=""
            />
            <div className="flex-1 flex flex-col m-l-15">
                <span className="text-29">{name}</span>
                <div className="flex items-center m-y-3">
                    <img
                        src={creator.avatarUrl}
                        alt=""
                        className="border-rounded-100% w-50 h-50 m-r-5"
                    />
                    <span className="h-50 text-16 flex items-center">
                        {creator.nickname}
                    </span>
                </div>
                <div className="flex items-center m-y-5 text-14 color-teal">
                    <span className="m-r-5">标签</span>
                    {tags.map((tag) => (
                        <span className="m-x-3" key={nanoid()}>
                            {tag}
                        </span>
                    ))}
                </div>
                <div className="m-y-5 text-14 color-teal">
                    <span>简介:</span>
                    <span>{description}</span>
                </div>
            </div>
        </div>
    );
};

export default index;
