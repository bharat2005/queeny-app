import { useQuery } from "@tanstack/react-query"
import { collection, getDocs, limit, query, where } from "firebase/firestore"
import { db } from "../../services/firebase"

export const usenailStylesReviewsSalonPreview = (id) =>{
    return useQuery({
        queryKey:['salonnailStylesReviewsPreview', id],
        queryFn:async()=>{
            const q = query(collection(db, 'nailReviews'), where('salonId', '==', id), limit(2))
            const res = await getDocs(q)
            return res.docs.map(doc => doc.data())
        },
        enabled:!!id
    })
}