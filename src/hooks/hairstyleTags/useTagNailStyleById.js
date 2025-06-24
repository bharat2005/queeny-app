import { useQuery } from "@tanstack/react-query"
import { doc, getDoc } from "firebase/firestore"
import { db } from "../../services/firebase"

export const useTagNailStyleById = (id) =>{
    return useQuery({
        queryKey:['tagnailStyleById', id],
        queryFn:async()=>{
            const res = await getDoc(doc(db, 'taggedNailStyles', id))
            return res.data()
        },
        enabled: !!id
    })
}