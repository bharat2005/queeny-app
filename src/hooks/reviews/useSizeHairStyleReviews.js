import { useQuery } from "@tanstack/react-query"
import { collection, doc, getDoc, getDocs, query, where } from "firebase/firestore"
import { db } from "../../services/firebase"

export const useSizeHairStyleReviews = (id) =>{
    return useQuery({
        queryKey:['hairStyleReviewsSize', id],
        queryFn:async()=> {
            const q = query(collection(db, 'reviews'), where('salonId', '==', id))
            const res = await getDocs(q)
            return res.size
        }   ,
        enabled: !!id
    })
}