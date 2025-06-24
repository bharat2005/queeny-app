import { View, Text, Pressable, Dimensions, Image } from 'react-native'
import React from 'react'
import { router } from 'expo-router'
import LongButton from './LongButton'
import StylistLikeButton from './StylistLikeButton'


const StylistCard = ({item}) => {
  return (
   <View style={{width:'100%', paddingVertical:6, paddingHorizontal:14, gap:12,}}>

    <Pressable 
    onPress={() =>router.push({pathname: "/stylistScreen",params: { stylistId: item?.docId }})}
    style={{borderWidth:0.8, borderColor:"lightgray", gap:18, borderRadius:8, backgroundColor:'white', paddingHorizontal:12, paddingVertical:18}}>

      
        <View style={{flexDirection:'row', height:100,paddingHorizontal:8}}>

            <View style={{height:"100%",width:75, backgroundColor:'white', borderRadius:6, overflow:'hidden', borderWidth:0.8, borderColor:'lightgray'}}>
  {item?.profileImage && (
   <Image source={{uri:item?.profileImage}}  style={{height:'100%', width:'100%', backgroundColor:'white'}} />
  )}
  

            </View>
         

            <View style={{flex:1, paddingHorizontal:12, gap:6}}>
                <Text style={{fontFamily:'medium', color:'black', fontSize:16}}>{item?.name}</Text>

                <Text style={{fontFamily:'light', color:'gray', fontSize:12}}>{`HairStylist (${item?.years} years of experience)`}</Text>

                <Text style={{fontFamily:'regular', color:'black', fontSize:14}}>{item?.title}</Text>

            </View>

        </View>

        <View style={{gap:8, paddingHorizontal:8}}>

            <LongButton color='pink' onPress={()=> {}} label='Reserve Stylist' />

        </View>

        <View style={{position:'absolute', top:18, right:18}}>
            <StylistLikeButton stylistId={item?.docId} />
        </View>


    </Pressable>


   
    </View>
  )
}

export default StylistCard