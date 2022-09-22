import React, { useEffect, useState } from "react";
import localRequest from "@/utils/localRequest";
import ArrayCreate from '@/utils/ArrayCreate'
import { nanoid } from "nanoid";
export interface playlists {
    name: string;
    id: string;
    coverImgUrl: string;

}


interface NetWorkType {
    playlists: playlists[];
    total: number
}

export default (): [number, React.Dispatch<React.SetStateAction<number>>, playlists[], boolean, number] => {
    const [isLoading, setisLoading] = useState(true)
    const [offset, setoffset] = useState(0)
    const [plaLists, setplaList] = useState<playlists[]>([])
    const [total, setTotal] = useState(0)

    useEffect(() => {
        let isUpdate = true
        setisLoading(true)
        localRequest("/images/th.jpeg").then((data) => {
            isUpdate && setisLoading(false)

            isUpdate && setplaList(ArrayCreate<playlists>(30, {
                name: "xxxxx",
                id: nanoid(),
                coverImgUrl: data
            }))
            isUpdate && setTotal(300)
        })
        return () => {
            isUpdate = false
        }
    }, [offset])


    return [offset, setoffset, plaLists, isLoading, total]
}