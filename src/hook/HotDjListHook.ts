import React, { useEffect, useState } from "react";
export type HotDjListType = {
    rcmdtext: string;
    name: string;
    picUrl: string;
    id: string
}
interface NetWorkType {
    djRadios: HotDjListType[]
}

export default (): [boolean, React.Dispatch<React.SetStateAction<number>>, HotDjListType[]] => {
    const [isLoading, setisLoading] = useState(true)
    const [offset, setoffset] = useState(0)
    const [HotDjList, setHotDjList] = useState<HotDjListType[]>([])
    useEffect(() => {
        setisLoading(true)
        fetch(import.meta.env.VITE_BASE_URL + `dj/hot?limit=20&offset=${offset}`).then(res => res.json()).then((data: NetWorkType) => {
            setisLoading(false)
            setHotDjList(data.djRadios)
        })
    }, [offset])
    return [isLoading, setoffset, HotDjList]
}
