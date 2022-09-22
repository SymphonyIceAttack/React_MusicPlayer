import React, { useEffect, useState } from "react";
import localRequest from "@/utils/localRequest";
import ArrayCreate from '@/utils/ArrayCreate'
import { nanoid } from "nanoid";
interface MusicPlayItem {
    id: string;
    name: string;
    picUrl: string;
    song: {
        artists: [
            {
                name: string;
            }
        ];
        bMusic: {
            playTime: number;
        };
    };
}
interface NetWorkType {
    result: MusicPlayItem[]
}


export default (): [MusicPlayItem[], boolean] => {
    const [newSong, setNewSong] = useState<MusicPlayItem[]>([]);
    const [isLoading, setisLoading] = useState(true)
    useEffect(() => {
        setisLoading(true)
        localRequest("/images/th.jpeg").then((data) => {
            setisLoading(false)
            setNewSong(ArrayCreate<MusicPlayItem>(5, {
                id: nanoid(),
                name: "xxxx",
                picUrl: data,
                song: {
                    artists: [
                        {
                            name: "xxxx",
                        }
                    ],
                    bMusic: {
                        playTime: 1000,
                    },
                },
            }));
        });
    }, []);
    return [newSong, isLoading]
}