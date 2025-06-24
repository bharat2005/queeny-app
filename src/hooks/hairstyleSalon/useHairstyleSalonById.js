import { useQuery } from "@tanstack/react-query"
import { doc, getDoc } from "firebase/firestore"
import { db } from "../../services/firebase"

export const useHairStyleSalonById = (id) => {
    return useQuery({
        queryKey:['hairstleSalonById', id],
        queryFn:async()=>{
            const res = await getDoc(doc(db, 'hairstyleSalons', id))
            return res.data()
        },
        enabled: !!id
    })
}