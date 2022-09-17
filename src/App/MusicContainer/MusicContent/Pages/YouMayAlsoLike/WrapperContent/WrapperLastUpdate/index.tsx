import React, { useEffect, useState } from "react";
import WrapperTitle from "../WrapperTitle";
import MusicPlayItem from "@/components/MusicPlayItem";
import LastPlaySongHook from "@/hook/LastPlaySongHook";
import ContentLoader, { List } from "react-content-loader";
const index = () => {
    const [newSong, isLoading] = LastPlaySongHook();

    return (
        <div className="text-20">
            <WrapperTitle content={"最新歌曲"} />
            {isLoading ? (
                <List
                    animate={true}
                    title={""}
                    speed={2}
                    className="h-100 w-100%"
                    viewBox="0 0 400 160"
                    backgroundColor="#f3f"
                    foregroundColor="green"
                />
            ) : (
                <MusicPlayItem {...newSong} />
            )}
        </div>
    );
};

export default index;
