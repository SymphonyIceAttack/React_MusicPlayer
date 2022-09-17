import React, { useEffect, useState } from "react";

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
        fetch(import.meta.env.VITE_BASE_URL + `top/playlist?limit=15&offset=${offset}`, {
            mode: 'cors'
        }).then(res => res.json()).then((data: NetWorkType) => {
            isUpdate && setisLoading(false)

            isUpdate && setplaList(data.playlists)
            isUpdate && setTotal(data.total)
        })
        return () => {
            isUpdate = false
        }
    }, [offset])


    return [offset, setoffset, plaLists, isLoading, total]
}