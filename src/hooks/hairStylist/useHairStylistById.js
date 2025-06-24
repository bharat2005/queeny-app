import { useQuery } from "@tanstack/react-query"
import { doc, getDoc } from "firebase/firestore"
import { db } from "../../services/firebase"

export const useHairStylistById = (id) => {
    return useQuery({
        queryKey:['hairStylistById', id],
        queryFn:async()=>{
            const res = await getDoc(doc(db, 'hairStylists', id))
            return res.data()
        },
        enabled: !!id
    })
}