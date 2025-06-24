import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper'
import Colors from '../../constants/Colors'

const LongButton = ({color=Colors.MAINPURPLE, label='Button', onPress, fromSalon=false}) => {
  return (
    <Button onPress={onPress} style={{height:48, backgroundColor: color=== 'purple' ? Colors.MAINPURPLE : 'white', borderRadius:10 , borderWidth: color==='purple' ? 0 : 0.8, borderColor: 'lightgray'}} contentStyle={{height:48}} 
    labelStyle={{fontFamily:'regular', fontSize:15, color: color==='purple' ? 'white' : 'black'}}>
        {label}
    </Button>
  )
}

export default LongButton