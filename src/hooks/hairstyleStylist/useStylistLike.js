import { useQuery } from "@tanstack/react-query"
import { collection, doc, getDoc, getDocs } from "firebase/firestore"
import { db } from "../../services/firebase"
import { useAuth } from "../../contexts/AuthContextProvider"

export const useStylistLike = (id) => {
    const {user} = useAuth()
    return useQuery({
        queryKey:['stylistlike', id],
        queryFn:async()=> {
            const res = await getDoc(doc(db, 'users', user?.uid, 'likedStylists', id))
            return res.exists()
        },
        enabled: !!id
    })
}