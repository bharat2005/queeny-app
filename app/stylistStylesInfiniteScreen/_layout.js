import { View, Text } from 'react-native'
import React from 'react'
import { router, Stack } from 'expo-router'
import Entypo from '@expo/vector-icons/Entypo'
import Colors from '../../src/constants/Colors'

const StylistStylesInfiniteScreenLayout = () => {
  return (
<Stack 
screenOptions={{
  headerTitleAlign:'center',
  title:'Hairstyle',
  headerTitleStyle:{fontFamily:'medium'},
  headerLeft:()=> <Entypo name="chevron-thin-left" size={24} onPress={()=> router.back()} color={Colors.MAINPINK} />
}}
/>
  )
}

export default StylistStylesInfiniteScreenLayout