import { useMutation, useQueryClient } from "@tanstack/react-query"
import { deleteDoc, doc, serverTimestamp, setDoc } from "firebase/firestore"
import { db } from "../../services/firebase"
import { useAuth } from "../../contexts/AuthContextProvider"

export const mutateNailSalonLike = (id) => {
    const queryClient = useQueryClient()
    const {user} = useAuth()
    return useMutation({
        mutationFn:async({isLiked})=> {
            const docRef = doc(db, 'users', user?.uid, 'likedNailSalon', id)
                if(isLiked){
                    await deleteDoc(docRef)
                } else {
                    await setDoc(docRef, {
                        createdAt:serverTimestamp(),
                    })
                }
        },
        onMutate:async()=> {
           await queryClient.cancelQueries(['nailsalonLike', id ])
            const prevCatched = queryClient.getQueryData(['nailsalonLike', id ])
            
            queryClient.setQueryData(['nailsalonLike', id ], prev => !prev)

            return {
                prevCatched
            }

        },
                onSuccess:()=> {
            queryClient.invalidateQueries(['nailsalonLike', id ])
        } ,
        onError:(error, variable, context)=>{
            queryClient.setQueryData(['nailsalonLike', id], context.prevCatched )

        }


    })
}