import { useMutation, useQueryClient } from "@tanstack/react-query"
import { deleteDoc, doc, serverTimestamp, setDoc } from "firebase/firestore"
import { db } from "../../services/firebase"
import { useAuth } from "../../contexts/AuthContextProvider"

export const mutateNailStyleLike = (id) => {
    const {user} = useAuth()
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn:async({isLiked})=> {
            const docRef = doc(db, 'users', user?.uid, 'likedNailStyles', id)
            if(isLiked){
                deleteDoc(docRef)
            } else {
                setDoc(docRef, {
                    createdAt:serverTimestamp()
                })
            }

        },
        onSuccess:()=> {
            queryClient.invalidateQueries(['nailstylelike', id])
        },
        onMutate:async()=> {
            await queryClient.cancelQueries(['nailstylelike', id])
            const prevCagtched = queryClient.getQueryData(['nailstylelike', id])
            queryClient.setQueryData(['nailstylelike', id] , prev => !prev)
            return{
                prevCagtched
            }

        },
        onError:(error, vara, context)=>{
            queryClient.setQueryData(['nailstylelike', id], context.prevCagtched)
        }
    })
}