import { useInfiniteQuery, useQuery } from "@tanstack/react-query"
import { collection, doc, getDoc, getDocs, limit, orderBy, query, startAfter, where } from "firebase/firestore"
import { db } from "../../services/firebase"

export const useInfiniteNailStaffsBySalonId = (id) =>{
    return useInfiniteQuery({
        queryKey:['nailStaffsBySalonIdInfinite',id ],
        queryFn:async({pageParam})=>{
        const q = pageParam ? 
         query(collection(db, 'nailStaffs'), where('salonId', '==', id), orderBy('createdAt', 'desc'), startAfter(pageParam), limit(4))
         : 
         query(collection(db, 'nailStaffs'), where('salonId', '==', id), orderBy('createdAt', 'desc'), limit(4))
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