import { View, Text, Pressable } from 'react-native'
import React from 'react'
import AntDesign from '@expo/vector-icons/AntDesign';
import { useHairStyleLike } from '../../hooks/hairStylist/useHairStyleLIke';
import { mutateHairStyleLike } from '../../hooks/hairStylist/mutateHairStyleLike';
import Colors from '../../constants/Colors';

const HairStyleLikeButton = ({hairStyleId}) => {
    const {data, error} = useHairStyleLike(hairStyleId)
    const {mutate, error:merror} = mutateHairStyleLike(hairStyleId)
    

  return (
    <Pressable style={{marginHorizontal:8}} onPress={()=> mutate({isLiked: data})}>
      
<AntDesign name={data ? "heart" : 'hearto'} size={24} color={Colors.MAINPINK} />
    </Pressable>
  )
}

export default HairStyleLikeButton