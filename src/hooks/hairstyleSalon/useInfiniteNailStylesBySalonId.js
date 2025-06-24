import { useInfiniteQuery, useQuery } from "@tanstack/react-query"
import { collection, doc, getDoc, getDocs, limit, orderBy, query, startAfter, where } from "firebase/firestore"
import { db } from "../../services/firebase"

export const useInfiniteNailStylesBySalonId = (id) =>{
    return useInfiniteQuery({
        queryKey:['nailstylesBySalonIdInfinite',id ],
        queryFn:async({pageParam})=>{
        const q = pageParam ? 
         query(collection(db, 'taggedNailStyles'), where('salonId', '==', id), orderBy('createdAt', 'desc'), startAfter(pageParam), limit(12))
         : 
         query(collection(db, 'taggedNailStyles'), where('salonId', '==', id), orderBy('createdAt', 'desc'), limit(12))
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