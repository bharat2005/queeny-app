import { useInfiniteQuery, useQuery } from "@tanstack/react-query"
import { collection, getDocs, limit, orderBy, query, startAfter, where } from "firebase/firestore"
import { db } from "../../services/firebase"

export const uuseInfiniteBlogsByStylist = (id) =>{
    return useInfiniteQuery({
        queryKey:['inifiteBlogsByStylist', id],
        queryFn:async({pageParam})=>{
            const q =  pageParam ?
            query(collection(db, 'blogs'), where('stylistId', '==', id), orderBy('createdAt', 'desc'), startAfter(pageParam), limit(8))
            : 
            query(collection(db, 'blogs'), where('stylistId', '==', id), orderBy('createdAt', 'desc'), limit(8))


            const res = await getDocs( q)
            const lastDocRef = res.docs[res.docs.length - 1]

            return{
                list: res.docs.map(doc => doc.data()),
                lastDocRef

            }
            
        },
        getNextPageParam:(lastPageParam) => lastPageParam.lastDocRef,
        enabled: !!id
    })
}