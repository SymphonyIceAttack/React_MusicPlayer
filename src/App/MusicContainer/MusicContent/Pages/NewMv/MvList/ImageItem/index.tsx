import React, { useState } from "react";
import ContentLoader, { List } from "react-content-loader";
interface Props {
    name: string;
    cover: string;
    id: string;
    isLoading: boolean;
}
const index: React.FC<Props> = ({ cover, name, id, isLoading }) => {
    return (
        <div className="m-15 flex flex-col justify-center w-200 ">
            <img
                className="box-border border-rounded-5 border-1 border-coolGray w-200
                  text-0 hover:border-3 hover:bgBlur"
                src={cover}
                alt=""
                style={{ display: isLoading ? "none" : "inline-block" }}
            />
            <span className="truncate color-white text-center text-15 mt-5">
                {name}
            </span>
            {isLoading ? (
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
