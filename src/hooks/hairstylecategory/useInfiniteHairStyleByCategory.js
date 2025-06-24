import { useInfiniteQuery } from "@tanstack/react-query"
import { collection, getDoc, getDocs, limit, orderBy, query, startAfter, where } from "firebase/firestore"
import { db } from "../../services/firebase"

export const useInfiniteHairStyleByCategory = (category, currentType) => {
    return useInfiniteQuery({
            queryKey:['hairStyleByCAtegoryInfinite', category, currentType],
            queryFn:async({pageParam})=> {
                const createdAt = currentType === 'popular' ? 'desc' : 'asc'
                const q = pageParam ?
                query(collection(db, 'taggedHairStyles'), where('category' , 'array-contains', category), orderBy('createdAt', createdAt), startAfter(pageParam), limit(12))
                :
                query(collection(db, 'taggedHairStyles'), where('category' , 'array-contains', category), orderBy('createdAt', createdAt),  limit(12))

                const res = await getDocs(q)
                const lastDocRef = res.docs[res.docs.length - 1]

                return {
                    list: res.docs.map(doc => doc.data()),
                    lastDocRef
                }

            },

            getNextPageParam:(lastPageParam)=> lastPageParam.lastDocRef,
            enabled: !!category
    })
}