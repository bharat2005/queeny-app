import { useMutation, useQueryClient } from "@tanstack/react-query"
import { deleteDoc, doc, query, serverTimestamp, setDoc } from "firebase/firestore"
import { db } from "../../services/firebase"
import { useAuth } from "../../contexts/AuthContextProvider"

export const mutateStylistLIke = (id) => {
    const {user} = useAuth()
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn:async({isLiked})=>{
            const docRef = doc(db, 'users', user?.uid, 'likedStylists', id)
            if(isLiked){
                deleteDoc(docRef)
            } else {
                setDoc(docRef, {
                    createdAt:serverTimestamp()
                })
            }
             
        },
        onMutate: async()=> {
            await queryClient.cancelQueries(['stylistlike', id])

            const prevCatched = queryClient.getQueryData(['stylistlike', id])

            queryClient.setQueryData(['stylistlike', id], prev => !prev)

            return {
                prevCatched
            }
        },
        onSuccess:()=> {
            queryClient.invalidateQueries(['stylistlike', id])
        },
        onError:(error, varai, context)=> {
            queryClient.setQueryData(['stylistlike', id], context.prevCatched)
        }
    })
}