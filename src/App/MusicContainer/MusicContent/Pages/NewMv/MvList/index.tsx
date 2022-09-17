import React from "react";
import MvFirstHook from "@/hook/MvFirstHook";
import ImageItem from "./ImageItem";
import { nanoid } from "nanoid";
import Style from "./MvList.module.less";
const index = () => {
    const [isLoading, NewMvList] = MvFirstHook();
    return (
        <div className={`${Style.MvList} p-20  flex  flex-wrap items-center`}>
            {isLoading
                ? Array.from({ length: 30 }, () => ({
                      cover: "",
                      name: "",
                      id: "",
                      isLoading,
                  })).map((item) => {
                      return (
                          <ImageItem
                              cover={item.cover}
                              name={item.name}
                              id={item.id}
                              key={nanoid()}
                              isLoading={isLoading}
                          />
                      );
                  })
                : NewMvList.map((item) => {
                      return (
                          <ImageItem
                              cover={item.cover}
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
