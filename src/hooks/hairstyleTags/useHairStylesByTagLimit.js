import { useQuery } from "@tanstack/react-query"
import { collection, getDocFromCache, getDocs, limit, orderBy, query, where } from "firebase/firestore"
import { db } from "../../services/firebase"

export const useHairStylesByTagLimit = (tag) =>{
    return useQuery({
        queryKey:['hairstylesByTagLimit',tag ],
        queryFn:async()=> {
            const q = tag === 'all' ? 
            query(collection(db, 'taggedHairStyles'), orderBy('createdAt', 'desc'), limit(12))
            :
            query(collection(db, 'taggedHairStyles'), where('tags', 'array-contains', tag), orderBy('createdAt', 'desc'), limit(12))
            const res = await getDocs(q)
            return res.docs.map(doc => doc.data())
        },
        enabled: !!tag
    })
}