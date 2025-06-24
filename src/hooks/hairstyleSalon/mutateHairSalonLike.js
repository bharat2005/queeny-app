import { useMutation, useQueryClient } from "@tanstack/react-query"
import { deleteDoc, doc, serverTimestamp, setDoc } from "firebase/firestore"
import { db } from "../../services/firebase"
import { useAuth } from "../../contexts/AuthContextProvider"

export const mutateHairSalonLike = (id) => {
    const queryClient = useQueryClient()
    const {user} = useAuth()
    return useMutation({
        mutationFn:async({isLiked})=> {
            const docRef = doc(db, 'users', user?.uid, 'likedHairSalon', id)
                if(isLiked){
                    await deleteDoc(docRef)
                } else {
                    await setDoc(docRef, {
                        createdAt:serverTimestamp(),
                    })
                }
        },
        onMutate:async()=> {
           await queryClient.cancelQueries(['hairsalonLike', id ])
            const prevCatched = queryClient.getQueryData(['hairsalonLike', id ])
            
            queryClient.setQueryData(['hairsalonLike', id ], prev => !prev)

            return {
                prevCatched
            }

        },
                onSuccess:()=> {
            queryClient.invalidateQueries(['hairsalonLike', id ])
        } ,
        onError:(error, variable, context)=>{
            queryClient.setQueryData(['hairsalonLike', id], context.prevCatched )

        }


    })
}