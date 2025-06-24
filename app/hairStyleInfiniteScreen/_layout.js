import { View, Text } from 'react-native'
import React from 'react'
import { router, Stack } from 'expo-router'
import Entypo from '@expo/vector-icons/Entypo'
import Colors from '../../src/constants/Colors'

const HairStyleInifinteScreenLayout = () => {
  return (
<Stack 
screenOptions={{
  headerTitleAlign:'center',
  headerTitleStyle:{fontFamily:'medium'},
  title:"Hairstyle",
  headerLeft:()=> <Entypo name="chevron-thin-left" size={24} onPress={()=> router.back()} color={Colors.MAINPINK} />
}}
/>
  )
}

export default HairStyleInifinteScreenLayout