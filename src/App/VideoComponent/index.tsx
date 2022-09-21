import React from "react";
import bg_Home from "/bg_Home.png";
const index = () => {
    return (
        <div className=" h-100% w-100% z--100 " pos="fixed">
            <img className="object-fill" src={bg_Home}></img>
        </div>
    );
};

export default index;
