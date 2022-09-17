import React from "react";
interface Props {
    children: React.ReactNode;
    content: string;
}
const index: React.FC<Props> = ({ children, content }) => {
    return (
        <a className="decoration-none color-white flex items-center font-400 p-10 text-14 border-rounded-6 cursor-pointer transition-all hover:bg-dark-2 truncate ">
            <span className="text-20 font-500 m-t-5">{children}</span>
            <span className="m-l-10">{content}</span>
        </a>
    );
};

export default index;
