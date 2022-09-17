import React from "react";
interface Props {
    children: React.ReactNode[];
}
const index: React.FC<Props> = ({ children }) => {
    return (
        <div className="flex items-center  borderBottom p-x-30 overflow-x-auto">
            {children}
        </div>
    );
};

export default index;
