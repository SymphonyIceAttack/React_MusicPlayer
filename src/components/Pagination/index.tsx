import React, { useEffect, useState } from "react";
import { FcNext, FcPrevious } from "react-icons/fc";

interface Props {
    total: number;
    limit: number;
    previous: () => void;
    next: () => void;
}

const index: React.FC<Props> = ({ total, limit, previous, next }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [MaxPage, setMaxPage] = useState(Math.ceil(total / limit));
    useEffect(() => {
        setMaxPage(Math.ceil(total / limit));
    }, [total]);
    return (
        <div className="flex items-center justify-center">
            <div className="w-500 flex items-center justify-center">
                <span
                    className="box-border cursor-pointer hover:blur-1 hover:blur-1 hover:sd-8  hover:shadow-teal active:sd-20  transform"
                    onClick={() => {
                        currentPage > 1 && previous();
                        currentPage > 1 && setCurrentPage((value) => value - 1);
                    }}
                >
                    <FcPrevious size={30} color="blue" />
                </span>
                <span className="text-20 color-green m-x-10 border-2 border-teal p-x-8 p-y-3 border-rounded-3">
                    1
                </span>
                <span className="text-20 color-blue m-x-10 border-2 border-teal p-x-8 p-y-3 border-rounded-3">
                    {currentPage}
                </span>
                <span className="text-20 color-teal m-x-10 border-2 border-teal p-x-8 p-y-3 border-rounded-3">
                    {MaxPage}
                </span>
                <span
                    className="box-border cursor-pointer hover:blur-1 hover:sd-8 active:sd-20 hover:shadow-teal"
                    onClick={() => {
                        currentPage < MaxPage && next();
                        currentPage < MaxPage &&
                            setCurrentPage((value) => value + 1);
                    }}
                >
                    <FcNext size={30} color="blue" />
                </span>
            </div>
        </div>
    );
};

export default index;
