import { View, Text, Pressable, Dimensions, Image } from 'react-native'
import React from 'react'
import { router } from 'expo-router'
import LongButton from './LongButton'
import NailLongButton from '../../../src/components/Shared/NailLongButton'
import HairSalonLikeButton from './HairSalonLikeButton'
import NailSalonLikeButton from './NailSalonLikeButton'


const StylistCard = ({item, type, onPress}) => {
  return (
   <View style={{width:'100%', paddingVertical:6, paddingHorizontal:14}}>

    <Pressable onPress={onPress} style={{borderWidth:0.8, flexDirection:'row', borderColor:"lightgray", borderRadius:8, backgroundColor:'white', paddingHorizontal:12, paddingVertical:18}}>

      
        <View style={{ height:'100%',paddingHorizontal:8}}>

            <View style={{height:80,width:90, backgroundColor:'white', borderRadius:6, overflow:'hidden', borderWidth:0.8, borderColor:'lightgray'}}>

                {item?.mainImages && (
   <Image source={{uri:item?.mainImages[0]}}  style={{height:'100%', width:'100%', backgroundColor:'white'}} />
                )}

            </View>
         
</View>


            <View style={{ paddingHorizontal:4, gap:8, flex:1}}>
                <Text style={{fontFamily:'medium', color:'black', fontSize:16}}>{item?.salonName}</Text>

                <Text numberOfLines={2} style={{fontFamily:'regular', color:'black', fontSize:12}}>{item?.description}</Text>

                <Text style={{fontFamily:'light', color:'gray', fontSize:12}}>{item?.location}</Text>


                

    <View style={{marginTop:4}}>
                    {type==='hair' ? (
     <LongButton color='pink' onPress={()=> {}} label='Reserve Salon' />
            ) :(
    <NailLongButton color='purple' onPress={()=> {}} label='Reserve Salon'  />
            )}


    </View>

    

            </View>


<View style={{position:'absolute', top:12, right:18}}>

                    {type==='hair' ? (
        <HairSalonLikeButton salonId={item?.docId}/>
            ) :(
        <NailSalonLikeButton salonId={item?.docId} />
            )}

</View>
     


    </Pressable>


   
    </View>
  )
}

export default StylistCard