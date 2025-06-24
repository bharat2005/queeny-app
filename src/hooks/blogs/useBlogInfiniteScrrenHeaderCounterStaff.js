import { useQuery } from "@tanstack/react-query"
import { collection, getDoc, getDocs, query, where } from "firebase/firestore"
import { db } from "../../services/firebase"

export const useBlogINfiinteScrrenHeaderCounterStaff = (id) =>{
    return useQuery({
        queryKey:['blogScreenCounterStaff', id],
        queryFn:async()=>{
            const q = query(collection(db, 'blogs'), where('stylistId', '==', id))
            const res = await getDocs(q)
            return res.size
        }
    })
}