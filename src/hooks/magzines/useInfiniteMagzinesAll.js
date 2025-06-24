import { Query, useInfiniteQuery } from '@tanstack/react-query'
import { collection, getDoc, getDocs, limit, orderBy, query, startAfter, where } from 'firebase/firestore'
import {db} from '../../services/firebase'


export const useINfiniteMagzinesAll = (categoryId, currenttType) =>{
    return useInfiniteQuery({
        queryKey:['magzinesAll',categoryId, currenttType],
        queryFn:async({pageParam})=>{
            let q;
            if(categoryId === 'all'){
             const createdAt = currenttType === 'Popular' ? 'asc' :'desc'
            q = pageParam ?
            query(collection(db, 'magzines'), orderBy('createdAt', createdAt), startAfter(pageParam), limit(8))
            : 
            query(collection(db, 'magzines'), orderBy('createdAt', createdAt), limit(8))

            } else{
            q = pageParam ?
             query(collection(db, 'magzines'),where('type', '==', categoryId), orderBy('createdAt', 'desc'), startAfter(pageParam), limit(8))
            : 
             query(collection(db, 'magzines'), where('type', '==', categoryId), orderBy('createdAt', 'desc'), limit(8))

            }
     

             const res = await getDocs(q)
             const lastRefDoc = res.docs[res.docs.length - 1]

             return {
                list: res.docs.map(doc => doc.data()),
                lastRefDoc
             }

        },
        getNextPageParam:(lastPageParam) => lastPageParam.lastRefDoc,
        enabled: !!(categoryId)
    })
}