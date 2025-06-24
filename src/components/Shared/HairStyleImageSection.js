import { View, Text, Dimensions, Image } from 'react-native'
import React from 'react'

const HairStyleImageSection = ({data}) => {
  return (
  <View style={{height:Dimensions.get('screen').height * 0.6, width:Dimensions.get('screen').width}}>
            <Image source={{uri:data?.mediaUri}} style={{height:'100%', width:'100%', backgroundColor:'black'}} />
</View>
  )
}

export default HairStyleImageSection