import React, { useEffect, useState } from "react";
interface artists {
    name: string;
    id: string;
    picUrl: string
}
interface NetWorkType {
    list: {
        artists: artists[]
    }
}
export default (type: number): [boolean, artists[]] => {
    const [songerList, setsongerList] = useState<artists[]>([])
    const [isLoading, setisLoading] = useState(true)
    useEffect(() => {
        setisLoading(true)
        fetch(import.meta.env.VITE_BASE_URL + "toplist/artist?type=1").then(res => res.json()).then((data: NetWorkType) => {
            setisLoading(false)
            setsongerList(data.list.artists)
        })
    }, [type])

    return [isLoading, songerList]
}
