import { View, Text, Dimensions, Pressable } from 'react-native'
import React from 'react'
import { useSizeHairStylistBySalonId } from '../../hooks/hairStylist/useSizeHairStylistBySalonId'


const SalonStylistInfiniteScreenCounterHeader = ({salonId}) => {
     const {data} = useSizeHairStylistBySalonId(salonId)

  return (
    <View style={{width:Dimensions.get('screen').width, backgroundColor:'white'}}>
      <View style={{width:'100%', height:50, flexDirection:'row', borderBlockColor:'lightgray', borderBottomWidth:0.8, paddingHorizontal:18, paddingVertical:12, alignItems:'center', justifyContent:'space-between'}}>

      <Text style={{fontFamily:'bold', fontSize:16}}>
        {data}{" "}
        <Text style={{fontFamily:'regular', fontSize:12, color:'gray'}}>
          Items
        </Text>
      </Text>

      <Pressable>
          <Text style={{fontFamily:'medium', color:'red', fontSize:12}}>apply filter</Text>
      </Pressable>

      </View>
    </View>
  )
}

export default SalonStylistInfiniteScreenCounterHeader