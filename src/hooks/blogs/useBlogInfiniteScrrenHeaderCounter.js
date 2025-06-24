import { useQuery } from "@tanstack/react-query"
import { collection, getDoc, getDocs, query, where } from "firebase/firestore"
import { db } from "../../services/firebase"

export const useBlogINfiinteScrrenHeaderCounter = () =>{
    return useQuery({
        queryKey:['blogScreenCounter'],
        queryFn:async()=>{
            const q = query(collection(db, 'blogs'))
            const res = await getDocs(q)
            return res.size
        }
    })
}