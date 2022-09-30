import React, { useState } from "react";
import type { playlists } from "@/hook/HotPlayListHook";
import ContentLoader, { List } from "react-content-loader";
import { Link } from "react-router-dom";

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
        <Link
            className="m-15 flex flex-col justify-center w-200  cursor-pointer "
            to={`PlaylistDetails/${id}`}
        >
            <img
                className="box-border border-rounded-5 border-1 border-coolGray w-200   text-0 hover:scale-105 hover:bgBlur decoration-none "
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
        </Link>
    );
};

export default index;
