import React, { useEffect, useState } from "react";

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
        fetch(import.meta.env.VITE_BASE_URL + "toplist").then(res => res.json()).then((data: NetWorkType) => {
            setisLoading(false)
            setTopList(data.list)
        })
    }, [])
    return [isLoading, TopList]
}