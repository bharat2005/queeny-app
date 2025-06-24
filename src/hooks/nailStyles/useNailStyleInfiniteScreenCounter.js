import { useQuery } from "@tanstack/react-query"
import { collection, getDoc, getDocs, query, where } from "firebase/firestore"
import { db } from "../../services/firebase"

export const useNailStyleInfiniteScreenCounter = (categoryId) =>{
    return useQuery({
        queryKey:['nailstylesSizeCounter', categoryId],
        queryFn:async()=>{
            const q =  query(collection(db, 'taggedNailStyles'), where('category', '==', categoryId))
            const res = await getDocs(q)
            return res.size
        },
        enabled: !!categoryId

    })
}