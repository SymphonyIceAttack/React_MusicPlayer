import React from "react";
import ImageItem from "./ImageItem";
import Style from "./ImageList.module.less";
import type { playlists } from "@/hook/HotPlayListHook";
import { nanoid } from "nanoid";
import ArrayCreate from "@/utils/ArrayCreate";
interface Porps {
    playLists: playlists[];
    isLoading: boolean;
}
const index: React.FC<Porps> = ({ playLists, isLoading }) => {
    return (
        <div
            className={` flex w-100% flex-wrap items-center ${Style.ImageList}`}
        >
            {isLoading
                ? ArrayCreate(15, {
                      playlists: { coverImgUrl: "", name: "", id: "" },
                      isLoading,
                  }).map((item) => {
                      return (
                          <ImageItem
                              isLoading={isLoading}
                              playlists={item.playlists}
                              key={nanoid()}
                          />
                      );
                  })
                : playLists.map((item) => {
                      return (
                          <ImageItem
                              isLoading={isLoading}
                              playlists={item}
                              key={nanoid()}
                          />
                      );
                  })}
        </div>
    );
};

export default index;
