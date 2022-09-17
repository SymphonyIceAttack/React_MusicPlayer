import React from "react";
import IconItem from "./IconItem";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { BsArrowClockwise } from "react-icons/Bs";

const index = () => {
    return (
        <div className="m-r-80">
            <ul className="flex items-center">
                <IconItem>
                    <AiOutlineArrowLeft size={18} />
                </IconItem>
                <IconItem>
                    <AiOutlineArrowRight size={18} />
                </IconItem>
                <IconItem>
                    <BsArrowClockwise size={18} />
                </IconItem>
            </ul>
        </div>
    );
};

export default index;
