import { useInfiniteQuery } from "@tanstack/react-query"
import { collection, getDoc, getDocs, limit, orderBy, query, startAfter, where } from "firebase/firestore"
import { db } from "../../services/firebase"

export const userInfiniteHairStylesByTag = (tag) => {
    return useInfiniteQuery({
        queryKey:['infinteHairStylesByTag', tag],
        queryFn:async({pageParam})=>{
            const q = pageParam ?
            query(collection(db, 'taggedHairStyles'), where('tags', 'array-contains', tag), orderBy('createdAt', 'desc'), startAfter(pageParam), limit(12))
            : 
             query(collection(db, 'taggedHairStyles'), where('tags', 'array-contains', tag), orderBy('createdAt', 'desc'), limit(12))

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