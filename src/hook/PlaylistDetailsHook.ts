import React, { useEffect, useState } from "react";
import localRequest from "@/utils/localRequest";
import ArrayCreate from '@/utils/ArrayCreate'
import { nanoid } from "@reduxjs/toolkit";
type playlistType = {
    name: string;
    description: string;
    coverImgUrl: string;
    tags: string[];
    tracks: {
        name: string;
        id: string;
    }[];
    creator: {
        avatarUrl: string;
        nickname: string
    }

}

export default (id: string): [boolean, playlistType] => {
    const [isLoading, setisLoading] = useState(true)
    const [playlist, setplaylist] = useState<playlistType>()

    useEffect(() => {
        localRequest("/images/th.jpeg").then((data) => {
            setisLoading(false)
            setplaylist({
                name: "xxx",
                description: "xxxxx",
                coverImgUrl: "xxxxx",
                tags: ["轻音乐", "New Age", "影视原声"],
                tracks: ArrayCreate(10, {
                    name: "xxx",
                    id: nanoid()
                }),
                creator: {
                    avatarUrl: "xxxxx",
                    nickname: "xxxxx"
                }

            })
        })
    }, [])
    return [isLoading, playlist!]
}