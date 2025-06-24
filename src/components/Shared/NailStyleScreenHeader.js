import { View, Text, Dimensions, Pressable } from 'react-native'
import React from 'react'
import Colors from '../../constants/Colors'
import AntDesign from '@expo/vector-icons/AntDesign';
import HairStyleLikeButton from './HairStyleLikeButton';
import { router } from 'expo-router';
import NailStyleLikeButton from './NailStyleLikeButton';

const HairStyleScreenHeader = ({nailStyleId}) => {
  return (
    <View style={{height:55, paddingHorizontal:12, width:Dimensions.get('screen').width, flexDirection:'row', justifyContent:'space-between', alignItems:'center' }}>
              <Pressable
      onPress={()=> router.back()}
      >
          <AntDesign name="close" size={28} color={Colors.MAINPURPLE} />
      </Pressable>


        <View style={{marginHorizontal:6}}>
<NailStyleLikeButton nailStyleId={nailStyleId} />
        </View>
    
    </View>
  )
}

export default HairStyleScreenHeader