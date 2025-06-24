import { View, Text, Dimensions, Pressable } from 'react-native'
import React from 'react'
import { useSizeNailStylesBySalonId } from '../../hooks/hairstyleSalon/useSizeNailStylesBySalonId'
import Colors from '../../constants/Colors'


const NailSalonStyleInfiniteScreenCounterHeader = ({salonId}) => {
     const {data} = useSizeNailStylesBySalonId(salonId)

  return (
    <View style={{width:Dimensions.get('screen').width}}>
      <View style={{width:'100%', height:50, flexDirection:'row', borderBlockColor:'lightgray', borderBottomWidth:0.8, paddingHorizontal:18, paddingVertical:12, alignItems:'center', justifyContent:'space-between'}}>

      <Text style={{fontFamily:'bold', fontSize:16}}>
        {data}{" "}
        <Text style={{fontFamily:'regular', fontSize:12, color:'gray'}}>
          Items
        </Text>
      </Text>

      <Pressable>
          <Text style={{fontFamily:'medium', color:Colors.MAINPURPLE, fontSize:12}}>apply filter</Text>
      </Pressable>

      </View>
    </View>
  )
}

export default NailSalonStyleInfiniteScreenCounterHeader