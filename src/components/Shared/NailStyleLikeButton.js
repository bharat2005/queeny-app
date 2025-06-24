import { View, Text, Pressable } from 'react-native'
import React from 'react'
import AntDesign from '@expo/vector-icons/AntDesign';
import { mutateNailStyleLike } from '../../hooks/nailStyles/mutateNailStyleLike'
import { useNailStyleLike } from '../../hooks/nailStyles/useNailStyleLIke';
import Colors from '../../constants/Colors';

const NailStyleLikeButton = ({nailStyleId}) => {
    const {data, error} = useNailStyleLike(nailStyleId)
    const {mutate, error:merror} = mutateNailStyleLike(nailStyleId)

  

  return (
    <Pressable onPress={()=> mutate({isLiked: data})}>
<AntDesign name={ data ? "heart" : 'hearto'} size={24} color={Colors.MAINPURPLE} />
    </Pressable>
  )
}

export default NailStyleLikeButton