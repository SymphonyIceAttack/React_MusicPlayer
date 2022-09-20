import React from "react";
import { BiSkipNext } from "react-icons/bi";
interface Props {
    Down: () => void;
}

const index: React.FC<Props> = ({ Down }) => {
    return (
        <span
            className="flex items-center justify-center m-r-5 border-1 border-coolGray w-40 h-40 border-rounded-40 hover:scale-120 transition"
            onClick={() => Down()}
        >
            <BiSkipNext size={30} />
        </span>
    );
};

export default index;
