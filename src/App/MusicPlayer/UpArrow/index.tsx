import React from "react";
import { BiSkipPrevious } from "react-icons/bi";
interface Props {
    up: () => void;
}

const index: React.FC<Props> = ({ up }) => {
    return (
        <span
            onClick={() => up()}
            className="flex items-center justify-center m-l-5 border-1 border-coolGray w-40 h-40 border-rounded-40 w"
        >
            <BiSkipPrevious size={30} />
        </span>
    );
};

export default index;
