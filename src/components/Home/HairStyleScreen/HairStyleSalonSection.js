import { View, Text, Dimensions, Pressable, FlatList, Image } from 'react-native'
import React from 'react'
import { useHairStyleSalonById } from '../../../hooks/hairstyleSalon/useHairstyleSalonById'
import { router } from 'expo-router'
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { head } from 'lodash'
import LongButton from '../../Shared/LongButton';

const HairStyleSalonSection = ({salonId}) => {
  const {data, error} = useHairStyleSalonById(salonId)

  const renderItem = () => (
    <View style={{height:"100%", flex:1, padding:8}}>

      <View style={{height:'100%', width:'100%', borderRadius:6, overflow:'hidden'}}>

        <Image style={{height:'100%', width:'100%', backgroundColor:'black'}} />

      </View>

    </View>   
  )



  return (
       <View style={{ width:'100%', marginVertical:12, gap:8}}>
    
    
                <View
                  style={{
                    height: 28,
                    paddingHorizontal: 12,
                    flexDirection: "row",
                    backgroundColor: "#655555",
                    alignItems: "center",
                  }}
                >
                  <Text style={{ fontFamily: "regular", color: "white", fontSize: 14 }}>
                    Salon Section
                  </Text>
                </View>















                <View style={{width:'100%'}}>

                               <View style={{width:'100%', height:36, paddingHorizontal:12, flexDirection:'row', alignItems:'center'}}>
                  <Text style={{fontFamily:'medium', fontSize:16, color:'black'}}>{data?.salonName}</Text>

                </View>


                <View style={{width:'100%', height:160, flexDirection:'row', paddingHorizontal:12}}>

                    {
                      [0,1].map(item => (
                        <View key={item} style={{height:'100%', flex:1, padding:4}}>
                          <View style={{height:'100%', width:'100%', borderRadius:6, overflow:'hidden'}}>
                            <Image source={{uri:data?.mainImages[item]}} style={{height:'100%', width:'100%', backgroundColor:'black'}}/>
                            </View>
                        </View>
                      ))
                    }

                </View>


                </View>


                <View style={{ width:'100%', paddingHorizontal:16,gap:8 }}>
                  <View style={{flexDirection:'row', alignItems:'center', gap:8}}>
                      <FontAwesome name="map-marker" size={22} color="lightgray" />
                    <Text style={{fontFamily:'regular', fontSize:14, color:'black'}}>
                      {data?.details?.address}
                    </Text>
                  </View>

                  <View style={{flexDirection:'row', gap:18, alignItems:'center'}}>

                          <View style={{flexDirection:'row', alignItems:'center', gap:8}}>
                    <AntDesign name="clockcircle" size={16} color="lightgray" />
                    <Text style={{fontFamily:'regular', fontSize:12, color:'black'}}>
                      {data?.details?.buisnessHours}
                    </Text>
                  </View>


                        <View style={{flexDirection:'row', alignItems:'center', gap:8}}>
                    <FontAwesome5 name="rupee-sign" size={18} color="lightgray" />
                    <Text style={{fontFamily:'regular', fontSize:12, color:'black'}}>
                      {data?.details?.priceRange}
                    </Text>
                  </View>

                  </View>


                  <LongButton color='white' label='View salon Details' onPress={()=> router.push({pathname:'/hairStyleSalonScreen', params:{salonId}})} />

                </View>


   





    </View>


  )
}

export default HairStyleSalonSection



  {/* //   <View style={{width:Dimensions.get('screen').width, height:300, backgroundColor:"pink", marginVertical:80}}>

  //     <Text>{data?.details.name}</Text>

  // <Pressable onPress={()=> router.push({pathname:'/hairStyleSalonScreen', params:{salonId}})} style={{height:50, width:Dimensions.get('screen').width, backgroundColor:"gray", justifyContent:'center', alignItems:'center'}}>
  // <Text>Salon</Text>
  // </Pressable>
     
  //   </View> */}