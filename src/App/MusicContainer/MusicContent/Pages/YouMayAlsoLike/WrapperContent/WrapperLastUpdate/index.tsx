import React, { useEffect, useState } from "react";
import WrapperTitle from "../WrapperTitle";
import MusicPlayItem from "@/components/MusicPlayItem";
import LastPlaySongHook from "@/hook/LastPlaySongHook";
import ContentLoader, { List } from "react-content-loader";
import Style from "./WrapperLastUpdate.module.less";
import { nanoid } from "nanoid";
import ArrayCreate from "@/utils/ArrayCreate";
const index = () => {
    const [newSong, isLoading] = LastPlaySongHook();

    return (
        <div className={`${Style.WrapperLastUpdate}`}>
            <WrapperTitle content={"最新歌曲"} />
            {isLoading
                ? ArrayCreate(3, {}).map((item) => {
                      return (
                          <List
                              animate={true}
                              title={""}
                              speed={2}
                              className="h-100 w-100%"
                              viewBox="0 0 400 160"
                              backgroundColor="#f3f"
                              foregroundColor="green"
                              key={nanoid()}
                          />
                      );
                  })
                : newSong.map((item) => {
                      return (
                          <MusicPlayItem
                              key={nanoid()}
                              name={item.name}
                              songer={item.song.artists[0].name}
                              time={item.song.bMusic.playTime}
                              id={item.id}
                          />
                      );
                  })}
        </div>
    );
};

export default index;
