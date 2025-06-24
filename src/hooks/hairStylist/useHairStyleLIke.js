import { useQuery } from "@tanstack/react-query"
import { doc, getDoc } from "firebase/firestore"
import { db } from "../../services/firebase"
import { useAuth } from '../../contexts/AuthContextProvider'

export const useHairStyleLike = (id) =>{
    const {user} = useAuth()
    return useQuery({
        queryKey:['hairstylelike', id],
        queryFn:async()=> {
            const res = await getDoc(doc(db, 'users', user?.uid, 'likedHairStyles', id))
            return res.exists()
        },
        enabled: !!id
    })

}