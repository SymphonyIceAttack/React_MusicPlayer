import React from "react";

const index = () => {
    return (
        <div className=" h-100% w-100% z--100 left--5 top--1" pos="fixed">
            <video
                className="object-fill"
                autoPlay={true}
                loop={true}
                muted={true}
            >
                <source src="/7btrrd.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    );
};

export default index;
