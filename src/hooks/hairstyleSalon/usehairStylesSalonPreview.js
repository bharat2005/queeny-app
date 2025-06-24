import { useQuery } from "@tanstack/react-query"
import { collection, getDocs, limit, orderBy, query, where } from "firebase/firestore"
import { db } from "../../services/firebase"

export const usehairStylesSalonPreview = (id) =>{
    return useQuery({
        queryKey:['salonhairStylesPreview', id],
        queryFn:async()=>{
            const q = query(collection(db, 'taggedHairStyles'), where('salonId', '==', id),orderBy('createdAt', 'desc'), limit(3))
            const res = await getDocs(q)
            return res.docs.map(doc => doc.data())
        },
        enabled:!!id
    })
}