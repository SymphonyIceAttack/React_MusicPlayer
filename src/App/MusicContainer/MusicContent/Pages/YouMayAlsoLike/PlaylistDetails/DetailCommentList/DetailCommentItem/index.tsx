import React from "react";

const index = () => {
    return (
        <div className="w-300 h-150 m-8 border-rounded-5 sd-5 bgFilter  color-white hover:scale-102 hover:bg-teal-8  ">
            <div className="flex flex-col m-l-10  m-t-5">
                <img
                    src="/images/th.jpeg"
                    alt=""
                    className="w-50 h-50 border-rounded-50"
                />
                <span className="text-14 font-400 ">xxxxxxx</span>
            </div>
            <div className="truncate text-12 font-400 m-t-10 m-l-10">
                xxxxxxxxxxxxxxxxxxxxxxxxxx
            </div>
        </div>
    );
};

export default index;
