import React from "react";
import { FiPlayCircle } from "react-icons/fi";
import { BiMoviePlay, BiDownload } from "react-icons/bi";

interface Props {
    name: string;
    songer: string;
    time: number;
}
const index: React.FC<Props> = ({ name, songer, time }) => {
    return (
        <div className="flex h-40 justify-between items-center  p-x-10 color-white border-rounded-8 border-1 bgBlur opacity-50  hover:bg-dark-8">
            <span className="truncate">{name}</span>
            <span className="truncate">{songer}</span>
            <span className="truncate">{time}</span>
            <div className="w-lg flex justify-between items-center p-r-10 m-t-5">
                <span className="cursor-pointer">
                    <FiPlayCircle size={30} />
                </span>
                <span className="cursor-pointer">
                    <BiMoviePlay size={30} />
                </span>
                <span className="cursor-pointer">
                    <BiDownload size={30} />
                </span>
            </div>
        </div>
    );
};

export default index;
