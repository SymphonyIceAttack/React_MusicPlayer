import React, { useEffect, useState } from "react";
import { FiPlayCircle } from "react-icons/fi";
import { BiMoviePlay, BiDownload } from "react-icons/bi";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "@/store";
import { increment } from "@/store";
interface Props {
    name: string;
    songer: string;
    time: number;
    id: string;
}
interface NetWorkType {
    data: [
        {
            url: string;
        }
    ];
}
const index: React.FC<Props> = ({ name, songer, time, id }) => {
    const dispatch = useDispatch<AppDispatch>();
    const [URL, setURL] = useState("");
    useEffect(() => {
        URL !== "" && dispatch(increment({ url: URL }));
    }, [URL]);

    return (
        <div
            className="flex h-40 justify-between items-center  p-x-10 p-y-3 color-white   opacity-50  hover:bg-dark-8  hover:first-border-rounded-t-10  hover:last-border-rounded-b-10
            not-first-border-t-coolgray
            not-first-border-t-1
         "
        >
            <span className="truncate">{name}</span>
            <span className="truncate">{songer}</span>
            <span className="truncate">{time}</span>
            <div className="w-lg flex justify-between items-center p-r-10 m-t-5">
                <span
                    className="cursor-pointer"
                    onClick={() => {
                        fetch(
                            import.meta.env.VITE_BASE_URL +
                                `song/url?id=${id}&${
                                    import.meta.env.VITE_BASE_IP
                                }`
                        )
                            .then((res) => res.json())
                            .then((data: NetWorkType) => {
                                setURL(data.data[0].url);
                                
                            });
                    }}
                >
                    <FiPlayCircle size={30} />
                </span>
                <span className="cursor-pointer">
                    <BiMoviePlay size={30} />
                </span>
                <span className="cursor-pointer">
                    <BiDownload size={30} />
                </span>
            </div>
        </div>
    );
};

export default index;
