import React from "react";
import WrapperTitle from "../WrapperTitle";
import HotPlayListHook from "@/hook/HotPlayListHook";
import ImageList from "./ImageList";
import Pagination from "@/components/Pagination";
const index = () => {
    const [offset, setoffset, playLists, isLoading, total] = HotPlayListHook();
    return (
        <div>
            <WrapperTitle content="热门歌单" />
            <ImageList isLoading={isLoading} playLists={playLists} />
            <Pagination
                total={total}
                limit={15}
                previous={() => {
                    setoffset((value) => value - 15);
                }}
                next={() => {
                    setoffset((value) => value + 15);
                }}
            />
        </div>
    );
};

export default index;
