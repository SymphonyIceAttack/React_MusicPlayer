import React from "react";
import DetailsTitle from "./DetailsTitle";
import { useParams } from "react-router-dom";
import PlaylistDetailsHook from "@/hook/PlaylistDetailsHook";
const index = () => {
    const { playlistid } = useParams();
    const [isLoading, playlist] = PlaylistDetailsHook(playlistid!);

    return (
        <div className={`relative flex-1`}>
            <DetailsTitle content="歌曲" />
        </div>
    );
};

export default index;
