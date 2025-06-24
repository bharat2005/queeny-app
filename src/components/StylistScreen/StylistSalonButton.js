import { View, Text, Pressable, Dimensions } from 'react-native'
import React from 'react'
import { router } from 'expo-router'

const StylistSalonButton = ({salonId}) => {
  return (
<Pressable style={{height:50, width:Dimensions.get('screen').width, backgroundColor:"gray", justifyContent:'center', alignItems:'center'}}>
<Text>Salon</Text>
</Pressable>
  )
}

export default StylistSalonButton