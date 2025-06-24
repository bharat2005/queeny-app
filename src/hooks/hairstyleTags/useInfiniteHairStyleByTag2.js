import { useInfiniteQuery } from "@tanstack/react-query"
import { collection, getDoc, getDocs, limit, orderBy, query, startAfter, where } from "firebase/firestore"
import { db } from "../../services/firebase"

export const userInfiniteHairStylesByTa2 = (tag, type) => {

    return useInfiniteQuery({
        queryKey:['infinteHairStylesByTag2', tag, type],
        queryFn:async({pageParam})=>{
            const createdAt = type==='popular' ? 'desc' : 'asc'
            const q = pageParam ?
            query(collection(db, 'taggedHairStyles'), where('tags', 'array-contains', tag), orderBy('createdAt', createdAt), startAfter(pageParam), limit(12))
            : 
             query(collection(db, 'taggedHairStyles'), where('tags', 'array-contains', tag), orderBy('createdAt', createdAt), limit(12))

             const res = await getDocs(q)
             const lastDocRef = res.docs[res.docs.length - 1]
             return{
                list : res.docs.map(doc => doc.data()),
                lastDocRef

             } 
        },
        getNextPageParam:(lastPageParam)=> lastPageParam.lastDocRef,
        enabled: !!tag
    })
}