import React, { useEffect, useState } from "react";
import localRequest from "@/utils/localRequest";
import ArrayCreate from '@/utils/ArrayCreate'
import { nanoid } from "nanoid";

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
        localRequest("/images/th.jpeg").then((data) => {
            setisLoading(false)
            setNewMvList(ArrayCreate<NewMvType>(30, {
                name: "xxxx",
                cover: data,
                id: nanoid()
            }))
        })
    }, [])

    return [isLoading, NewMvList]

}