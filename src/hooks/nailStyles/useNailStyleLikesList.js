import { useQuery } from "@tanstack/react-query"
import { useAuth } from "../../contexts/AuthContextProvider"
import { collection, doc, getDoc, getDocs } from "firebase/firestore"
import { db } from "../../services/firebase"

export const useNailStyleLikesList = ()=> {
    const {user}= useAuth()
    return useQuery({
        queryKey:['nailStylesLikesList', user?.uid],
        queryFn:async()=> {
            const res = await getDocs(collection(db, 'users', user?.uid, 'likedNailStyles'))
            const docIds = res.docs.map(doc => doc.id)

            return await Promise.all(docIds.map(async(id) => {
                const res = await getDoc(doc(db, 'taggedNailStyles', id))
                return res.data()
            }))
        },
        enabled: !!(user?.uid)
    })
}