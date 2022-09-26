import React from "react";
import DetailsTitle from "./DetailsTitle";
import DetailHeader from "./DetailHeader";
import { useParams } from "react-router-dom";
import PlaylistDetailsHook from "@/hook/PlaylistDetailsHook";
import ContentLoader, { List } from "react-content-loader";
import MusicPlayItem from "@/components/MusicPlayItem";
import ArrayCreate from "@/utils/ArrayCreate";
import { nanoid } from "nanoid";
import DetailCommentList from "./DetailCommentList";
const index = () => {
    const { playlistid } = useParams();
    const [isLoadingplaylistDetail, playlistDetail] = PlaylistDetailsHook(
        playlistid!
    );
    const playLists = ArrayCreate(10, {
        name: "xxxx",
        id: nanoid(),
        songer: "xxxx",
        time: 123456,
    });

    return (
        <div className={`PlaylistDetails relative flex-1 h-100% overflow-auto`}>
            <DetailsTitle content="歌单详情" />
            {isLoadingplaylistDetail ? (
                <List
                    animate={true}
                    title={""}
                    speed={2}
                    className="h-200  w-400 m-x-auto block"
                    viewBox="0 0 400 160"
                    backgroundColor="#f3f"
                    foregroundColor="green"
                />
            ) : (
                <DetailHeader playlist={playlistDetail} />
            )}
            <DetailsTitle content="歌曲" />
            <div className="sd-5  border-rounded-10 m-x-20">
                {playLists.map((item) => {
                    return (
                        <MusicPlayItem
                            key={nanoid()}
                            name={item.name}
                            songer={item.songer}
                            time={item.time}
                            id={item.id}
                        />
                    );
                })}
            </div>
            <DetailsTitle content="歌单评论" />
            <DetailCommentList />
        </div>
    );
};

export default index;
