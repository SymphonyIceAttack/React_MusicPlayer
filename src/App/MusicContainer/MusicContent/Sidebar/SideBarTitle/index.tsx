import React from "react";

interface Props {
    content: string;
}
const index: React.FC<Props> = ({ content }) => {
    return (
        <div className="w-100% h-24 m-t-10 m-b-14 color-teal text-20">
            {content}
        </div>
    );
};

export default index;
