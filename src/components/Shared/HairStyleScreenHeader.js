import { View, Text, Dimensions, Pressable } from 'react-native'
import React from 'react'
import Colors from '../../constants/Colors'
import AntDesign from '@expo/vector-icons/AntDesign';
import HairStyleLikeButton from './HairStyleLikeButton';
import { router } from 'expo-router';

const HairStyleScreenHeader = ({hairStyleId}) => {
  return (
    <View style={{height:55, paddingHorizontal:12, width:Dimensions.get('screen').width, flexDirection:'row', justifyContent:'space-between', alignItems:'center' }}>
              <Pressable
      onPress={()=> router.back()}
      >
          <AntDesign name="close" size={28} color={Colors.MAINPINK} />
      </Pressable>


        <HairStyleLikeButton hairStyleId={hairStyleId} />
    </View>
  )
}

export default HairStyleScreenHeader