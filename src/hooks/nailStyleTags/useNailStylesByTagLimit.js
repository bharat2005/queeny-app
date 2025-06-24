import { useQuery } from "@tanstack/react-query"
import { collection, getDocFromCache, getDocs, limit, query, where } from "firebase/firestore"
import { db } from "../../services/firebase"

export const useNailStylesByTagLimit = (tag) =>{
    return useQuery({
        queryKey:['nailstylesByTagLimit',tag ],
        queryFn:async()=> {
            const q = tag === 'all' ? 
            query(collection(db, 'taggedNailStyles'), limit(12))
            :
            query(collection(db, 'taggedNailStyles'), where('tags', 'array-contains', tag), limit(12))
            const res = await getDocs(q)
            return res.docs.map(doc => ({...doc.data(), docId:doc.id }))
        },
        enabled: !!tag
    })
}