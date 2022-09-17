import React from "react";
interface Props {
    children: React.ReactNode[] | React.ReactNode;
}
const index: React.FC<Props> = ({ children }) => {
    return (
        <div className="h-95% w-98% bgBlur border-rounded-14 m-y-20 p-y-10 overflow-hidden">
            {children}
        </div>
    );
};

export default index;
