import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { useHairStylistById } from '../../../hooks/hairStylist/useHairStylistById'
import { router } from 'expo-router'
import HairStyleStylistBox from '../../Shared/HairStyleStylistBox'
import StylistSimilarHairSyles from '../../StylistScreen/StylistSimilarHairSyles'

const HairStyleStylistSection = ({stylistId}) => {
  const {data, error} = useHairStylistById(stylistId)



  return (
    <View style={{ width:'100%', marginVertical:12, gap:12}}>


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
                Stylist Section
              </Text>
            </View>


            <HairStyleStylistBox data={data} />


            <View style={{width:'100%', gap:18}}>

                      <View
                        style={{
                          flexDirection: "row",
                          paddingHorizontal: 12,
                          height: 22,
                          gap: 12,
                          alignItems: "center",
                        }}
                      >
                        <View
                          style={{ height: "100%", width: 6, backgroundColor: "black" }}
                        />
              
                        <Text style={{ fontFamily: "regular", fontSize: 14 }}>Similar Styles</Text>
                      </View>

                      <StylistSimilarHairSyles  stylistId={stylistId} stylistName={data?.name} />

            </View>





























{/* 
        <Text>
            {data?.name}
        </Text>

        <Pressable onPress={()=> router.push({pathname:'/stylistScreen', params: {stylistId}})} style={{height:50, width:'100%', backgroundColor:'deeppink', marginTop:'auto'}}>
            <Text>
                View  Stylist
            </Text>
        </Pressable>

 */}









    </View>
  )
}

export default HairStyleStylistSection