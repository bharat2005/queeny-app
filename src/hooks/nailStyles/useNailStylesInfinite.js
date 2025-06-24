import { useInfiniteQuery } from "@tanstack/react-query"
import { collection, getDocs, limit, orderBy, query, startAfter, where } from "firebase/firestore"
import { db } from "../../services/firebase"

export const useNailStyleInfinite = (categoryId, type) => {
    return useInfiniteQuery({
        queryKey:['nailstylesInfinite', categoryId, type],
        queryFn:async({pageParam})=>{

            const createdAt = type === 'popular' ? 'desc' : 'asc'
            const q = pageParam ?
            query(collection(db, 'taggedNailStyles'), where('category', '==', categoryId), orderBy('createdAt', createdAt), startAfter(pageParam), limit(12))
            :
            query(collection(db, 'taggedNailStyles'), where('category', '==', categoryId), orderBy('createdAt', createdAt), limit(12))

            const res = await getDocs(q)
            const lastDocRef = res.docs[res.docs.length - 1]

            return {
                list: res.docs.map(doc => doc.data()),
                lastDocRef
            }

        },
        getNextPageParam:(lastPageParams)=> lastPageParams.lastDocRef,
        enabled: !!(categoryId && type)
    })
}