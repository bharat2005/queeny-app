import { useQuery } from "@tanstack/react-query"
import { collection, doc, getDoc, getDocs } from "firebase/firestore"
import { db } from "../../services/firebase"

export const useAllHairStylist = () => {
    return useQuery({
        queryKey:['allhairStylists'],
        queryFn:async()=>{
            const res = await getDocs(collection(db, 'hairStylists'))
            return res.docs.map(doc => doc.data())
        }
    })
}