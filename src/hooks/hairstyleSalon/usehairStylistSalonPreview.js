import { useQuery } from "@tanstack/react-query"
import { collection, getDocs, limit, query, where } from "firebase/firestore"
import { db } from "../../services/firebase"

export const usehairStylistSalonPreview = (id) =>{
    return useQuery({
        queryKey:['salonhairStylistPreview', id],
        queryFn:async()=>{
            const q = query(collection(db, 'hairStylists'), where('salonId', '==', id), limit(3))
            const res = await getDocs(q)
            return res.docs.map(doc => doc.data())
        },
        enabled:!!id
    })
}