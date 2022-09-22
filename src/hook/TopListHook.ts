import React, { useEffect, useState } from "react";
import localRequest from "@/utils/localRequest";
import ArrayCreate from '@/utils/ArrayCreate'
import { nanoid } from "nanoid";

export type TopListType = {
    name: string;
    id: string;
    coverImgUrl: string
}


interface NetWorkType {
    list: TopListType[]
}
export default (): [boolean, TopListType[]] => {
    const [isLoading, setisLoading] = useState(true)
    const [TopList, setTopList] = useState<TopListType[]>([])
    useEffect(() => {
        setisLoading(true)
        localRequest("/images/th.jpeg").then((data) => {
            setisLoading(false)
            setTopList(ArrayCreate<TopListType>(30, {
                name: "xxxx",
                id: nanoid(),
                coverImgUrl: data
            }))
        })
    }, [])
    return [isLoading, TopList]
}