import React from "react";
import PageContainer from "@/components/PageContainer";
import WrapperContent from "./WrapperContent";
import WrapperHeader from "./WrapperContent/WrapperHeader";
import WrapperLastUpdate from "./WrapperContent/WrapperLastUpdate";
import HotPlayList from "./WrapperContent/HotPlayList";
const index = () => {
    return (
        <PageContainer>
            <WrapperContent>
                <WrapperHeader />
                <WrapperLastUpdate />
                <HotPlayList />
            </WrapperContent>
        </PageContainer>
    );
};

export default index;
