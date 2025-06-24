import { useInfiniteQuery, useQuery } from "@tanstack/react-query"
import { collection, doc, getDoc, getDocs, limit, orderBy, query, startAfter, where } from "firebase/firestore"
import { db } from "../../services/firebase"

export const useSizeNailStylesBySalonId = (id) =>{
    return useQuery({
        queryKey:['nailstylesBySalonIdSize',id ],
        queryFn:async()=>{
        const q = 
         query(collection(db, 'taggedNailStyles'), where('salonId', '==', id))
        const res = await getDocs(q)
        return res.size
        },
        enabled: !!id
    })
}