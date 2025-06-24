import { View, Text, Dimensions } from 'react-native'
import React from 'react'

const LikesHeaaderCounter = ({count}) => {
  return (
    <View style={{height:30, width:Dimensions.get('screen').width, flexDirection:'row', backgroundColor:'white', paddingHorizontal:12, alignItems:'center', borderBottomColor:'lightgray', borderBottomWidth:0.8}}>
      <Text style={{color:'red', fontFamily:'bold'}}>
        {count}{" "}
         <Text style={{color:"black", fontFamily:'regular'}}>
items
         </Text>
        </Text>
    </View>
  )
}

export default LikesHeaaderCounter