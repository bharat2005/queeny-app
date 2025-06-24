import { useQuery } from "@tanstack/react-query"
import { collection, getDocs, query, where } from "firebase/firestore"
import { db } from "../../services/firebase"

export const useInfiniteHairStyleByCategoryCounter = (categoryId) =>{
    return useQuery({
        queryKey:['hairstyleInfinteHeaderCounter', categoryId],
        queryFn:async()=>{
            const q = query(collection(db, 'taggedHairStyles'), where('category' , 'array-contains', categoryId))
            const res = await getDocs(q)
            return res.size
        },
        enabled: !!categoryId

    })
}