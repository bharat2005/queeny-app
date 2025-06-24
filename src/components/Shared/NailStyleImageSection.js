import { View, Text, Dimensions, Image } from 'react-native'
import React from 'react'

const HairStyleImageSection = ({data}) => {
  return (
  <View style={{height:Dimensions.get('screen').height * 0.34, width:Dimensions.get('screen').width}}>
    {data?.mediaUri ? (
<Image source={{uri: data?.mediaUri}} style={{height:'100%', width:'100%', backgroundColor:'black'}} />
    ) : (
      <View style={{height:'100%', width:'100%', backgroundColor:'black'}} />
    )}
            
</View>
  )
}

export default HairStyleImageSection