import React, { useEffect, useState } from "react";
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
        const baseUrl = import.meta.env.VITE_BASE_URL;
        fetch(baseUrl + "personalized/newsong?realIP=116.25.146.177")
            .then((res) => res.json())
            .then((objNetWork: NetWorkType) => {
                setisLoading(false)
                setNewSong(objNetWork.result);
            });
    }, []);
    return [newSong, isLoading]
}