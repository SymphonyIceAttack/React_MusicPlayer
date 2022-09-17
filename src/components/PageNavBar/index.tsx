import React, { useId, useState } from "react";
import NavBarItem from "@/components/NavBarItem";
const index = () => {
    const [NavBarList, setNavBarList] = useState([
        {
            content: "专辑",
            to: "/",
        },
        {
            content: "排行榜",
            to: "/Leaderboard",
        },
        {
            content: "歌手",
            to: "/SingerList",
        },
        {
            content: "每日推荐",
            to: "/Dayrec",
        },
    ]);
    return (
        <div className="flex items-center">
            <span className="min-w-80 text-20 p-x-20 color-warmGray  truncate overflow-auto">
                全局状态
            </span>
            <div className="flex items-center">
                {NavBarList.map((item) => {
                    return (
                        <NavBarItem
                            content={item.content}
                            to={item.to}
                            key={useId()}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default index;
