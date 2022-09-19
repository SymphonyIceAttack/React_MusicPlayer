import React, { useState } from "react";
import ImageItem from "./ImageItem";
import SingerListHook from "@/hook/SingerListHook";
import Style from "./SingerList.module.less";
import PageContainer from "@/components/PageContainer";
import { nanoid } from "nanoid";
import ArrayCreate from "@/utils/ArrayCreate";
const index = () => {
    const [type, setType] = useState(1);
    const [isLoading, songerList] = SingerListHook(type);
    return (
        <PageContainer>
            <div
                className={`${Style.SingerList} p-20  flex  flex-wrap items-center`}
            >
                {isLoading
                    ? ArrayCreate(30, {
                          picUrl: "",
                          name: "",
                          id: "",
                          isLoading,
                      }).map((item) => {
                          return (
                              <ImageItem
                                  picUrl={item.picUrl}
                                  name={item.name}
                                  id={item.id}
                                  key={nanoid()}
                                  isLoading={isLoading}
                              />
                          );
                      })
                    : songerList.map((item) => {
                          return (
                              <ImageItem
                                  picUrl={item.picUrl}
                                  name={item.name}
                                  id={item.id}
                                  key={nanoid()}
                                  isLoading={isLoading}
                              />
                          );
                      })}
            </div>
        </PageContainer>
    );
};

export default index;
