import { View, Text } from 'react-native'
import React from 'react'
import { router, Stack } from 'expo-router'
import Colors from '../../src/constants/Colors'
import Entypo from '@expo/vector-icons/Entypo'

const NailStyleInfiniteScreenLayout = () => {
    
  return (
<Stack 
screenOptions={{
  headerTitleAlign:'center',
  headerTitleStyle:{fontFamily:'medium'},
  title:"NailStyles",
  headerLeft:()=> <Entypo name="chevron-thin-left" size={24} onPress={()=> router.back()} color={Colors.MAINPURPLE} />
}}

/>
  )
}

export default NailStyleInfiniteScreenLayout