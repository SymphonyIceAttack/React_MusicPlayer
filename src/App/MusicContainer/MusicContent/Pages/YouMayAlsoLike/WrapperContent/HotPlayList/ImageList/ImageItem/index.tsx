import React, { useState } from "react";
import type { playlists } from "@/hook/HotPlayListHook";
import ContentLoader, { List } from "react-content-loader";
interface Props {
    playlists: playlists;
    isLoading: boolean;
}
const index: React.FC<Props> = ({
    playlists: { coverImgUrl, name, id },
    isLoading,
}) => {
    const [isOnLoad, setIsOnLoad] = useState(false);
    return (
        <div
            className="m-15 flex flex-col justify-center w-200 "
            to={`PlaylistDetails/${id}`}
        >
            <img
                className="box-border border-rounded-5 border-1 border-coolGray w-200   text-0 hover:border-3 hover:bgBlur"
                src={coverImgUrl}
                onLoad={() => {
                    setIsOnLoad(true);
                }}
                alt=""
                style={{
                    display: isOnLoad && !isLoading ? "inline-block" : "none",
                }}
            />
            <span className="truncate color-white text-center text-15 mt-5">
                {name}
            </span>
            {!isOnLoad || isLoading ? (
                <List
                    animate={true}
                    title={""}
                    speed={2}
                    className="h-200  w-200"
                    viewBox="0 0 400 160"
                    backgroundColor="#f3f"
                    foregroundColor="green"
                />
            ) : null}
        </div>
    );
};

export default index;
