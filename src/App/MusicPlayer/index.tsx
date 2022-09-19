import React, { useEffect, useState } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { useSelector } from "react-redux";
import type { RootState } from "@/store";
import AudioPlayer from "./AudioPlayer";
const index = () => {
    const [isExpand, setIsExpand] = useState(false);
    const MusicPlayList = useSelector((app: RootState) => app.MusicPlayList);

    useEffect(() => {
        !isExpand && setIsExpand(true);
    }, [MusicPlayList]);
    return (
        <div
            className={`fixed bottom-10 left-0 bg-green h-60  border-rounded-5 flex justify-between overflow-hidden transition-all`}
            style={{
                width: isExpand ? "230px" : "20px",
            }}
        >
            <div className=" h-100% flex-1 transition-all">
                {MusicPlayList.length > 0 ? (
                    <AudioPlayer time={30} MusicUrl={MusicPlayList[0].url} />
                ) : null}
            </div>
            {isExpand ? (
                <div
                    className="flex items-center justify-center h-100% bg-white w-20 relative right-0 cursor-pointer hover:bg-gray-2"
                    onClick={() => {
                        setIsExpand(false);
                    }}
                >
                    <AiOutlineArrowLeft size={30} className="flex-1" />
                </div>
            ) : (
                <div
                    className="flex items-center justify-center h-100% bg-white w-20 relative right-0 cursor-pointer hover:bg-gray-2"
                    onClick={() => {
                        setIsExpand(true);
                    }}
                >
                    <AiOutlineArrowRight size={30} className="flex-1" />
                </div>
            )}
        </div>
    );
};

export default index;
