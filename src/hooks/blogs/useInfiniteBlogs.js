import { useInfiniteQuery } from "@tanstack/react-query"
import { collection, getDocs, limit, orderBy, query, startAfter, where } from "firebase/firestore"
import { db } from "../../services/firebase"

const selectorTypes = [
    {title: 'New Arrivals', id: 'newArrival'},
     {title: 'Categories', id: 'categories'},
      {title: 'Staff', id: 'staff'},
       {title: 'BlackBox', id: 'blackBox'},
]


export const useInifinteBlogs = () =>{
    return useInfiniteQuery({
        queryKey:['blogInfinte'],
        queryFn:async({pageParam})=>{
            const q = pageParam ?
            query(collection(db, 'blogs'), orderBy('createdAt', 'desc'), startAfter(pageParam), limit(8))
            :
            query(collection(db, 'blogs'), orderBy('createdAt', 'desc'), limit(8))

            const res = await getDocs( q)
            const lastDocRef = res.docs[res.docs.length - 1]

            return {
                list: res.docs.map(doc => doc.data()),
                lastDocRef
            }


        },
        getNextPageParam:(lastPageParam) => lastPageParam.lastDocRef,
    })
}