import React from "react";

const index = () => {
    return (
        <div
            className="bgBlur flex justify-start items-center w-70rem min-w-3xl h-60% m-y-auto  m-l-4rem box-border overflow-hidden border-rounded-5"
            pos="relative"
        >
            <input
                type="text"
                className="bgBlur box-border h-100% w-100%  p-8 text-15 border-none shadow-none outline-none color-white"
            />
            <div
                pos="relative"
                className=" w-44 h-30 left-2 border-rounded-2 color-white "
            >
                <img
                    className="h-15.6 border-none inline-block  w-15 p-r-8 cursor-pointer m-y-7 m-x-12"
                    src="https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/1e8ab9a22f0ddc36349f60b38900d0bd.svg"
                    alt=""
                />
            </div>
        </div>
    );
};

export default index;
