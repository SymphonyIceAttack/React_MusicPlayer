import React, { useEffect, useState } from "react";
import localRequest from "@/utils/localRequest"
import ArrayCreate from '@/utils/ArrayCreate'
import { nanoid } from "nanoid";
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
        let isUpdate = true
        setisLoading(true)

        localRequest("/images/th.jpeg").then((data) => {
            isUpdate && setisLoading(false)
            isUpdate && setHotDjList(ArrayCreate<HotDjListType>(30, {
                rcmdtext: "text",
                name: "xxxx",
                picUrl: data,
                id: nanoid()
            }))
        })
        return () => {
            isUpdate = false
        }
    }, [offset])
    return [isLoading, setoffset, HotDjList]
}
