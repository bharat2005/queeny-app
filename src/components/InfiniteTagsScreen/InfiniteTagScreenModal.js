import { View, Text } from 'react-native'
import React from 'react'
import { RadioButton } from 'react-native-paper'

const InfiniteTagScreenModal = ({setType, setVisible, type}) => {
  return (
    <View style={{height:200, width:300, backgroundColor:"white"}}>

        <RadioButton.Group value={type} onValueChange={(v)=> {setType(v); setVisible(false)}}>
            <RadioButton.Item label='Popular' value='popular'/>
            <RadioButton.Item label='Trending' value='trending'/>
            <RadioButton.Item label='New' value='new'/>
        </RadioButton.Group>
  
    </View>
  )
}

export default InfiniteTagScreenModal