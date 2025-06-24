import { View, Text, FlatList } from 'react-native'
import React from 'react'

const array = [
    'specialties',
    'skills',
    'hobbies'
]

const HairStylistDeatilBox = ({data}) => {
  if (!data) return
  return (
    <View style={{width:'100%', backgroundColor:"white"}}>
            <View
        style={{
          height: 28,
          paddingHorizontal: 12,
          flexDirection: "row",
          backgroundColor: "#ebd1c2",
          alignItems: "center",
        }}
      >
        <Text style={{ fontFamily: "regular", color: "black", fontSize: 14 }}>
          Stylist bio
        </Text>
      </View>

      <View style={{width:'100%'}}>

        {array.map((item, index) => (

      <View key={item} style={{flexDirection:'row', alignItems:'center', width:'100%', borderBottomColor:'lightgray', borderBottomWidth: index !== 2 ? 0.8 : 0}}>
        
        <View style={{height:'100%', width:'30%', padding:12}}>
            <Text style={{fontFamily:'regular', fontSize:14, color:'balck'}} >
                {item}
            </Text>
        </View>

        <View style={{flex:1, minHeight:60, paddingHorizontal:8, paddingVertical:12}}>
                          <Text style={{fontFamily:'light', fontSize:14, color:'balck'}} >
            {data[item]}
            </Text>
        </View>


      </View>
        ))}
        
      </View>

    </View>
  )
}

export default HairStylistDeatilBox