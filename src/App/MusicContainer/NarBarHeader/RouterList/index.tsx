import React, { useState, useId } from "react";
import RouterItem from "@/components/NavBarItem"
const index = () => {
    const [routerList, setRouterList] = useState([
        {
            content: "音乐",
            to: "/",
        },
        {
            content: "MV",
            to: "/NewMv",
        },
        {
            content: "电台",
            to: "/Radio",
        },
    ]);
    return (
        <ul className="flex items-center">
            {routerList.map((item) => {
                return (
                    <RouterItem
                        key={useId()}
                        content={item.content}
                        to={item.to}
                    />
                );
            })}
        </ul>
    );
};
``;

export default index;
