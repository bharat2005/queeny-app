import { useQuery } from "@tanstack/react-query"
import { doc, getDoc, getDocs } from "firebase/firestore"
import { db } from "../../services/firebase"

export const useMagzineById = (id) => {
    return useQuery({
        queryKey:['magzineById', id],
        queryFn:async()=>{
            const res = await getDoc(doc(db, 'magzines', id))
            return res.data()
        },
        enabled: !!id
    })
}