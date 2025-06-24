import { useQuery } from "@tanstack/react-query"
import { doc, getDoc, query } from "firebase/firestore"
import { useAuth } from '../../contexts/AuthContextProvider'
import { db } from "../../services/firebase"

export const useNailSalonLike = (id) =>{
    const {user} = useAuth()
    return useQuery({
        queryKey:['nailsalonLike', id ],
        queryFn:async() => {
            const q = doc(db, 'users', user?.uid, 'likedNailSalon', id)
            const res = await getDoc(q)
            return res.exists()
        },
        enabled: !!id
    })
}