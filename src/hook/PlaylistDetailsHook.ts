import React, { useEffect, useState } from "react";
import localRequest from "@/utils/localRequest";
import ArrayCreate from '@/utils/ArrayCreate'
import { nanoid } from "@reduxjs/toolkit";
export type playlistType = {
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
                name: "求求你们了，让我睡会儿好不好",
                description: "熬夜加班不想起？ 通宵学习不想起？ 伤心难过不想起？ 贪恋被窝不想起？ 来听听这一百首“唯美”的起床铃声 赖床？不存在的 刺激？唯美？轻柔？魔性？开口跪？ 只有你不敢想，没有我做不到 活着听完100首 百毒不侵",
                coverImgUrl: data,
                tags: ["轻音乐", "New Age", "影视原声"],
                tracks: ArrayCreate(10, {
                    name: "xxx",
                    id: nanoid()
                }),
                creator: {
                    avatarUrl: data,
                    nickname: "宇宙点歌台"
                }

            })
        })
    }, [])
    return [isLoading, playlist!]
}