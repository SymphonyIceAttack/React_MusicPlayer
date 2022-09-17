import React from "react";
interface Props {
    children: React.ReactNode[];
}
const index: React.FC<Props> = ({ children }) => {
    return (
        <div className="flex" style={{ height: `calc(100% - 58px)` }}>
            {children}
        </div>
    );
};

export default index;
