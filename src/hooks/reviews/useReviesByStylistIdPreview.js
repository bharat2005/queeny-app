import { useQuery } from "@tanstack/react-query"
import { collection, getDoc, getDocs, limit, query, where } from "firebase/firestore"
import { db } from "../../services/firebase"

export const useReviewsByStylistIdPreview = (id) =>{
    return useQuery({
        queryKey:['reviewsByStylistIdPreview', id],
        queryFn:async()=>{
            const q = query(collection(db,'reviews'), where('stylistId', '==', id), limit(3))
            const res = await getDocs(q)

            return res.docs.map(doc => doc.data())
        },
        enabled: !!id
    })
}