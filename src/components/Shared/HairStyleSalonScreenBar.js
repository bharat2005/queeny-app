import { View, Text, Dimensions, Pressable } from 'react-native'
import React from 'react'
import Entypo from '@expo/vector-icons/Entypo'
import Colors from '../../constants/Colors'
import HairSalonLikeButton from './HairSalonLikeButton'
import { router } from 'expo-router'

const HairStyleSalonScreenBar = ({salonId}) => {
  return (
    <View style={{height:48,backgroundColor:'white', width:Dimensions.get('screen').width, flexDirection:'row', paddingHorizontal:12, alignItems:'center', justifyContent:'center'}}>

<Pressable onPress={()=> router.back()} style={{position:'absolute', left:12}}>
        <Entypo name="chevron-thin-left" size={24} onPress={()=> router.back()} color={Colors.MAINPINK} />
</Pressable>


        <Text style={{fontFamily:'medium', fontSize:18}}>
            Salon
        </Text>
      

<View style={{position:'absolute', right:18}}>
   <HairSalonLikeButton salonId={salonId} />
</View>
     


    </View>
  )
}

export default HairStyleSalonScreenBar