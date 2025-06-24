import { useQuery } from "@tanstack/react-query"
import { doc, getDoc } from "firebase/firestore"
import { db } from "../../services/firebase"

export const useTagHairStyleById = (id) =>{
    return useQuery({
        queryKey:['taghairStyleById', id],
        queryFn:async()=>{
            const res = await getDoc(doc(db, 'taggedHairStyles', id))
            return res.data()
        },
        enabled: !!id
    })
}