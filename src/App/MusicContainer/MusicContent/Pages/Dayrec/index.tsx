import React from "react";
import PageContainer from "@/components/PageContainer";
import WrapperHeader from "./WrapperHeader";
const indexz = () => {
    return (
        <PageContainer>
            <WrapperHeader />
            <div className="text-center">
                <span className="text-30 color-white m-t-5">请先登录</span>
            </div>
        </PageContainer>
    );
};

export default indexz;
