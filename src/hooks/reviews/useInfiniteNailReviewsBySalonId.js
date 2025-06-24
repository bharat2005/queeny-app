import { useInfiniteQuery, useQuery } from "@tanstack/react-query"
import { collection, getDoc, getDocs, limit, orderBy, query, startAfter, where } from "firebase/firestore"
import { db } from "../../services/firebase"

export const useInfiniteNailReviewsBySalonId = (id, currentType) =>{
    return useInfiniteQuery({
        queryKey:['nailreviewsBySalonIdInfinite', id, currentType],
        queryFn:async({pageParam})=>{
            const createdAt = currentType === 'Newest' ? 'desc' : 'asc'
            const q = pageParam ? 
            query(collection(db,'nailReviews'), where('salonId', '==', id), orderBy('createdAt', createdAt), startAfter(pageParam), limit(3))
            :
            query(collection(db,'nailReviews'), where('salonId', '==', id), orderBy('createdAt', createdAt), limit(3)) 

            const res = await getDocs(q)
            const lastDcoRef = res.docs[res.docs.length - 1]

            return {
                list : res.docs.map(doc => doc.data()),
                lastDcoRef
            }
        },
        getNextPageParam:(lastPageParam) => lastPageParam.lastDcoRef,
        enabled: !!id
    })
}