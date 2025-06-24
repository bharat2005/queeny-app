import { View, Text, Image } from 'react-native'
import React from 'react'
import LongButton from './LongButton'
import { router } from 'expo-router'

const HairStyleStylistBox = ({data}) => {
  return (
    <View style={{width:'100%',padding:12, gap:12}}>

        <View style={{flexDirection:'row', height:100,paddingHorizontal:8}}>

            <View style={{height:"100%",width:75, backgroundColor:'white', borderRadius:6, overflow:'hidden', borderWidth:0.8, borderColor:'lightgray'}}>
   <Image source={{uri:data?.profileImage}}  style={{height:'100%', width:'110%', backgroundColor:'white'}} />
            </View>
         

            <View style={{flex:1, paddingHorizontal:12}}>
                <Text style={{fontFamily:'medium', color:'black', fontSize:16}}>{data?.name}</Text>

                <Text style={{fontFamily:'light', color:'gray', fontSize:12}}>{`HairStylist (${data?.years} years of experience)`}</Text>

                <Text style={{fontFamily:'regular', color:'black', fontSize:14}}>{data?.title}</Text>

            </View>

        </View>

        <View style={{gap:8, paddingHorizontal:8}}>

            <LongButton color='pink' onPress={()=> {}} label='Reserve Stylist' />
            <LongButton color='white' onPress={()=> router.push({pathname:'/stylistScreen', params: {stylistId: data?.docId}})}label='View stylist details' />

        </View>


   
    </View>
  )
}

export default HairStyleStylistBox