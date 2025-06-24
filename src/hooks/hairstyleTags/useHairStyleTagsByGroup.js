import { useQuery } from "@tanstack/react-query"
import { collection, getDocs, query, where } from "firebase/firestore"
import { db } from "../../services/firebase"

export const useHairStyleTagsByGroup = (group) =>{
    return useQuery({
        queryKey:['hairstyleTagsByGroup', group],
        queryFn:async()=>{
            const q = query(collection(db, 'hairstyleTags'), where('type', '==', group))
            const res = await getDocs(q)

            return res.docs.map(doc => doc.data())
        },
        enabled: !!group
    })
}