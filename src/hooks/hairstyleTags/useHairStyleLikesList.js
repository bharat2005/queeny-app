import { useQuery } from "@tanstack/react-query"
import { useAuth } from "../../contexts/AuthContextProvider"
import { collection, doc, getDoc, getDocs } from "firebase/firestore"
import { db } from "../../services/firebase"

export const useHairStyleLikesList = ()=> {
    const {user}= useAuth()
    return useQuery({
        queryKey:['hairStylesLikesList', user?.uid],
        queryFn:async()=> {
            const res = await getDocs(collection(db, 'users', user?.uid, 'likedHairStyles'))
            const docIds = res.docs.map(doc => doc.id)

            return await Promise.all(docIds.map(async(id) => {
                const res = await getDoc(doc(db, 'taggedHairStyles', id))
                return res.data()
            }))
        },
        enabled: !!(user?.uid)
    })
}