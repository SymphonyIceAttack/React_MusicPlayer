import React, { useEffect, useRef, useState } from "react";
import "./AudioPlayer.less";
import { GrPlay } from "react-icons/gr";
import { AiOutlinePause } from "react-icons/ai";
import { useSelector } from "react-redux";

interface Props {
    time: number;
    MusicUrl: string;
}
const index: React.FC<Props> = ({ time, MusicUrl }) => {
    const [isPlaying, setIsPlaying] = useState(true);
    const audioRef = useRef<HTMLAudioElement>(null);
    return (
        <>
            {isPlaying ? (
                <span
                    className="PlayMusic"
                    onClick={() => {
                        audioRef.current?.pause();
                        setIsPlaying(false);
                    }}
                >
                    <AiOutlinePause />
                </span>
            ) : (
                <span
                    className="PlayMusic"
                    onClick={() => {
                        audioRef.current?.play();
                        setIsPlaying(true);
                    }}
                >
                    <GrPlay />
                </span>
            )}
            <audio ref={audioRef} src={MusicUrl} preload="auto" loop></audio>
        </>
    );
};

export default index;
