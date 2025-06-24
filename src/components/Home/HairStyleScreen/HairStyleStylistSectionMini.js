import { View, Text, Pressable, Image } from 'react-native'
import React from 'react'
import { useHairStylistById } from '../../../hooks/hairStylist/useHairStylistById'
import { router } from 'expo-router'

const HairStyleStylistSectionMini = ({stylistId}) => {
  const {data, error} = useHairStylistById(stylistId)



  return (
    <View style={{height:100, marginTop:12, borderRadius:8, width:'100%', backgroundColor:"white", borderWidth:0.8, borderColor:"lightgray", flexDirection:'row', padding:12}}>


      <Image source={{uri:data?.profileImage}} style={{height:'100%' ,width:60, borderRadius:8, backgroundColor:'black'}} />


      <View style={{height:'100%', paddingHorizontal:12}}>
        <Text style={{fontSize:14, fontFamily:'regular'}}>{data?.name}</Text>

        <View style={{flexDirection:'row', gap:8}}>
          {data?.specialties.map(item => (
            <Text key={item} style={{fontFamily:'light', fontSize:12, color:'gray'}}>• {item}</Text>
          ))}
        </View>

        <Text style={{fontFamily:'light', fontSize:12, color:'gray'}}>{data?.title}</Text>

      </View>



    </View>
  )
}

export default HairStyleStylistSectionMini