import React from "react";
import HotDjListHook from "@/hook/HotDjListHook";
import ImageItem from "./ImageItem";
import { nanoid } from "nanoid";
import Style from "./RadioList.module.less";
import type { HotDjListType } from "@/hook/HotDjListHook";
import ArrayCreate from "@/utils/ArrayCreate";
interface Props {
    isLoading: boolean;
    HotDjList: HotDjListType[];
}

const index: React.FC<Props> = ({ isLoading, HotDjList }) => {
    return (
        <div
            className={`${Style.RadioList} p-20  flex  flex-wrap items-center`}
        >
            {isLoading
                ? ArrayCreate(30, {
                      picUrl: "",
                      name: "",
                      id: "",
                      rcmdtext: ",",
                      isLoading,
                  }).map((item) => {
                      return (
                          <ImageItem
                              rcmdtext={item.rcmdtext}
                              picUrl={item.picUrl}
                              name={item.name}
                              id={item.id}
                              key={nanoid()}
                              isLoading={isLoading}
                          />
                      );
                  })
                : HotDjList.map((item) => {
                      return (
                          <ImageItem
                              rcmdtext={item.rcmdtext}
                              picUrl={item.picUrl}
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
