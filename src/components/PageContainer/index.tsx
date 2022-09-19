import React from "react";
import PageNavBar from "@/components/PageNavBar";
interface Props {
    children: React.ReactNode;
}
const index: React.FC<Props> = ({ children }) => {
    return (
        <div className="PageContainer flex-auto overflow-auto">
            <PageNavBar />
            {children}
        </div>
    );
};

export default index;
