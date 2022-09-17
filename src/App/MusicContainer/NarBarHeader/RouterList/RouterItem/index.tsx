import React from "react";
import { NavLink } from "react-router-dom";
interface Props {
    content: string;
    to: string;
}
const index: React.FC<Props> = ({ content, to }) => {
    return (
        <NavLink
            to={to}
            className="windTextColor  h-23 p-x-30 p-y-20 cursor-pointer no-underline transform text-15 font-500 border-rounded-3 truncate hover:color-white  hover:border-white hover:border-b-2"
        >
            {content}
        </NavLink>
    );
};

export default index;
