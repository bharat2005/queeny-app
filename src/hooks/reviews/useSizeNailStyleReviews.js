import { useQuery } from "@tanstack/react-query"
import { collection, doc, getDoc, getDocs, query, where } from "firebase/firestore"
import { db } from "../../services/firebase"

export const useSizeNailStyleReviews = (id) =>{
    return useQuery({
        queryKey:['nailStyleReviewsSize', id],
        queryFn:async()=> {
            const q = query(collection(db, 'nailReviews'), where('salonId', '==', id))
            const res = await getDocs(q)
            return res.size
        }   ,
        enabled: !!id
    })
}