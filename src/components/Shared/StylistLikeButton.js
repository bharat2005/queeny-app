import { View, Text, Pressable } from 'react-native'
import React from 'react'
import AntDesign from '@expo/vector-icons/AntDesign';
import { useStylistLike } from '../../hooks/hairstyleStylist/useStylistLike';
import { mutateStylistLIke } from '../../hooks/hairStylist/mutateStylistLike';
import Colors from '../../constants/Colors';

const StylistLikeButton = ({stylistId}) => {
    const {data, error} = useStylistLike(stylistId)
    const {mutate} = mutateStylistLIke(stylistId)

   

  return (
    <Pressable onPress={()=> mutate({isLiked: data})}  >
<AntDesign name={ data ? "heart" : "hearto"}  size={24} color={Colors.MAINPINK} />
    </Pressable>
  )
}

export default StylistLikeButton