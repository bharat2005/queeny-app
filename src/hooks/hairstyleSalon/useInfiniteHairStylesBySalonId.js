import { useInfiniteQuery, useQuery } from "@tanstack/react-query"
import { collection, doc, getDoc, getDocs, limit, orderBy, query, startAfter, where } from "firebase/firestore"
import { db } from "../../services/firebase"

export const useInfiniteHairStylesBySalonId = (id) =>{
    return useInfiniteQuery({
        queryKey:['hairstylesBySalonIdInfinite',id ],
        queryFn:async({pageParam})=>{
        const q = pageParam ? 
         query(collection(db, 'taggedHairStyles'), where('salonId', '==', id), orderBy('createdAt', 'desc'), startAfter(pageParam), limit(12))
         : 
         query(collection(db, 'taggedHairStyles'), where('salonId', '==', id), orderBy('createdAt', 'desc'), limit(12))
        const res = await getDocs(q)
        const lastDocRef = res.docs[res.docs.length - 1]

        return {
            list : res.docs.map(doc => doc.data()),
            lastDocRef
        }
        
        },
        getNextPageParam:(lastPageParam) => lastPageParam.lastDocRef,
        enabled: !!id
    })
}