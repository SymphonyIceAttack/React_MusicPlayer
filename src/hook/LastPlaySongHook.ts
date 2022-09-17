import React, { useEffect, useState } from "react";
interface MusicPlayItem {
    name: string;
    songer: string;
    time: number;
}
interface NetWorkType {
    result: [
        {
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
    ];
}


export default (): [MusicPlayItem, boolean] => {
    const [newSong, setNewSong] = useState<MusicPlayItem>({
        name: "",
        songer: "",
        time: 0,
    });
    const [isLoading, setisLoading] = useState(true)
    useEffect(() => {
        setisLoading(true)
        const baseUrl = import.meta.env.VITE_BASE_URL;
        fetch(baseUrl + "personalized/newsong?realIP=116.25.146.177")
            .then((res) => res.json())
            .then((objNetWork: NetWorkType) => {
                setisLoading(false)
                setNewSong({
                    songer: objNetWork.result[0].song.artists[0].name,
                    name: objNetWork.result[0].name,
                    time: objNetWork.result[0].song.bMusic.playTime,
                });
            });
    }, []);
    return [newSong, isLoading]
}