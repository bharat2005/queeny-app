import { useQuery } from "@tanstack/react-query"
import { doc, getDoc } from "firebase/firestore"
import { db } from "../../services/firebase"

export const useNailStyleSalonById = (id) => {
    return useQuery({
        queryKey:['nailstleSalonById', id],
        queryFn:async()=>{
            const res = await getDoc(doc(db, 'nailstylesSalons', id))
            return res.data()
        },
        enabled: !!id
    })
}