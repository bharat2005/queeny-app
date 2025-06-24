import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper'
import Colors from '../../constants/Colors'

const LongButton = ({color=Colors.MAINPINK, label='Button', onPress, fromSalon=false}) => {
  return (
    <Button onPress={onPress} style={{height:48, backgroundColor: color=== 'pink' ? Colors.MAINPINK : 'white', borderRadius:10 , borderWidth: color==='pink' ? 0 : 0.8, borderColor: 'lightgray'}} contentStyle={{height:48}} 
    labelStyle={{fontFamily:'regular', fontSize:15, color: color==='pink' ? 'white' : 'black'}}>
        {label}
    </Button>
  )
}

export default LongButton