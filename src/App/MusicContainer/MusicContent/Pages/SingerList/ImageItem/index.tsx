import React, { useState } from "react";
import ContentLoader, { List } from "react-content-loader";
interface Props {
    name: string;
    picUrl: string;
    id: string;
    isLoading: boolean;
}
const index: React.FC<Props> = ({ picUrl, name, id, isLoading }) => {
    const [isOnLoad, setIsOnLoad] = useState(false);
    return (
        <div className="m-15 flex flex-col justify-center w-200 ">
            <img
                className="box-border border-rounded-5 border-1 border-coolGray   w-200 text-0 hover:border-3 hover:bgBlur"
                alt=""
                onLoad={() => {
                    setIsOnLoad(true);
                }}
                src={picUrl}
                style={{
                    display: isOnLoad && !isLoading ? "inline-block" : "none",
                }}
            />
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
            <span className="truncate color-white text-center text-15 mt-5">
                {name}
            </span>
        </div>
    );
};

export default index;
