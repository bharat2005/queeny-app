import { useMutation, useQueryClient } from "@tanstack/react-query"
import { deleteDoc, doc, serverTimestamp, setDoc } from "firebase/firestore"
import { db } from "../../services/firebase"
import { useAuth } from "../../contexts/AuthContextProvider"

export const mutateHairStyleLike = (id) => {
    const {user} = useAuth()
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn:async({isLiked})=> {
            const docRef = doc(db, 'users', user?.uid, 'likedHairStyles', id)
            if(isLiked){
                deleteDoc(docRef)
            } else {
                setDoc(docRef, {
                    createdAt:serverTimestamp()
                })
            }

        },
        onSuccess:()=> {
            queryClient.invalidateQueries(['hairstylelike', id])
        },
        onMutate:async()=> {
            await queryClient.cancelQueries(['hairstylelike', id])
            const prevCagtched = queryClient.getQueryData(['hairstylelike', id])
            queryClient.setQueryData(['hairstylelike', id] , prev => !prev)
            return{
                prevCagtched
            }

        },
        onError:(error, vara, context)=>{
            queryClient.setQueryData(['hairstylelike', id], context.prevCagtched)
        }
    })
}