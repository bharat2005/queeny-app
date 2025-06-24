import { useInfiniteQuery, useQuery } from "@tanstack/react-query"
import { collection, doc, getDoc, getDocs, limit, orderBy, query, startAfter, where } from "firebase/firestore"
import { db } from "../../services/firebase"

export const useSizeHairStylistBySalonId = (id) =>{
    return useQuery({
        queryKey:['hairstylistBySalonIdSize',id ],
        queryFn:async()=>{
        const q = 
         query(collection(db, 'hairStylists'), where('salonId', '==', id))
        const res = await getDocs(q)
        return res.size
        },
        enabled: !!id
    })
}