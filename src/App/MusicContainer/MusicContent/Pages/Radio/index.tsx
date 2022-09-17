import React from "react";
import PageContainer from "@/components/PageContainer";
import HotDjListHook from "@/hook/HotDjListHook";
import RadioList from "./RadioList";
import Pagination from "@/components/Pagination";

const index = () => {
    const [isLoading, setoffset, HotDjList] = HotDjListHook();

    return (
        <PageContainer>
            <RadioList isLoading={isLoading} HotDjList={HotDjList} />
            <Pagination
                total={200}
                limit={15}
                previous={() => {
                    setoffset((value) => value - 15);
                }}
                next={() => {
                    setoffset((value) => value + 15);
                }}
            />
        </PageContainer>
    );
};

export default index;
