import React from "react";

interface Props {
    children: React.ReactNode;
}
const index: React.FC<Props> = ({ children }) => {
    return (
        <li className="m-x-10 color-white w-16 cursor-pointer">{children}</li>
    );
};

export default index;
