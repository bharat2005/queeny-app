import { useQuery } from "@tanstack/react-query"
import { doc, getDoc, query } from "firebase/firestore"
import { useAuth } from '../../contexts/AuthContextProvider'
import { db } from "../../services/firebase"

export const useHairSalonLike = (id) =>{
    const {user} = useAuth()
    return useQuery({
        queryKey:['hairsalonLike', id ],
        queryFn:async() => {
            const q = doc(db, 'users', user?.uid, 'likedHairSalon', id)
            const res = await getDoc(q)
            return res.exists()
        },
        enabled: !!id
    })
}