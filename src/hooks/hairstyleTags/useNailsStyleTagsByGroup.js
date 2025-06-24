import { useQuery } from "@tanstack/react-query"
import { collection, getDocs, query, where } from "firebase/firestore"
import { db } from "../../services/firebase"

export const useNailsStyleTagsByGroup = (group) =>{
    return useQuery({
        queryKey:['nailstyleTagsByGroup', group],
        queryFn:async()=>{
            const q = query(collection(db, 'nailstyleTags'), where('type', '==', group))
            const res = await getDocs(q)

            return res.docs.map(doc => doc.data())
        },
        enabled: !!group
    })
}