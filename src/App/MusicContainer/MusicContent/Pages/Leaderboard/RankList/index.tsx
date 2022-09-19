import React, { useId } from "react";
import TopListHook from "@/hook/TopListHook";
import Style from "./RankList.module.less";
import ImageItem from "./ImageItem";
import { nanoid } from "nanoid";
import ArrayCreate from "@/utils/ArrayCreate";
const index = () => {
    const [isLoading, TopList] = TopListHook();
    return (
        <div
            className={`${Style.RankList}  p-20  flex  flex-wrap items-center`}
        >
            {isLoading
                ? ArrayCreate(30, {
                      coverImgUrl: "",
                      name: "",
                      id: "",
                      isLoading,
                  }).map((item) => {
                      return (
                          <ImageItem
                              coverImgUrl={item.coverImgUrl}
                              name={item.name}
                              id={item.id}
                              key={nanoid()}
                              isLoading={isLoading}
                          />
                      );
                  })
                : TopList.map((item) => {
                      return (
                          <ImageItem
                              coverImgUrl={item.coverImgUrl}
                              name={item.name}
                              id={item.id}
                              key={nanoid()}
                              isLoading={isLoading}
                          />
                      );
                  })}
        </div>
    );
};

export default index;
