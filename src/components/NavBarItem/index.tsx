import React from "react";
import { NavLink } from "react-router-dom";
interface Props {
    content: string;
    to: string;
}
const index: React.FC<Props> = ({ content, to }) => {
    const defaultClass =
        "windTextColor  h-23 p-x-30 p-y-20 cursor-pointer no-underline transform text-15 font-500 border-rounded-3 truncate hover:color-white  hover:border-warmGray border-b-2";
    const ActiveClass = ({ isActive }: { isActive: boolean }): string => {
        if (isActive) return defaultClass + " color-white border-warmGray ";
        return defaultClass;
    };
    return (
        <NavLink to={to} className={ActiveClass}>
            {content}
        </NavLink>
    );
};

export default index;
