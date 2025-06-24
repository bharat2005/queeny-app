import { useQuery } from "@tanstack/react-query"
import { doc, getDoc } from "firebase/firestore"
import { db } from "../../services/firebase"
import { useAuth } from '../../contexts/AuthContextProvider'

export const useNailStyleLike = (id) =>{
    const {user} = useAuth()
    return useQuery({
        queryKey:['nailstylelike', id],
        queryFn:async()=> {
            const res = await getDoc(doc(db, 'users', user?.uid, 'likedNailStyles', id))
            return res.exists()
        },
        enabled: !!id
    })

}