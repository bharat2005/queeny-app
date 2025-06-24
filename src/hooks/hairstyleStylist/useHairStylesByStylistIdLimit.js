import { useQuery } from "@tanstack/react-query"
import { collection, doc, getDoc, getDocs, limit, query, where } from "firebase/firestore"
import { db } from "../../services/firebase"


export const useTagedHairStylesByStylistIdLimit = (id) =>{
    return useQuery({
        queryKey:['hairstylesByStylistIdLimit',id ],
        queryFn:async()=>{
        const q = query(collection(db, 'taggedHairStyles'), where('stylistId', '==', id), limit(9))
        const res = await getDocs(q)

        return res.docs.map(doc => doc.data())
        
        },
        enabled: !!id
    })
}