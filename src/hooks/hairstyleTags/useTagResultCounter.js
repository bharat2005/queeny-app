import { useInfiniteQuery, useQuery } from "@tanstack/react-query"
import { collection, getDoc, getDocs, limit, orderBy, query, startAfter, where } from "firebase/firestore"
import { db } from "../../services/firebase"

export const useTagResultCounter = (tag) => {
    return useQuery({
        queryKey:['tagResultCounter', tag],
        queryFn:async()=>{
            const q = query(collection(db, 'taggedHairStyles'), where('tags', 'array-contains', tag))
             const res = await getDocs(q)
            return res.size
        },
        enabled: !!tag
    })
}