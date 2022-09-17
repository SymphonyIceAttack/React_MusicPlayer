import React from "react";
import 栗山未来 from "/栗山未来.be1af83.png";
import Style from "./ImageContainer.module.less";
const index = () => {
    return (
        <div
            className={`xl:h-500 xl:w-75% ${Style.ImageContainer} `}
        >
            <img className="w-100% h-100%" src={栗山未来} alt="" />
        </div>
    );
};

export default index;
