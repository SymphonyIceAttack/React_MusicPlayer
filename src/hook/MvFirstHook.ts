import React, { useEffect, useState } from "react";


type NewMvType = {
    name: string;
    cover: string;
    id: string;
}

interface NetWorkType {
    data: NewMvType[]
}
export default (): [boolean, NewMvType[]] => {
    const [isLoading, setisLoading] = useState(true)
    const [NewMvList, setNewMvList] = useState<NewMvType[]>([])
    useEffect(() => {
        setisLoading(true)
        fetch(import.meta.env.VITE_BASE_URL + "mv/first").then(res => res.json()).then((data: NetWorkType) => {
            setisLoading(false)
            setNewMvList(data.data)
        })
    }, [])

    return [isLoading, NewMvList]

}