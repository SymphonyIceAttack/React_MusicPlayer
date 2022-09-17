import React from "react";
import HeaderDecoration from "./HeaderDecoration";
import ImageContainer from "./ImageContainer";

import Style from "./WrapperHeader.module.less";
const index = () => {
    return (
        <div
            className={`flex items-center border-rounded-5 ${Style["WrapperHeader"]}`}
        >
            <HeaderDecoration />
            <ImageContainer />
        </div>
    );
};

export default index;
