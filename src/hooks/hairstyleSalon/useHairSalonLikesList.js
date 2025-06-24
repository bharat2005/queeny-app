import { useQuery } from "@tanstack/react-query"
import { collection, doc, getDoc, getDocs } from "firebase/firestore"
import { db } from "../../services/firebase"
import { useAuth } from "../../contexts/AuthContextProvider"

export const useHairSalonLIkesList = () => {
    const {user} = useAuth()
    return useQuery({
        queryKey:['hairsalonlikeslist', user?.uid],
        queryFn:async()=> {
            const res = await getDocs(collection(db, 'users', user?.uid, 'likedHairSalon'))
            const docIds = res.docs.map(doc => doc.id)

            const list = await Promise.all(docIds.map( async(docId) => {
                const res = await getDoc(doc(db, 'hairstyleSalons', docId))
                return res.data() 
            }))

            return list
        },
        enabled: !!(user?.uid)
    })
}