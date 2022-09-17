import React from "react";
interface Props {
    children: React.ReactNode;
}
const index: React.FC<Props> = ({ children }) => {
    return (
        <div className="p-x-20 p-y-20 overflow-y-auto">{children}</div>
    );
};

export default index;
