import { useQuery } from "@tanstack/react-query"
import { useAuth } from "../../contexts/AuthContextProvider"
import { collection, doc, getDoc, getDocs } from "firebase/firestore"
import { db } from "../../services/firebase"

export const useStylsitLikesList = () => {
    const {user} = useAuth()
    return useQuery({
        queryKey:['stylistslikesList', user?.uid],
        queryFn:async()=> {
            const res = await getDocs(collection(db, 'users', user?.uid, 'likedStylists'))
            const docIds = res.docs.map(doc => doc.id)

            const list = await Promise.all(docIds.map(async(id) => {
                const res = await getDoc(doc(db, 'hairStylists', id))
                return res.data()
            }))

            return list
        },
        enabled: !!(user?.uid)
    })
}