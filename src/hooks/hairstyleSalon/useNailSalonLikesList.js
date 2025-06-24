import { useQuery } from "@tanstack/react-query"
import { collection, doc, getDoc, getDocs } from "firebase/firestore"
import { db } from "../../services/firebase"
import { useAuth } from "../../contexts/AuthContextProvider"

export const useNailSalonLIkesList = () => {
    const {user} = useAuth()
    return useQuery({
        queryKey:['nailsalonlikeslist', user?.uid],
        queryFn:async()=> {
            const res = await getDocs(collection(db, 'users', user?.uid, 'likedNailSalon'))
            const docIds = res.docs.map(doc => doc.id)

            const list = await Promise.all(docIds.map( async(docId) => {
                const res = await getDoc(doc(db, 'nailstylesSalons', docId))
                return res.data() 
            }))

            return list
        },
        enabled: !!(user?.uid)
    })
}