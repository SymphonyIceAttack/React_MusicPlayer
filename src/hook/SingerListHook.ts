import React, { useEffect, useState } from "react";
import localRequest from "@/utils/localRequest";
import ArrayCreate from '@/utils/ArrayCreate'
import { nanoid } from "nanoid";
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
        localRequest("/images/th.jpeg").then((data) => {
            setisLoading(false)
            setsongerList(ArrayCreate<artists>(30, {
                name: "xxxx",
                id: nanoid(),
                picUrl: data
            }))
        })
    }, [type])

    return [isLoading, songerList]
}
