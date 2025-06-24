import { useQuery } from "@tanstack/react-query"
import { doc, getDoc } from "firebase/firestore"
import { db } from "../../services/firebase"

export const useBlogById = (id) =>{
    return useQuery({
        queryKey:['blogById', id],
        queryFn:async() => {
            const res = await getDoc(doc(db, 'blogs', id))
            return res.data()
        },
        enabled: !!id
    })
}