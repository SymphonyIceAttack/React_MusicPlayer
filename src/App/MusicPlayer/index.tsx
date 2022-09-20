import React, { useEffect, useState } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { useSelector } from "react-redux";
import type { RootState } from "@/store";
import AudioPlayer from "./AudioPlayer";
import UpArrow from "./UpArrow";
import DownArrow from "./DownArrow";
const index = () => {
    const [isExpand, setIsExpand] = useState(true);
    const MusicPlayList = useSelector((app: RootState) => app.MusicPlayList);
    const [currentMusicIndex, setCurrentMusicIndex] = useState(0);

    useEffect(() => {
        MusicPlayList.length !== 0 && !isExpand && setIsExpand(true);
        MusicPlayList.length !== 0 &&
            setCurrentMusicIndex(MusicPlayList.length - 1);
    }, [MusicPlayList]);

    useEffect(() => {}, [currentMusicIndex]);
    return (
        <div
            className={`fixed bottom-10 left-0 bg-green h-60  border-rounded-5 flex
          items-center   justify-between overflow-hidden transition-all`}
        >
            <div
                className=" h-100%  transition-all flex justify-between items-center"
                style={{ width: isExpand ? "230px" : "0px" }}
            >
                <UpArrow
                    up={() => {
                        currentMusicIndex !== 0 &&
                            setCurrentMusicIndex((index) => index - 1);
                    }}
                />
                {MusicPlayList.length > 0 ? (
                    <AudioPlayer
                        MusicUrl={MusicPlayList[currentMusicIndex].url}
                    />
                ) : null}
                <DownArrow
                    Down={() => {
                        currentMusicIndex < MusicPlayList.length - 1 &&
                            setCurrentMusicIndex((index) => index + 1);
                    }}
                />
            </div>

            {isExpand ? (
                <div
                    className="flex items-center justify-center h-100% bg-white w-20 relative right-0 cursor-pointer hover:bg-gray-2 z-10"
                    onClick={() => {
                        setIsExpand(false);
                    }}
                >
                    <AiOutlineArrowLeft size={30} className="flex-1" />
                </div>
            ) : (
                <div
                    className="flex items-center justify-center h-100% bg-white w-20 relative right-0 cursor-pointer hover:bg-gray-2 z-10"
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
