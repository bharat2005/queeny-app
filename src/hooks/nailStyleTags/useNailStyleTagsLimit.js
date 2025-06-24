import { useQuery } from '@tanstack/react-query'
import { useAuth } from '../../contexts/AuthContextProvider'
import { collection, getDocs, limit, query } from 'firebase/firestore'
import { db } from '../../services/firebase'


export const useNailStyleTagsLimit = () =>{
    const {user} = useAuth()
    return useQuery({
        queryKey: ['nailstyleTagsLimit', user?.uid],
        queryFn:async()=> {
            const q = query(collection(db, 'nailstyleTags'), limit(12))
            const res = await getDocs(q)
            return res.docs.map(doc => doc.data())
        },
        enabled: !!user?.uid
    })
}