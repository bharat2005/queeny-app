import { useQuery } from "@tanstack/react-query"
import { collection, getDocFromServer, getDocs, limit, query, where } from "firebase/firestore"
import { db } from "../../services/firebase"

export const useStylistBlogsPreview = (id) =>{
    return useQuery({
        queryKey:['stylistBlogsPreview', id],
        queryFn:async()=>{
            const q = query(collection(db,'blogs'), where('stylistId', '==', id), limit(2))
            const res = await getDocs(q)

            return res.docs.map(doc => doc.data())
        },
        enabled: !!id
    })
}